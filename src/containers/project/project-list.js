import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Icon } from 'antd'
import { browserHistory } from 'react-router'
import $ from 'jquery'

import './project.scss'

const columns = [{
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
    }, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
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


class ProjectList extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            projects: [{}]
        }
        this.getProjectList();

    }

    getProjectList() {
        
        $.get('http://' + window.location.host + '/api/project/project/queryProject', function(projects) {
            // console.log(projects)
            this.setState ({
                projects: projects
            })
        }.bind(this))
    }
        
        

    render() {
        return (
            <div className="project-container">
                <Table columns={columns} dataSource={this.state.projects} />
            </div>
        );
    }
}

function mapStateToProps(state){
   
    return{
        project: state.project
    }
}

const mapDispatchToProps ={
  
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)

