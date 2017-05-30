import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, DatePicker, notification } from 'antd';

import $ from 'jquery'

import './project.scss'


const FormItem = Form.Item;

class CreateProject extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            name: "",
            type: "",
            detail: "",
            demand: "",
            finishApplicationDate: "",
            publisherName: this.props.user.user,
            publisherId: "591ed8ca8382da183812c956",
            createDate: new Date(),
        }

        // this.getProjectList();

    }
        
    handleInputChange (event) {
        
        const target = event.target;
        const value =  target.value; //target.type === 'checkbox' ? target.checked :
        const name = target.name;

        this.setState ({
            [name]: value
        });
    }

    handleSubmit () {
        // console.log(this.state)
        $.ajax({
            method: 'POST',
            url: 'http://' + window.location.host + '/api/project/project/create',
            data: this.state
        }).done(function (data) {
            // console.log(data)
            if (data != {}) {
                notification.open({
                    message: '创建成功',
                    description: '恭喜你创建项目成功，页面将自动跳转到我的项目页面！',
                });
            }
        })
    }    

    render() {

        const formItemLayout = {
                        labelCol: {
                            xs: { span: 8 },
                            sm: { span: 8 },
                        },
                        wrapperCol: {
                            xs: { span: 16 },
                            sm: { span: 8 },
                        },
                    };
        return (
            <div className="project-container">
                <h1>创建项目</h1>
                <Form>
                    <FormItem label="项目名称：" {...formItemLayout}>
                        
                        <Input placeholder="请输入项目名称" name="name" value={this.state.name} onChange={this.handleInputChange.bind(this)}/>
                       
                    </FormItem>
                    <FormItem label="项目类型：" {...formItemLayout}>
                        
                        <Input placeholder="请输入项目类型" name="type" value={this.state.type} onChange={this.handleInputChange.bind(this)}/>
                        
                    </FormItem>
                    <FormItem label="项目结束申请时间：" {...formItemLayout}>
                        
                         <DatePicker />

                    </FormItem>
                    <FormItem label="项目介绍：" {...formItemLayout}>
                        
                        <Input type="textarea" autosize={{ minRows: 4, maxRows: 10 }} placeholder="请输入一些项目介绍" name="detail" value={this.state.detail} onChange={this.handleInputChange.bind(this)}/>
                       
                    </FormItem>
                    <FormItem label="项目要求："{...formItemLayout}>
                        
                        <Input type="textarea" autosize={{ minRows: 4, maxRows: 10 }} placeholder="请输入对申请者的一些要求" name="demand" value={this.state.demand} onChange={this.handleInputChange.bind(this)}/>
                       
                    </FormItem>
                    <FormItem wrapperCol={{ span: 12, offset: 12 }}>
                        <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>
                            创建
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state){
   
    return{
        project: state.project,
        user: state.user
    }
}

const mapDispatchToProps ={
  
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

