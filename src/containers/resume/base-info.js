import React, { Component } from 'react';
import { connect } from 'react-redux'
import './base-info.scss'

import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;


class ResumeBaseInfo extends Component {
    state = {
        name: this.props.name,

    }

    render() {
        return (
            <div className="base-info-container">
                <h1>基本信息</h1>
                <Form>
                    <FormItem>
                        <div className="prefix"> 姓名 <span style={{ color: "red" }}>*</span></div>
                        <Input  placeholder="请输入中文姓名" value={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}}/>
                        <div className="prefix"> 密码 </div>
                        <Input  placeholder="请输入密码" type="password"  />
                        <Checkbox>记住账号</Checkbox>
                        <a className="login-form-forgot" href="javascript:;">忘记密码</a>

                        <div className="login-wrap">
                            <Button type="primary"  className="login-form-button" >
                                登录
                            </Button>
                            <span className="right"> 或 <a href="javascript:;" >现在注册</a> </span>
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

function mapStateToProps(state){
    return{
        name: state.resume.name
    }
}



const mapDispatchToProps ={

}
export default connect(mapStateToProps, mapDispatchToProps)(ResumeBaseInfo)

