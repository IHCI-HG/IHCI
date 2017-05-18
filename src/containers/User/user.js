import React, { Component } from 'react';
import { connect } from 'react-redux'

const NEW_PASSWORD_EMPTY = 0
const NEW_PASSWORD_TOO_SHORT = 1
const NEW_PASSWORD_TOO_LONG = 2
const NEW_PASSWORD_VALID_WEAK = 3
const NEW_PASSWORD_VALID_MIDDLE = 4
const NEW_PASSWORD_VALID_STRONG = 5

const CHECK_NEW_PASSWORD_EMPTY = 0
const CHECK_NEW_PASSWORD_INCONFORMITY = 1
const CHECK_NEW_PASSWORD_VALID = 2

class User extends Component {

<<<<<<< HEAD
componentWillMount() {
        this.setState({
            newPasswordState: NEW_PASSWORD_EMPTY,
            checkNewPasswordState: CHECK_NEW_PASSWORD_EMPTY,
        })
    }

passwordCheck() {
        const that = this
        if (!this.refs.password.value) {
            that.setState({ passwordState: NEW_PASSWORD_EMPTY })
        } else if (this.refs.password.value.length < 4) {
            that.setState({ passwordState: NEW_PASSWORD_TOO_SHORT })
        } else if (this.refs.password.value.length > 20) {
            that.setState({ passwordState: NEW_PASSWORD_TOO_LONG })
        } else {
            // 密码强度检测
            that.setState({ passwordState: NEW_PASSWORD_VALID_MIDDLE })
        }
    }

    passwordState() {
        switch (this.state.passwordState) {
            case NEW_PASSWORD_EMPTY:
                return ' '
            case NEW_PASSWORD_VALID_WEAK:
                return 'has-warning'
            case NEW_PASSWORD_VALID_MIDDLE:
            case NEW_PASSWORD_VALID_STRONG:
                return 'has-success'
            case NEW_PASSWORD_TOO_LONG:
            case NEW_PASSWORD_TOO_SHORT:
                return 'has-error'
            default:
                return ' '
        }
    }

    passwordCheckSpan(newPasswordState) {
        // if (this.state.checkPasswordState != CHECK_PASSWORD_EMPTY) {
        //   this.checkPasswordCheck()
        // }
        switch (newPasswordState) {
            case NEW_PASSWORD_EMPTY:
                return <div className='help-block'>请输入新密码</div>
            case NEW_PASSWORD_TOO_LONG:
                return <div className='help-block'>密码超过二十位</div>
            case NEW_PASSWORD_TOO_SHORT:
                return <div className='help-block'>密码长度短于四位</div>
            case NEW_PASSWORD_VALID_MIDDLE:
                return <div className='help-block'>密码强度一般</div>
            case NEW_PASSWORD_VALID_STRONG:
                return <div className='help-block'>密码强度强</div>
            case NEW_PASSWORD_VALID_WEAK:
                return <div className='help-block'>密码强度弱</div>
            default:
                return ''
        }
    }
    checkNewPasswordCheck() {
        const that = this
        if (!this.refs.checkPassword.value) {
            that.setState({ checkPasswordState: CHECK_NEW_PASSWORD_EMPTY })
        } else if (this.refs.checkPassword.value != this.refs.password.value) {
            that.setState({ checkPasswordState: CHECK_NEW_PASSWORD_INCONFORMITY })
        } else if (this.refs.checkPassword.value === this.refs.password.value) {
            that.setState({ checkPasswordState: CHECK_NEW_PASSWORD_VALID })
        }
    }

    checkNewPasswordState() {
        switch (this.state.checkPasswordState) {
            case CHECK_NEW_PASSWORD_EMPTY:
                return ' '
            case CHECK_NEW_PASSWORD_VALID:
                return 'has-success'
            case CHECK_NEW_PASSWORD_INCONFORMITY:
                return 'has-error'
        }
    }

    checkPasswordSpan(checkNewPasswordState) {
        switch (checkNewPasswordState) {
            case CHECK_NEW_PASSWORD_EMPTY:
                return <div className='help-block'>再次输入密码</div>
            case CHECK_NEW_PASSWORD_INCONFORMITY:
                return <div className='help-block'>两次密码输入不一致</div>
            case CHECK_NEW_PASSWORD_VALID:
                return <div className='help-block'>两次密码输入一致</div>
        }
=======
    state = {
        isBindWechat : true,
    }

    componentDidMount() {
          !function (a, b) { function d(a) { var e, c = b.createElement("iframe"), d = "https://open.weixin.qq.com/connect/qrconnect?appid=" + a.appid + "&scope=" + a.scope + "&redirect_uri=" + a.redirect_uri + "&state=" + a.state + "&login_type=jssdk"; d += a.style ? "&style=" + a.style : "", d += a.href ? "&href=" + a.href : "", c.src = d, c.frameBorder = "0", c.allowTransparency = "true", c.scrolling = "no", c.width = "300px", c.height = "400px", e = b.getElementById(a.id), e.innerHTML = " ", e.appendChild(c) } a.WxLogin = d }(window, document);

    }


    bindWechat() {
        // this.setState({isBindWechat : true})
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

    unbindWechat() {
        this.setState({isBindWechat : false})
>>>>>>> origin
    }

    loginJudge() {
        if (this.props.isLogin) {
            return (
                <div>
                    <div className="page-header">
                        <h1> 个人设置 </h1>
                    </div>
                    <div className="form-group">
                        <label>账号邮箱</label>
                        <input type="email" disabled="true" className="form-control" placeholder={this.props.email + "  (已绑定)"}/>
                    </div>
                    {/*<div className="form-group">
                        <label>密码</label>
                        <input type="password" className="form-control" placeholder='请输入新密码'/>
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder='请确认新密码'/>
                            <span className="input-group-btn">
                                 <button  className="btn btn-default pull-right">确认</button>
                            </span>
                        </div>
                    </div>*/}

                    <div className={'form-group ' + this.passwordState()}>
                    <input type='password' className='form-control' ref='password' placeholder='新密码' onChange={this.passwordCheck.bind(this)} />
                    {this.passwordCheckSpan(this.state.passwordState)}
                </div>

                <div className={'form-group ' + this.checkNewPasswordState()}>
                    <input type='password'
                        className='form-control'
                        ref='checkPassword'
                        placeholder='确认新密码'
                        onChange={this.checkNewPasswordCheck.bind(this)}
                    />
                    {this.checkPasswordSpan(this.state.checkPasswordState)}

                </div>

                    <div className="form-group">
                        <label>第三方账号关联</label>
                        {
                            this.state.isBindWechat ?
                            <div className="input-group">
                                <input type="password" disabled="true" className="form-control" placeholder='微信 (已绑定)'/>
                                <span className="input-group-btn">
                                    <div  onClick={this.unbindWechat.bind(this)} className="btn btn-default pull-right">解除绑定</div>
                                </span>
                            </div>
                            :
                            <div className="input-group">
                                <input type="password" disabled="true" className="form-control" placeholder='微信 (未绑定)'/>
                                <span className="input-group-btn">
                                    <div onClick={this.bindWechat.bind(this)} data-toggle="modal" data-target="#myModal" className="btn btn-default pull-right">点击绑定</div>
                                </span>
                            </div>
                        }

                    </div>
                </div>
            )
        } else {
            return "请先登录"
        }
    }

    render() {
        return (
            <div>
                {this.loginJudge()}
            </div>
        );
    }
}



const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
    isLogin: state.user.isLogin,
    email: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
