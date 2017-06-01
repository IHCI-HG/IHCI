import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Form, Icon, Input, Button, DatePicker, notification, Radio  } from 'antd';
import { browserHistory } from 'react-router'
import $ from 'jquery'

import './project.scss'


const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class CreateProject extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            labels: [{}],
            project: {
                name: "",
                type: "",
                detail: "",
                demand: "",
                finishApplicationDate: "",
                publisherName: this.props.user.user,
                publisherId: "",
                createDate: new Date(),
                label: ""
            }

        }
        

        this.getLabelList();

    }

    getLabelList() {
        
        $.get('http://' + window.location.host + '/api/project/label/getLabel', function(labels) {
            console.log(labels)
            let tempLabels = []
            let i = 0
            for(let label of labels) {
                tempLabels.push({label:label.labelName,  value: label.labelName})
                i ++
                if (i == labels.length ) {
                    this.setState ({
                        labels: tempLabels
                    })
                }
            }
        }.bind(this))
    }
        
    handleInputChange (event) {
        
        const project = this.state.project;
        const target = event.target;console.log(target)
        const value = target.value; //target.type === 'checkbox' ? target.checked : target.value;
        const name = target.type === 'radio' ? "label" : target.name;

        project[name] = value;
        console.log(project)
        console.log(target)
        this.setState ({
            project: project
        });
    }

     handleDatePickerChange (event) {
         const project = this.state.project;
        project.finishApplicationDate = event._d
        this.setState ({
            project: project
        });
    }

    handleSubmit () {
        // console.log(this.state)
        $.ajax({
            method: 'POST',
            url: 'http://' + window.location.host + '/api/project/project/create',
            data: this.state.project
        }).done(function (data) {
            // console.log(data)
            if (data != {}) {
                notification.open({
                    message: '创建成功',
                    description: '恭喜你创建项目成功，页面将自动跳转到我的项目页面！',
                });
                browserHistory.push('/project/my-project')
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
                        
                        <Input placeholder="请输入项目名称" name="name" value={this.state.project.name} onChange={this.handleInputChange.bind(this)}/>
                       
                    </FormItem>
                    <FormItem label="项目类型：" {...formItemLayout}>
                        
                        <Input placeholder="请输入项目类型" name="type" value={this.state.project.type} onChange={this.handleInputChange.bind(this)}/>
                        
                    </FormItem>
                    <FormItem label="项目标签：" {...formItemLayout}>
                        
                        <RadioGroup options={this.state.labels} name="label" onChange={this.handleInputChange.bind(this)} />

                    </FormItem>
                    <FormItem label="项目结束申请时间：" {...formItemLayout}>
                        
                         <DatePicker onChange={this.handleDatePickerChange.bind(this)} />

                    </FormItem>
                    <FormItem label="项目介绍：" {...formItemLayout}>
                        
                        <Input type="textarea" autosize={{ minRows: 4, maxRows: 10 }} placeholder="请输入一些项目介绍" name="detail" value={this.state.project.detail} onChange={this.handleInputChange.bind(this)}/>
                       
                    </FormItem>
                    <FormItem label="项目要求："{...formItemLayout}>
                        
                        <Input type="textarea" autosize={{ minRows: 4, maxRows: 10 }} placeholder="请输入对申请者的一些要求" name="demand" value={this.state.project.demand} onChange={this.handleInputChange.bind(this)}/>
                       
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

