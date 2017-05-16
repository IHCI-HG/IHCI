import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import './signup.scss'
import { login, emailValid } from '../../actions/user';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;
//状态编码定义


class SignUp extends Component {
    constructor(props) {
        super(props);

    }

    //componentWillMount会在组件render之前执行，并且永远都只执行一次。
    state = {
        emailState: "",
        emailHelp: "",
        email: "",

        passwordState: "",
        passwordHlep: "",
        password: "",

        rePasswordState: "",
        rePasswordHelp: "",
        rePassword: "",
    }

    usernameCheck(e) {
        const emailPatterns = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        this.setState({email: e.target.value})

        if(e.target.value == "") {
            this.setState({
                emailHelp: "",
                emailState: "",
            })
        } else if(!emailPatterns.test(e.target.value)) {
            this.setState({
                emailHelp: "请输入正确的邮箱",
                emailState: "warning",
            })
        } else {
            this.setState({
                emailHelp: "",
                emailState: "validating",
            })
            console.log(this.props.emailValid(e.target.value));
            // if(this.props.isNameExit(e.target.value)) {
            //     this.setState({
            //         emailHelp: "邮箱已被注册",
            //         emailState: "error",
            //     })
            // } else {
            //     this.setState({
            //         emailHelp: "邮箱可用",
            //         emailState: "success",
            //     })
            // }
        }
    }

    render() {
        return (
            <div className="sign-up-container">
                <Form onSubmit={this.handleSubmit}>
                    <div className="up-container">
                        <h1>注册</h1>

                        <div className="prefix"> 账号 </div>
                        <FormItem
                            validateStatus={this.state.emailState}
                            hasFeedback={true}
                            help={this.state.emailHelp}
                        >
                            <Input
                                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                                placeholder="请输入账号"
                                onChange={this.usernameCheck.bind(this)}
                            />
                        </FormItem>

                        <div className="prefix"> 密码 </div>
                        <FormItem
                            validateStatus={this.state.passwordState}
                            hasFeedback={true}
                            help={this.state.passwordHelp}
                        >
                            <Input
                                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                placeholder="请输入密码"
                                type="password"
                                onChange={(e)=>{this.setState({password: e.target.value})}}
                                />
                        </FormItem>

                        <div className="prefix"> 再次输入密码 </div>
                        <FormItem
                            validateStatus={this.state.rePasswordState}
                            hasFeedback={true}
                            help={this.state.rePasswordHelp}
                        >
                            <Input
                                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                placeholder="请再次输入密码"
                                type="password"
                                onChange={(e) => { this.setState({ rePassword: e.target.value }) }}
                            />
                        </FormItem>

                        <Checkbox>我已经阅读并同意<a href="javascript:;">实验室协议</a></Checkbox>
                        <div className="login-wrap">
                            <Button type="primary"  className="login-form-button" onClick={()=>{emailValid("sdsds")}}>
                                登录
                            </Button>
                            <span className="right"> 或 <a href="javascript:;" >现在登录</a> </span>
                        </div>
                    </div>
                    <div className="third-auth">
                        第三方注册：   <a href="">微信注册</a>
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
    emailValid: (email) => emailValid(email),
}

export default SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp)



// export default SignUp;
