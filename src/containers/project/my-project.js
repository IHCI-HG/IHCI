import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Icon, Tabs  } from 'antd';

import $ from 'jquery'

import './project.scss'

const columns = [{
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
    width: '40%'
    }, {
    title: '标签',
    dataIndex: 'label',
    key: 'label',
    width: '40%'
    }, {
    title: '操作',
    key: 'action',
    width: '40%',
    render: (text, record) => (
        <span>
      <a href={'project-detail?id='+ record._id}>查看详情</a>
      {/*<span className="ant-divider" />
      <a href="#">申请</a>*/}
    </span>
    ),
}];

const TabPane = Tabs.TabPane;

class MyProject extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            projects: [{}]
        }
        this.getProjectList();

    }

    getProjectList() {

         $.get('http://' + window.location.host + '/api/project/user/getUser?username=' + this.props.user.user, function(user) {
       
            let url = 'http://' + window.location.host + '/api/project'
            if (user[0].isTeacher) {
                url += '/project/queryProject?publisherName=' + this.props.user.user
            } else {
                
                url += '/userAndProject/getUserAndProject?username=' + this.props.user.user
            }

            $.get(url , function(projects) {
                
                this.setState ({
                    projects: projects
                })
            }.bind(this))
            
        }.bind(this))
       
    }
        
        

    render() {
        return (
            <div className="project-container">
                <Table columns={columns} dataSource={this.state.projects}  rowKey="_id"/>
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
export default connect(mapStateToProps, mapDispatchToProps)(MyProject)

