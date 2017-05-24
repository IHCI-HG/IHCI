import React, { Component } from 'react';
import { connect } from 'react-redux'
import './base-info.scss'

import { Form, Icon, Input, Button, Checkbox, message, Radio, Select } from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class ResumeBaseInfo extends Component {
    state = {
        name: this.props.name,
        sex: this.props.sex,
        eduStartDate: this.props.eduStartDate,
        school: this.props.school,
        major: this.props.major,
        GPA: this.props.GPA,
        phone: this.props.phone,
        email: this.props.email,
    }


    saveHandel = ()=> {

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
                        <RadioGroup
                            defaultValue="male"
                            onChange={(e)=>{this.setState({sex: e})}}
                        >
                            <RadioButton style={{width: "100px"}} value="male">男</RadioButton>
                            <RadioButton style={{width: "100px"}} value="female">女</RadioButton>
                        </RadioGroup>
                    </FormItem>

                    <FormItem>
                        <span className="prefix"> 入学年份 <span style={{ color: "red" }}>*</span></span>
                        <Select
                            defaultValue="2014"
                            onChange={(e)=>{this.setState({eduStartDate: e})}}
                        >
                            <Option value="2014">2014</Option>
                            <Option value="2015">2015</Option>
                            <Option value="2016">2016</Option>
                            <Option value="2017">2017</Option>
                            <Option value="2018">2018</Option>
                        </Select>
                    </FormItem>

                    <FormItem>
                        <span className="prefix"> 学校 <span style={{ color: "red" }}>*</span></span>
                        <Select
                            mode="combobox"
                            showSearch
                            placeholder="输入你的学校"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            onChange={(e)=>{this.setState({school: e})}}
                        >
                            <Option value="华南理工大学">华南理工大学</Option>
                            <Option value="中山大学">中山大学</Option>
                            <Option value="广州工业大学">广州工业大学</Option>
                            <Option value="广州大学">广州大学</Option>
                            <Option value="广州中医药大学">广州中医药大学</Option>
                        </Select>
                    </FormItem>

                    <FormItem>
                        <span className="prefix"> 专业 <span style={{ color: "red" }}>*</span></span>
                        <Input placeholder="请输入你的专业" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </FormItem>

                    <FormItem>
                        <span className="prefix"> 成绩排名 <span style={{ color: "red" }}>*</span></span>
                        <Select
                            defaultValue="2014"
                            onChange={(e)=>{this.setState({eduStartDate: e})}}
                        >
                            <Option value="2014">前5%</Option>
                            <Option value="2015">5%-10%</Option>
                            <Option value="2016">10%-30%</Option>
                            <Option value="2017">30%-60%</Option>
                            <Option value="2018">60%+</Option>
                        </Select>
                    </FormItem>

                    <FormItem>
                        <span className="prefix"> 手机号码 <span style={{ color: "red" }}>*</span></span>
                        <Input placeholder="请输入你的手机号码" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </FormItem>

                    <FormItem>
                        <span className="prefix"> 邮件地址 <span style={{ color: "red" }}>*</span></span>
                        <Input placeholder="请输入你的邮件地址" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </FormItem>

                    <FormItem
                        style={{
                            marginTop: "20px",
                        }}
                    >
                        <Button type="primary" className="save-button" >
                            保存
                        </Button>
                        <Button type="primary" className="next-page-button" >
                            下一页
                        </Button>
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

