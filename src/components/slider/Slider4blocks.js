import React from 'react';

import * as classNames from 'classnames/bind';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";

const styles = require('./Slider4blocks.less');
const cx = classNames.bind(styles);

let timerSlider;


export default class Slider4blocks extends React.Component {
    state = {
        current: false,
        page: 0,
        prevPage: 3,
    };

    render() {
        return <div id='slider' className={cx("slider")}>

            <div className={cx("slider__panel slider__panel_current")}
                 key={this.state.page}
            >
                {this.renderPage(this.state.page)}
            </div>
            <div className={cx("slider__panel")}
                 key={this.state.prevPage}>
                {this.renderPage(this.state.prevPage)}
            </div>
            <div className="slider__nav">
                <FontAwesomeIcon
                    icon={faAngleUp}
                    onClick={() => {
                        clearTimeout(timerSlider);
                        this.showNext();
                        timerSlider = setInterval(() => this.showNext(), 5000);
                    }}
                />
                {this.props.slides.map((slide, index)=>{
                return <div
                    className={cx({"slider__nav-point": true,  "slider__nav-point_current": index === this.state.page})}
                />})}
                <FontAwesomeIcon
                    icon={faAngleDown}
                    onClick={() => {
                        clearTimeout(timerSlider);
                        this.showPrevious();
                        timerSlider = setInterval(() => this.showNext(), 5000);
                    }}
                />

            </div>
        </div>
    }


    renderPage(slideNumber) {
        const slides = this.props.slides;

        return [<div className="slider__part slider__part-1">
            <img src={slides[slideNumber]} className="bg-img slider__part-1"/>
        </div>,
            <div className="slider__part slider__part-2">
                <img src={slides[slideNumber]} className="bg-img slider__part-2"/>
            </div>,
            <div className="slider__part slider__part-3">
                <img src={slides[slideNumber]} className="bg-img slider__part-3"/>
            </div>,
            <div className="slider__part slider__part-4">
                <img src={slides[slideNumber]} className="bg-img slider__part-4"/>
            </div>]
    }

    showNext() {
        this.setState({
            page: (this.state.page + 1) % this.props.slides.length,
            prevPage: this.state.page
        });

    }

    showPrevious() {
        this.setState({
            page: (this.state.page) ? (this.state.page - 1) : this.props.slides.length - 1,
            prevPage: this.state.page
        })
    }

    componentDidMount() {
        timerSlider = setInterval(() => this.showNext(), 5000);
    }
}