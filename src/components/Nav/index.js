import { connect } from 'react-redux'
import React, { Component } from 'react';
// import WechatLogin from './components/Login-wechat'
import { browserHistory } from 'react-router'

import {
    cheakIfLogin,
    login,
    signOut
} from '../../actions/user';

//  旧的不规范的导航条，
// const oldNav = React.createClass({
//     componentDidMount() {
//         const that = this
//         // 初始化的时候向服务器检查session,判断是否已经登录
//         $.ajax({
//             url: '/api/project/signin',
//             method: 'GET'
//         }).done(function (data) {
//             console.log(data)
//             if (data !== 'sign first') {
//                 that.props.login(data)
//             } else {
//                 localStorage.clear()
//             }
//         })
//     },
//     btnSignUp() {
//         browserHistory.push('/signUp')
//     },
//     btnLogin(e) {
//         const that = this
//         e.preventDefault()
//         $.ajax({
//             url: '/api/project/signin',
//             method: 'POST',
//             data: {
//                 username: that.refs.username.value,
//                 password: that.refs.password.value
//             }
//         }).done(function (data) {
//             if (data === 'sign failed, name or password error') {
//                 alert('账号或者密码错误')
//             } else {
//                 //that.props.login(that.refs.username.value)
//                 localStorage.userId = data[0].dataId
//                 localStorage.userName = data[0].username;
//                 localStorage.wechat = data[0].wechat;
//                 localStorage.phone = data[0].phone;
//                 localStorage.isActive = data[0].isActive;
//                 that.props.login(data[0].username)
//             }
//         })
//     },
//     btnSignOut(e) {
//         this.props.signOut()
//     },
//     user(isLogin) {
//         if (isLogin) {
//             return (
//                 <div>
//                     <div> user: <Link to='/user'> {this.props.user} </Link> </div>
//                     <button onClick={this.btnSignOut}>sign out</button>
//                 </div>
//             )
//         }
//         return (
//             <li className='dropdown'>
//                 <a href='#'
//                     className='dropdown-toggle'
//                     data-toggle='dropdown' role='button'
//                     aria-haspopup='true'
//                     aria-expanded='false'>
//                     Login
//           <span className='caret'> </span>
//                 </a>
//                 <ul className='dropdown-menu'>
//                     <div>
//                         <div>
//                             <input ref='username' type='text' placeholder='user' />
//                             <input ref='password' type='text' placeholder='password' />
//                             <button onClick={this.btnLogin}>login</button>
//                             <button onClick={this.btnSignUp}>sign up</button>
//                             <WechatLogin> </WechatLogin>
//                         </div>
//                     </div>
//                 </ul>
//             </li>

//         )
//     },
//     active(navName) {
//         if (navName === this.props.location.pathname) {
//             return "active"
//         } else return ""
//     },
//     render() {
//         return (
//             <nav className='navbar navbar-default'>
//                 <div className='container-fluid'>
//                     <div className='navbar-header'>
//                         <button type='button'
//                             className='navbar-toggle collapsed'
//                             data-toggle='collapse'
//                             data-target='#bs-example-navbar-collapse-1'
//                             aria-expanded='false'>
//                             <span className='sr-only'>Toggle navigation</span>
//                             <span className='icon-bar'> </span>
//                             <span className='icon-bar'> </span>
//                             <span className='icon-bar'> </span>
//                         </button>
//                         <Link className='navbar-brand' to='/'>Main</Link>
//                     </div>

//                     <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
//                         <ul className='nav navbar-nav'>
//                             <li className={this.active("/about")}><Link to='/about'>ABOUT</Link></li>
//                             <li className={this.active("/counter")}><Link to='/counter'>counter</Link></li>
//                             <li className={this.active("/user")}><Link to='/user'>user</Link></li>
//                         </ul>
//                         <ul className='nav navbar-nav navbar-right'>
//                             {this.user(this.props.isLogin)}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// })



export class Nav extends Component {

    constructor(props) {
        super(props);

        // console.log(this.props.cheakIfLogin())

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

    componentDidMount() {

    }

    // 异步接口请求事件
    // async getLoginState() {

    //     const result = await this.props.cheakIfLogin();
    //     return (result === "sign first") ? false : true

    // }

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
                <div>
                    <div onClick={() => browserHistory.push("/user")}>user: {this.props.user} </div>
                    <button onClick={this.props.signOut}>登出</button>
                </div>
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
                                <input ref='password' type='text' placeholder='password' />
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

    //用来判断当前目录是否被激活，来调整相应导航条样式的
    active(navName) {
        if (navName === this.props.location.pathname) {
            return "active"
        } else return ""
    }



    componentDidMount() {

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
            /*<nav className='navbar navbar-default'>
                <lidiv className='container-fluid'>
                    <li className='navbar-header'>
                        <button type='button'
                            className='navbar-toggle collapsed'
                            data-toggle='collapse'
                            data-target='#bs-example-navbar-collapse-1'
                            aria-expanded='false'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'> </span>
                            <span className='icon-bar'> </span>
                            <span className='icon-bar'> </span>
                        </button>
                        <li className='navbar-brand' onClick={() => browserHistory.push('/')}>Main</li>
                        <li className='navbar-brand btn' onClick={this.test}>test</li>
                    </li>

                    <div className='collapse navbar-collapse'>
                        <ul className='nav navbar-nav'>
                            <li className='dropdown'>
                                <a href='#'
                                    className='dropdown-toggle'
                                    data-toggle='dropdown' role='button'
                                    aria-haspopup='true'
                                    aria-expanded='false'>
                                    demo
                                <div className='caret'> </div>
                                </a>
                                <ul className='dropdown-menu'>
                                    <li><a onClick = {() => {browserHistory.push("/aaa")}} >Action</a></li>
                                    <li><a onClick = {() => {browserHistory.push("/")}}  >Another action</a></li>
                                    <li className="divider"></li>
                                    <li><a onClick = {() => {browserHistory.push("/demoCompoant/counter")}} >counter</a></li>
                                    <li><a onClick = {() => {browserHistory.push("/demoCompoant/about")}} >about</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='nav navbar-nav navbar-right'>
                            {this.user()}
                        </ul>
                    </div>
                </div>
            </nav>    */
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

