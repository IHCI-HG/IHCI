import { connect } from 'react-redux'
import React, { Component } from 'react';
import { browserHistory } from 'react-router'

import {
    cheakIfLogin,
    login,
    signOut
} from '../../actions/user';

export class Nav extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.cheakIfLogin();
        if(this.props.isLogin) {
            this.props.login({
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password')
            })
        }
    }

    btnLogin(e) {
        this.props.login({
            username: this.refs.username.value,
            password: this.refs.password.value
        })
    }

    btnWechat() {
        !function (a, b) { function d(a) { var e, c = b.createElement("iframe"), d = "https://open.weixin.qq.com/connect/qrconnect?appid=" + a.appid + "&scope=" + a.scope + "&redirect_uri=" + a.redirect_uri + "&state=" + a.state + "&login_type=jssdk"; d += a.style ? "&style=" + a.style : "", d += a.href ? "&href=" + a.href : "", c.src = d, c.frameBorder = "0", c.allowTransparency = "true", c.scrolling = "no", c.width = "300px", c.height = "400px", e = b.getElementById(a.id), e.innerHTML = " ", e.appendChild(c) } a.WxLogin = d }(window, document);
        setTimeout(function () {
            var obj = new WxLogin({
                id: "wechat-login",
                appid: "wx50a231aefaff3222",
                scope: "snsapi_login",
                redirect_uri: "http%3A%2F%2F120.25.207.237%2Fapi%2Fproject%2Fuser%2Fwechat%2FLogin",
                state: "",
                style: "",
                href: ""
            }, 1000);
        })
    }

    user() {
        if (this.props.isLogin) {
            return (
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        用户
                    </a>
                    <ul className="dropdown-menu">
                        <li onClick={() => browserHistory.push("/resume")}><a>简历</a></li>
                        <li onClick={() => browserHistory.push("/user")}> <a>个人设置</a> </li>
                        <li onClick={this.props.signOut}><a>登出</a></li>
                    </ul>
                </li>
            )
        }
        return (
            <div className="nav navbar-nav">
                <li className='dropdown'>
                    <a href='#'
                        className='dropdown-toggle'
                        data-toggle='dropdown' role='button'
                        aria-haspopup='true'
                        aria-expanded='false'>
                        登录
                        <div className='caret'> </div>
                    </a>
                    <ul className='dropdown-menu'>
                        <div>
                            <div>
                                <input ref='username' type='text' placeholder='user' />
                                <input ref='password' type='password' placeholder='password' />
                                <button onClick={this.btnLogin.bind(this)}>登录</button>
                                <button type="button" onClick={this.btnWechat}  data-toggle="modal" data-target="#myModal">
                                    微信登录
                                </button>
                                <div id="login_container"> </div>
                            </div>
                        </div>
                    </ul>
                </li>
                <li onClick={() => browserHistory.push('/SignUp')}><a href="javascript:void(0)">注册</a></li>
            </div>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#example-navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" onClick={() => browserHistory.push('/')}>Main</a>
                        {/*<a className="navbar-brand" onClick={() => browserHistory.push('/blog')}>博客</a>*/}
                    </div>
                    <div className="collapse navbar-collapse" id="example-navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li onClick={() => browserHistory.push('/blog')}><a href="javascript:void(0)">博客</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    Demo <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a onClick = {() => {browserHistory.push("/aaa")}} >Action</a></li>
                                    <li><a onClick = {() => {browserHistory.push("/")}}  >Another action</a></li>
                                    <li className="divider"></li>
                                    <li><a onClick = {() => {browserHistory.push("/demoCompoant/counter")}} >counter</a></li>
                                    <li><a onClick = {() => {browserHistory.push("/demoCompoant/about")}} >about</a></li>
                                     <li><a onClick = {() => {browserHistory.push("/TodoList")}} >todolist</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='nav navbar-nav navbar-right'>
                            {this.user()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
        user: state.user.user,
        userId: state.user.userId,
    }
}

const mapDispatchToProps = {
    login: (arg) => login(arg),
    signOut: () => signOut(),
    cheakIfLogin: () => cheakIfLogin(),
}

export default Nav = connect(mapStateToProps, mapDispatchToProps)(Nav)


