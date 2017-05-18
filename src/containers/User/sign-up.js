import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import './sign-up.scss'
import { login, emailExist } from '../../actions/user';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;
//状态编码定义

//不推荐直接在代码中用ajax请求耦合
import $ from 'jquery'


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

        agreeAgreement: false
    }


    //采用async写法的对promise对象返回值的取回，写法和同步类似，推荐使用
    async usernameCheck(e) {
        const text = e.target.value
        const emailPatterns = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        this.setState({email: text})


        if(text == "") {
            this.setState({
                emailHelp: "",
                emailState: "",
            })
        } else if(!emailPatterns.test(text)) {
            this.setState({
                emailHelp: "请输入正确的邮箱",
                emailState: "warning",
            })
        } else {
            this.setState({
                emailHelp: "",
                emailState: "validating",
            })

            //注意这个await是异步的
            if(!await emailExist(text)) {
                this.setState({
                    emailHelp: "邮箱可用",
                    emailState: "success",
                })
            } else {
                this.setState({
                    emailHelp: "邮箱已经被占用",
                    emailState: "error",
                })
            }

        }
    }

    //直接采用.then的方法，通过回调的形式来对返回值进行处理
    usernameCheck2(e) {
        const text = e.target.value
        const emailPatterns = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        this.setState({email: text})


        if(text == "") {
            this.setState({
                emailHelp: "",
                emailState: "",
            })
        } else if(!emailPatterns.test(text)) {
            this.setState({
                emailHelp: "请输入正确的邮箱",
                emailState: "warning",
            })
        } else {
            this.setState({
                emailHelp: "",
                emailState: "validating",
            })

            emailExist(text).then((emailExistState)=> {
                if (!emailExistState) {
                    this.setState({
                        emailHelp: "邮箱可用",
                        emailState: "success",
                    })
                } else {
                    this.setState({
                        emailHelp: "邮箱已经被占用",
                        emailState: "error",
                    })
                }
            })

        }
    }



    passwordCheck(e) {
        const text = e.target.value
        this.setState({
            password: text
        })

        if(!text) {
            this.setState({
                passwordState: "",
                passwordHlep: "",
            })
        } else if (text.length < 4) {
            this.setState({
                passwordState: "error",
                passwordHlep: "密码不得少于4位",
            })
        } else if (text.length > 20) {
            this.setState({
                passwordState: "error",
                passwordHlep: "密码不得超过20位",
            })
        } else {
            this.setState({
                passwordState: "success",
                passwordHlep: "密码可用",
            })
        }

    }

    rePasswordCheck(e) {
        const text = e.target.value
        this.setState({
            rePassword: text
        })

        if(!text) {
            this.setState({
                rePasswordState: "",
                rePasswordHelp: "",
            })
        } else if (text != this.state.password) {
            this.setState({
                rePasswordState: "error",
                rePasswordHelp: "两次密码输入不一致",
            })
        } else {
            this.setState({
                rePasswordState: "success",
                rePasswordHelp: "",
            })
        }
    }

    async signUpBtnHandel() {
        const that = this
        $.ajax({
            method: 'POST',
            url: 'api/project/user/createUser',
            data: {
                username: that.state.email,
                password: that.state.password
            }
        }).done(function (data) {
            message.success("注册成功")
            that.props.login({
                username: that.state.email,
                password: that.state.password,
            })
            browserHistory.push("/");
        })
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
                            help={this.state.passwordHlep}
                        >
                            <Input
                                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                placeholder="请输入密码"
                                type="password"
                                onChange={this.passwordCheck.bind(this)}
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
                                onChange={this.rePasswordCheck.bind(this)}
                            />
                        </FormItem>

                        <Checkbox
                            onChange={()=>{
                                !this.state.agreeAgreement ? this.setState({agreeAgreement: true}) : this.setState({agreeAgreement: false})
                            }}
                        >
                            我已经阅读并同意<a href="javascript:;">实验室协议</a></Checkbox>
                        <div className="login-wrap">
                            <Button
                                type="primary"
                                className="login-form-button"
                                onClick={this.signUpBtnHandel.bind(this)}
                                disabled = {
                                        this.state.emailState != "success"
                                        || this.state.passwordState != "success"
                                        || this.state.rePasswordState != "success"
                                        || !this.state.agreeAgreement
                                    }
                                >
                                注册
                            </Button>
                            <span className="right"> 或 <a href="javascript:;" onClick={()=>{browserHistory.push("login")}}>现在登录</a> </span>
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
}

export default SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp)



// export default SignUp;
