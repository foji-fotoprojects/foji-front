import React from 'react';

import Location from "../../icons/location/Location";
import Calendar from "../../icons/calendar/Calendar";
import Clock from "../../icons/clock/Clock";
import Photo from "../../icons/photo/Photo";
import TimeInterval from "../../icons/timeInterval/TimeInterval";

import styles from './projectCard.sass'

export default class ProjectCard extends React.Component {
    render() {
        return (
            <article className={styles.card}>
                <p className={`additional_text_red`}>{this.props.theme}</p>
                <h2>{this.props.name}</h2>
                <p className={`additional_text`}>Город: Москва</p>
                <img className={styles.image} src="../img/photo.jpg" alt=""/>
                <div className={`text ${styles.address}`}>
                    <Location/>
                    <span className={styles.address_text}>{this.props.location}</span>
                </div>


                <div className={styles.information}>
                    <div className={styles.info}>
                        <div className={`${styles.date} ${styles.day}`}>
                            <div className={styles.icon}>
                                <Calendar/>
                            </div>
                            <div>
                                <p className={`text`}>
                                    {this.props.dateStart}
                                </p>
                                <p className={`text`}>
                                    {this.props.dateEnd}
                                </p>
                            </div>
                        </div>
                        <div className={styles.date}>
                            <div className={styles.icon}>
                                <Photo/>
                            </div>
                            <div>
                                <p className={`text`}>
                                    {this.props.qtyPhotos} шт.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.time}>
                            <div className={styles.icon}>
                                <Clock/>
                            </div>
                            <div>
                                <p className={`text`}>
                                    {this.props.timeStart} - {this.props.timeEnd}
                                </p>
                                <p className={`text`}>
                                    {this.props.timeStart} - {this.props.timeEnd}
                                </p>
                            </div>
                        </div>
                        <div className={styles.time}>
                            <div className={styles.icon}>
                                <TimeInterval/>
                            </div>
                            <div>
                                <p className={`text`}>
                                    {this.props.duration} часов
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.pay} ${styles.info}`}>
                        <div className={`${styles.prepayment}`}>
                            <span className={`text`}>Предоплата:</span> {this.props.prepayment} р.
                        </div>
                        <div className={`${styles.price}`}>
                            {this.props.price} р.
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}