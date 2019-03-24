import React from 'react';
import {Link} from 'react-router';
import connect from "react-redux/es/connect/connect";
import {User} from '../../../fonts/icons/layout/user'



class LayoutUser extends React.Component {
    render() {
        return this.props.user.id ?
            <Link className={this.props.active ? "layout-user active": "layout-user"}
                  to={'/profile'}>
                <div className={'layout-user__avatar'}
                     style={{background: 'url("./images/user-black.png")', 'background-size': 'cover'}}/>
                <div className="layout-user__user-text">
                    <div className="layout-user__user-name">{this.props.user.name}</div>
                </div>
            </Link> :
            <div className={this.props.active ? "layout-user active": "layout-user"}>
                <div className={'layout-user__avatar'}>
                    <User/>
                </div>
                <div className="layout-user__login layout-user__user-text">Вход</div>
                <div className="layout-user__sign-in layout-user__user-text">Регистрация</div>
            </div>;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(LayoutUser);