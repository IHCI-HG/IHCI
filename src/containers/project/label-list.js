import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Icon } from 'antd'
import { browserHistory } from 'react-router'
import $ from 'jquery'

import './project.scss'

const columns = [{
    title: '标签名称',
    dataIndex: 'labelName',
    key: 'labelName',
    width: '40%'
    }, {
    title: '状态',
    dataIndex: 'isActive',
    key: 'type',
    width: '30%'
    }, {
    title: '操作',
    key: 'action',
    width: '30%',
    render: (text, record) => (
        <span>
            <a href="#">作废</a>
        </span>
    ),
}];


class LabelList extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            labels: [{}]
        }
        this.getLabelList();

    }

    getLabelList() {
        
        $.get('http://' + window.location.host + '/api/project/label/getLabel', function(labels) {
            this.setState ({
                labels: labels
            })
        }.bind(this))
    }
        
        

    render() {
        return (
            <div className="project-container">
                <Table columns={columns} dataSource={this.state.labels}  rowKey="_id"/>
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
export default connect(mapStateToProps, mapDispatchToProps)(LabelList)
