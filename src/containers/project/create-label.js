import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, DatePicker, notification } from 'antd';
import { browserHistory } from 'react-router'
import $ from 'jquery'

import './project.scss'


const FormItem = Form.Item;

class CreateLabel extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            
            labelName: "",
            type: "",
            isActive: 1,
            createdOn: new Date(),
            
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
            url: 'http://' + window.location.host + '/api/project/label/createLabel',
            data: this.state
        }).done(function (data) {
            // console.log(data)
            if (data != {}) {
                notification.open({
                    message: '创建成功',
                    description: '恭喜你创建标签成功，页面将自动跳转到标签列表页面！',
                });
                browserHistory.push('/project/label-list')
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
                <h1>创建标签</h1>
                <Form>
                    <FormItem label="项目标签：" {...formItemLayout}>
                        
                        <Input placeholder="请输入标签名称" name="labelName" value={this.state.labelName} onChange={this.handleInputChange.bind(this)}/>
                       
                    </FormItem>
                    <FormItem label="项目类型：" {...formItemLayout}>
                        
                        <Input placeholder="请输入标签类型" name="type" value={this.state.type} onChange={this.handleInputChange.bind(this)}/>
                        
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
export default connect(mapStateToProps, mapDispatchToProps)(CreateLabel)
