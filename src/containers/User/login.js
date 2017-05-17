import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import {
    login,
} from '../../actions/user';

import './login.scss'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    state = {
        username: '',
        password: '',
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
        browserHistory.push("/")
    }

    render() {
        return (
            <div className="login-container">
                <Form onSubmit={this.handleSubmit}>
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
                        第三方登录：   <a href="">微信登录</a>
                    </div>
                </Form>

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
