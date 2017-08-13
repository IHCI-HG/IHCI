import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import {
    login,
} from '../../actions/user';

import './login.scss'
import { Form, Modal, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    state = {
        username: '',
        password: '',
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });

        !function (a, b) { function d(a) { var e, c = b.createElement("iframe"), d = "https://open.weixin.qq.com/connect/qrconnect?appid=" + a.appid + "&scope=" + a.scope + "&redirect_uri=" + a.redirect_uri + "&state=" + a.state + "&login_type=jssdk"; d += a.style ? "&style=" + a.style : "", d += a.href ? "&href=" + a.href : "", c.src = d, c.frameBorder = "0", c.allowTransparency = "true", c.scrolling = "no", c.width = "300px", c.height = "400px", e = b.getElementById(a.id), e.innerHTML = " ", e.appendChild(c) } a.WxLogin = d }(window, document);
        setTimeout(function () {
            var obj = new WxLogin({
                id: "wechat-login-modol",
                appid: "wx50a231aefaff3222",
                scope: "snsapi_login",
                redirect_uri: "http%3A%2F%2F120.25.207.237%2Fapi%2Fproject%2Fuser%2Fwechat%2FLogin",
                state: "",
                style: "",
                href: ""
            }, 1000);
        })

    }
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {

        this.setState({
            visible: false,
        });
    }

    counterHandel(e) {
        this.setState({
            username: e.target.value
        })
    }
    passwordHandel(e) {
        this.setState({
            password: e.target.value
        })
    }

    loginBtnHandel(e) {
        this.props.login(this.state)
       // browserHistory.push("/")
    }

    render() {
        return (
            <div className="login-container">
                <Form>
                    <FormItem>
                        <h1>登录</h1>
                        <div className="prefix"> 账号 </div>
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入账号" onChange={this.counterHandel.bind(this)}/>
                        <div className="prefix"> 密码 </div>
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="请输入密码" type="password" onChange={this.passwordHandel.bind(this)} />
                        <Checkbox>记住账号</Checkbox>
                        <a className="login-form-forgot" href="javascript:;">忘记密码</a>

                        <div className="login-wrap">
                            <Button type="primary"  className="login-form-button" onClick={this.loginBtnHandel.bind(this)}>
                                登录
                            </Button>
                            <span className="right"> 或 <a href="javascript:;" onClick={() => { browserHistory.push('signUp') }}>现在注册</a> </span>
                        </div>
                    </FormItem>
                    <div className="third-auth">
                        第三方登录：   <a href="javascript:;" onClick={this.showModal}>微信登录</a>
                    </div>
                </Form>

                <Modal
                    title="微信登录"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <div id="wechat-login-modol"></div>
                </Modal>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}
const mapDispatchToProps = {
    login: (arg) => login(arg),
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
