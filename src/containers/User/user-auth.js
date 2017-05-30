import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { login } from '../../actions/user';
import './user-auth.scss'

const FormItem = Form.Item;

import $ from 'jquery'

class UserAuth extends Component{

    constructor(props) {

        super(props);

        this.state = {
            //user: this.props.user.user,
            //旧代码状态
            oldPasswordState: '',
            oldPasswordHelp: '',
            //新代码状态
            newPasswordState: '',
            newPasswordHelp: '',
            newPassword: '',
            //确认新代码状态
            reNewPasswordState: '',
            reNewPasswordHelp: '',
            rePassword: '',
        }
    }

   

    checkOldPassword(e){
        
    }

    newPasswordCheck(e){
        const text = e.target.value
        this.setState({
            newPassword: text
        })

        if(!text) {
            this.setState({
                newPasswordState: "",
                newPasswordHelp: "",
            })
        } else if (text.length < 4) {
            this.setState({
                newPasswordState: "error",
                newPasswordHelp: "密码不得少于4位",
            })
        } else if (text.length > 20) {
            this.setState({
                newPasswordState: "error",
                newPasswordHelp: "密码不得超过20位",
            })
        } else {
            this.setState({
                newPasswordState: "success",
                newPasswordHelp: "密码可用",
            })
        }
    }

    reNewPasswordCheck(e) {
        const text = e.target.value
        this.setState({
            reNewPassword: text
        })

        if(!text) {
            this.setState({
                reNewPasswordState: "",
                reNewPasswordHelp: "",
            })
        } else if (text != this.state.newPassword) {
            this.setState({
                reNewPasswordState: "error",
                reNewPasswordHelp: "两次密码输入不一致",
            })
        } else {
            this.setState({
                reNewPasswordState: "success",
                reNewPasswordHelp: "",
            })
        }
    }

    async changePasswordBtnHandel(){
        const that = this;
        $.ajax({
            method:'POST',
            url:'api/project/user/updatePassword',
            data:{
                //_id: this.state.user,
                _id:'a@a.a',
                oldPassword: that.state.oldPassword,
                newPassword: that.state.newPassword,
            }
        }).done(function(data){
            message.success('message received');
        })
    }

    render() {
        return(
          <div className="user-auth-container">
            <Form>
                <div className = "auth-container">
                    <h1>更改密码</h1>

                    <div className="prefix"> 原始密码: </div>
                    <FormItem
                        validateStatus={this.state.oldPasswordState}
                        hasFeedback={true}
                        help={this.state.oldPasswordHelp}
                    >
                        <Input
                            placeholder="请输入原始密码"
                            type = "password"
                            onChange={this.checkOldPassword.bind(this)}
                        />
                    </FormItem>

                    <div className="prefix">新密码：</div>
                    <FormItem
                        validateStatus = {this.state.newPasswordState}
                        hasFeedback = {true}
                        help = {this.state.newPasswordHelp}
                    >
                        <Input
                            placeholder = "请输入新密码"
                            type = "password"
                            onChange = {this.newPasswordCheck.bind(this)}
                        />
                    </FormItem>

                    <div className="prefix">确认新密码：</div>
                    <FormItem
                        validateStatus = {this.state.reNewPasswordState}
                        hasFeedback = {true}
                        help = {this.state.reNewPasswordHelp}
                    >
                        <Input
                            placeholder = "请输入新密码"
                            type = "password"
                            onChange = {this.reNewPasswordCheck.bind(this)}
                        />
                    </FormItem>

                    <Button
                        type = "primary"
                        className = "change-password-btn"
                        onClick = {this.changePasswordBtnHandel.bind(this)}
                        disabled = {
                            this.state.newPasswordState != "success"
                            || this.state.reNewPasswordState != "success"
                        }
                    >
                        更改密码
                    </Button>

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
    //login: (arg) => login(arg),
}

export default UserAuth = connect(mapStateToProps, mapDispatchToProps)(UserAuth)