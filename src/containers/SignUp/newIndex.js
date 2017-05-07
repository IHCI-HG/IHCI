import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import './signup.scss'


//状态编码定义

const USERNAME_EMPTY = 0
const USERNAME_INVALID_EXIST = 1
const USERNAME_INVALID_TOO_SHORT = 2
const USERNAME_INVALID_TOO_LONG = 3
const USERNAME_INVALID_ERROR_FORMAT = 5
const USERNAME_CHECKING = 6
const USERNAME_VALID = 10

const PASSWORD_EMPTY = 0
const PASSWORD_TOO_SHORT = 1
const PASSWORD_TOO_LONG = 2
const PASSWORD_VALID_WEAK = 3
const PASSWORD_VALID_MIDDLE = 4
const PASSWORD_VALID_STRONG = 5

const CHECK_PASSWORD_EMPTY = 0
const CHECK_PASSWORD_INCONFORMITY = 1
const CHECK_PASSWORD_VALID = 2

const CAPTCHA_EMPTY = 0
const CAPTCHA_INVALID = 1
const CAPTCHA_VALID = 2

const ACCESS_VALID = true
const ACCESS_INVALID = false


class SignUp extends Component {
    constructor(props) {
        super(props);

    }

    //componentWillMount会在组件render之前执行，并且永远都只执行一次。
    componentWillMount() {
        this.setState({
            usernameState: USERNAME_EMPTY,
            passwordState: PASSWORD_EMPTY,
            checkPasswordState: CHECK_PASSWORD_EMPTY,
            accessState: ACCESS_INVALID
        })
    }

    //这个方法会在组件加载完毕之后立即执行。
    componentDidMount() {

    }

    //在组件接收到一个新的prop时被执行。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(nextProps) {
        //旧的props可以通过this.props来获取。在这个函数内调用this.setState()方法不会增加一次新的render.
    }

    //返回一个布尔值。在组件接收到新的props或者state时被执行。在初始化时或者使用forceUpdate时不被执行。  可以在你确认不需要更新组件时使用
    // shouldComponentUpdate(nextProps, nextState) {

    // }

    //在组件接收到新的props或者state但还没有render时被执行。在初始化时不会被执行。
    componentWillUpdate(nextProps, nextState) {

    }

    //在组件完成更新后立即执行。在初始化时不会被执行。一般会在组件完成更新后被使用。例如清除notification文字等操作。
    componentDidUpdate(prevProps, prevState) {

    }

    //在组件从DOM unmount后立即执行.
    componentWillUnmount() {

    }

    usernameCheck() {
        const that = this
        const emailPatterns = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!this.refs.username.value) {
            that.setState({ usernameState: USERNAME_EMPTY })
        } else if (this.refs.username.value.length < 4) {
            that.setState({ usernameState: USERNAME_INVALID_TOO_SHORT })
        } else if (this.refs.username.value.length > 20) {
            that.setState({ usernameState: USERNAME_INVALID_TOO_LONG })
        } else if (!emailPatterns.test(this.refs.username.value)) {
            that.setState({ usernameState: USERNAME_INVALID_ERROR_FORMAT })
        } else {
            $.ajax({
                method: 'get',
                // url: '/accountCheak.json?username=' + this.refs.username.value,
                url: '/api/project/user/isNameExit?username=' + this.refs.username.value,
                // url: 'http://192.168.1.62:3000/api/project/user/isNameExit?name=' + this.refs.username.value
                beforeSend: function () {
                    that.setState({ usernameState: USERNAME_CHECKING })
                }
            }).done(function (data) {
                if (data.exist) {
                    that.setState({ usernameState: USERNAME_INVALID_EXIST })
                } else {
                    that.setState({ usernameState: USERNAME_VALID })
                }
            })
        }
    }

    usernameExistSpan(usernameState) {
        switch (usernameState) {
            case USERNAME_INVALID_EXIST:
                return <div> X </div>
            case USERNAME_VALID:
                return <div> √ </div>
            case USERNAME_EMPTY:
                return <div />
            default:
                return <div> X </div>
        }
    }

    usernameExistState() {
        switch (this.state.usernameState) {
            case USERNAME_INVALID_EXIST:
            case USERNAME_INVALID_ERROR_FORMAT:
                return 'has-error'
            case USERNAME_CHECKING:
                return 'has-warning'
            case USERNAME_VALID:
                return 'has-success'
            case USERNAME_EMPTY:
                return ' '
            default:
                return 'has-error'
        }
    }

    usernameVerificationSpan() {
        switch (this.state.usernameState) {
            case USERNAME_INVALID_EXIST:
                return <div className='help-block'> 邮箱已被使用 </div>
            case USERNAME_VALID:
                return <div className='help-block'> 邮箱可用 </div>
            case USERNAME_INVALID_ERROR_FORMAT:
                return <div className='help-block'> 错误的邮箱格式 </div>
            case USERNAME_INVALID_TOO_SHORT:
                return <div className='help-block'> 用户名太短 </div>
            case USERNAME_INVALID_TOO_LONG:
                return <div className='help-block'> 用户名太长 </div>
            default:
                return <div className='help-block'> 请输入您的邮箱 </div>
        }
    }

    passwordCheck() {
        const that = this
        if (!this.refs.password.value) {
            that.setState({ passwordState: PASSWORD_EMPTY })
        } else if (this.refs.password.value.length < 4) {
            that.setState({ passwordState: PASSWORD_TOO_SHORT })
        } else if (this.refs.password.value.length > 20) {
            that.setState({ passwordState: PASSWORD_TOO_LONG })
        } else {
            // 密码强度检测
            that.setState({ passwordState: PASSWORD_VALID_MIDDLE })
        }
    }

    passwordState() {
        switch (this.state.passwordState) {
            case PASSWORD_EMPTY:
                return ' '
            case PASSWORD_VALID_WEAK:
                return 'has-warning'
            case PASSWORD_VALID_MIDDLE:
            case PASSWORD_VALID_STRONG:
                return 'has-success'
            case PASSWORD_TOO_LONG:
            case PASSWORD_TOO_SHORT:
                return 'has-error'
            default:
                return ' '
        }
    }

    passwordCheckSpan(passwordState) {
        // if (this.state.checkPasswordState != CHECK_PASSWORD_EMPTY) {
        //   this.checkPasswordCheck()
        // }
        switch (passwordState) {
            case PASSWORD_EMPTY:
                return <div className='help-block'>请输入密码</div>
            case PASSWORD_TOO_LONG:
                return <div className='help-block'>密码超过二十位</div>
            case PASSWORD_TOO_SHORT:
                return <div className='help-block'>密码长度短于四位</div>
            case PASSWORD_VALID_MIDDLE:
                return <div className='help-block'>密码强度一般</div>
            case PASSWORD_VALID_STRONG:
                return <div className='help-block'>密码强度强</div>
            case PASSWORD_VALID_WEAK:
                return <div className='help-block'>密码强度弱</div>
            default:
                return ''
        }
    }
    checkPasswordCheck() {
        const that = this
        if (!this.refs.checkPassword.value) {
            that.setState({ checkPasswordState: CHECK_PASSWORD_EMPTY })
        } else if (this.refs.checkPassword.value != this.refs.password.value) {
            that.setState({ checkPasswordState: CHECK_PASSWORD_INCONFORMITY })
        } else if (this.refs.checkPassword.value === this.refs.password.value) {
            that.setState({ checkPasswordState: CHECK_PASSWORD_VALID })
        }
    }

    checkPasswordState() {
        switch (this.state.checkPasswordState) {
            case CHECK_PASSWORD_EMPTY:
                return ' '
            case CHECK_PASSWORD_VALID:
                return 'has-success'
            case CHECK_PASSWORD_INCONFORMITY:
                return 'has-error'
        }
    }

    checkPasswordSpan(checkPasswordState) {
        switch (checkPasswordState) {
            case CHECK_PASSWORD_EMPTY:
                return <div className='help-block'>再次输入密码</div>
            case CHECK_PASSWORD_INCONFORMITY:
                return <div className='help-block'>两次密码输入不一致</div>
            case CHECK_PASSWORD_VALID:
                return <div className='help-block'>两次密码输入一致</div>
        }
    }

    getCaptcha() {
        // const that = this.arguments;
        $.ajax({
            method: 'GET',
            url: 'getCaptcha.json'
        }).done(function (data) {

        })
    }

    changeAccess() {
        this.setState({ accessState: (this.state.accessState ? ACCESS_INVALID : ACCESS_VALID) })
    }

    signUp() {
        $.ajax({
            method: 'POST',
            // url: 'signUp.json',
            url: 'api/project/user/createUser',
            data: {
                username: this.refs.username.value,
                password: this.refs.password.value
            }
        }).done(function (data) {
            alert("注册成功")
            browserHistory.goBack();
        })
    }

    signUpButton() {
        if (
            this.state.usernameState === USERNAME_VALID
            && (this.state.passwordState === PASSWORD_VALID_MIDDLE
                || this.state.passwordState === PASSWORD_VALID_WEAK
                || this.state.passwordState === PASSWORD_VALID_STRONG)
            && this.state.checkPasswordState === CHECK_PASSWORD_VALID
            && this.state.accessState === ACCESS_VALID
        ) {
            return <button onClick={this.signUp.bind(this)} className='btn btn-primary pull-right'> 注册 </button>
        } else {
            return <button disabled='true' className='btn btn-primary pull-right'> 注册</button>
        }
    }

    signUpPopUp() {
        if (
            this.state.usernameState === USERNAME_VALID
            && (this.state.passwordState === PASSWORD_VALID_MIDDLE
                || this.state.passwordState === PASSWORD_VALID_WEAK
                || this.state.passwordState === PASSWORD_VALID_STRONG)
            && this.state.checkPasswordState === CHECK_PASSWORD_VALID
            && this.state.accessState === ACCESS_VALID
        ) {
            return <PopUp disable={false} email={this.refs.username.value} password={this.refs.password.value}> 注册 </PopUp>
        } else {
            return <PopUp disable> 注册 </PopUp>
        }
    }

    render() {
        return (
            <div>
                <div className={'form-group ' + this.usernameExistState()}>
                    <input type='text' className='form-control' ref='username' placeholder='邮箱' onChange={this.usernameCheck.bind(this)} />
                    {this.usernameVerificationSpan()}
                </div>

                <div className={'form-group ' + this.passwordState()}>
                    <input type='password' className='form-control' ref='password' placeholder='密码' onChange={this.passwordCheck.bind(this)} />
                    {this.passwordCheckSpan(this.state.passwordState)}
                </div>

                <div className={'form-group ' + this.checkPasswordState()}>
                    <input type='password'
                        className='form-control'
                        ref='checkPassword'
                        placeholder='确认密码'
                        onChange={this.checkPasswordCheck.bind(this)}
                    />
                    {this.checkPasswordSpan(this.state.checkPasswordState)}

                </div>

                <div className = 'lable'>   
                    <input type='checkbox' checked={this.state.accessState} onChange={this.changeAccess.bind(this)} />  <span>接受</span>                 
                    {this.signUpButton()}     
                </div>

            </div>
        );
    }
}



export default SignUp;