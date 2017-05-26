import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Icon, Tabs  } from 'antd';

import $ from 'jquery'

import './project.scss'

const columns = [{
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
    }, {
    title: '发布人',
    dataIndex: 'publisherName',
    key: 'publisherName',
    }, {
    title: '发布时间',
    dataIndex: 'startProjectDate',
    key: 'startProjectDate',
    }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href={'project-detail?id='+ record._id}>查看详情</a>
      <span className="ant-divider" />
      <a href="#">申请</a>
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
        
        $.get('http://' + window.location.host + '/api/project/project/queryProject?publisherName=' + this.props.user.user, function(projects) {
           
            this.setState ({
                projects: projects
            })
        }.bind(this))
    }
        
        

    render() {
        return (
            <div className="project-container">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="我创建的项目" key="1">
                        <Table columns={columns} dataSource={this.state.projects} />
                    </TabPane>
                    <TabPane tab="我申请的项目" key="2">
                        <Table columns={columns} dataSource={this.state.projects} />
                    </TabPane>
                </Tabs>
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

