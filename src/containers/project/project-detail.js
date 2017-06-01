import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Button, Table, notification } from 'antd'

import $ from 'jquery' 

import './project.scss'

const columns = [{
    title: '申请人',
    dataIndex: 'username',
    key: 'username',
    width: '40%'
    }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: '40%'
    }, {
    title: '操作',
    key: 'action',
    width: '40%',
    render: (text, record) => (

        
        <span>
            <a href={'project-detail?id='+ record._id}>通过</a>
            {/*href={'project-detail?id='+ record._id}*/}
            {/*<span className="ant-divider" />
            <a href="#">申请</a>*/}
        </span>
        
    ),
}];

class ProjectDetail extends Component {

    constructor (props) {
        super(props)
        
        this.state = {
            project: {
                _id: this.props.location.query.id,
                name: '',
                type: '',
                detail: '',
                demand: '',
                finishApplicationDate: '',
                publisherName: '',
                publisherId: '',
                label: ''
            },
            usersOfProjects: [{}]
        }

        this.getProjectDetailById()
        this.getUserOfProject()
    }

    getProjectDetailById () {


        $.ajax({
            method: 'GET',
            url: 'http://' + window.location.host + '/api/project/project/queryProject?_id=' + this.state.project._id,
        }).done(function (projectDetail) {

            this.setState({
                project: projectDetail[0]
            })
           
        }.bind(this))
    }

    getUserOfProject() {
        $.ajax({
            method: 'GET',
            url: 'http://' + window.location.host + '/api/project/userAndProject/getUserAndProject?projectId=' + this.state.project._id,
        }).done(function (usersOfProjects) {
             
            this.setState({
                usersOfProjects: usersOfProjects
            })
        }.bind(this))
    }


    applicationProject() {
       
        $.ajax({
            method: 'POST',
            url: 'http://' + window.location.host + '/api/project/userAndProject/createUserAndProject',
            data:{
                "username":this.props.user.user,
                "userId":"",
                "name":this.state.project.name,
                "projectId":this.state.project._id,
                "status":"审核中",
                "label":this.state.project.label,
                "createdOn":new Date()
            } 
        }).done(function (data) {
           
            if (data != {}) {
                notification.open({
                    message: '申请成功',
                    description: '恭喜你申请！',
                });
                this.getUserOfProject()
            }
        })
    }

    render() {
        return (
            <div className="project-container">
                <div className="title-and-user">
                    <span className="title">{this.state.project.name}</span><br/>
                    <Icon type="user" />{this.state.project.publisherName}<br/><br/>
                </div>
                <div className="detail">
                    <span>项目详情： </span><br/>
                    <ul>
                        {  
                            this.state.project.detail.split('\r\n').map(function(detail){  
                                return <li key={detail}>{detail}</li>  
                            })  
                        }  
                    </ul>
                    {/*<span>{this.state.project.detail}</span>*/}
                </div>
                <div className="demand">
                    <span>项目要求： </span><br/>
                    <ul>
                        {  
                            this.state.project.demand.split('\r\n').map(function(demand){  
                                return <li key={demand}>{demand}</li>  
                            })  
                        } 
                    </ul>
                    {/*<span>{this.state.project.demand}</span>*/}
                </div>
                <div>
                    <Button type="primary" htmlType="submit" onClick={this.applicationProject.bind(this)}>
                            申请
                    </Button>
                </div>

                <div>
                    <h4>申请人信息：</h4>
                    <Table columns={columns} dataSource={this.state.usersOfProjects} rowKey="createdOn"/>
                </div>
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail)

