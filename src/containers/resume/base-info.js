import React, { Component } from 'react';
import { connect } from 'react-redux'
import './base-info.scss'

import { Form, Icon, Input, Button, Checkbox, message, Radio } from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class ResumeBaseInfo extends Component {
    state = {
        name: this.props.name,
        sex: this.props.sex,
        eduStartDate: this.props.eduStartDate,
        school: this.props.school,
        academy: this.props.academy,
        GPA: this.props.GPA,
        phone: this.props.phone,
        email: this.props.email,
    }

    sexHandel(e) {
        console.log(e.target);
    }

    render() {
        return (
            <div className="base-info-container">
                <h1>基本信息</h1>
                <Form>
                    <FormItem>
                        <span className="prefix"> 姓名 <span style={{ color: "red" }}>*</span></span>
                        <Input placeholder="请输入中文姓名" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </FormItem>

                    <FormItem>
                        <span className="prefix"> 性别 <span style={{ color: "red" }}>*</span></span> <br/>
                        <RadioGroup onChange={this.sexHandel} defaultValue="a">
                            <RadioButton style={{width: "100px"}} value="male">男</RadioButton>
                            <RadioButton style={{width: "100px"}} value="female">女</RadioButton>
                        </RadioGroup>
                    </FormItem>

                    <FormItem>
                        <div className="btn-wrap">
                            <Button type="primary" className="login-form-button" >
                                保存
                            </Button>
                            <Button type="primary" className="login-form-button" >
                                下一页
                            </Button>
                        </div>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        name: state.resume.name,
        sex: state.resume.sex,
        eduStartDate: state.resume.eduStartDate,
        school: state.resume.school,
        academy: state.resume.academy,
        GPA: state.resume.GPA,
        phone: state.resume.phone,
        email: state.resume.email,
    }
}


const mapDispatchToProps ={

}
export default connect(mapStateToProps, mapDispatchToProps)(ResumeBaseInfo)

