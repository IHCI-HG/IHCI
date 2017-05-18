import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Icon } from 'antd';

import { api } from '../../actions/common'

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
      <a href={'projectsDetail?id='+ record._id}>查看详情</a>
      <span className="ant-divider" />
      <a href="#">申请</a>
      <span className="ant-divider" />
    </span>
    ),
}];


class ProjectList extends Component {

    constructor(props) {

        super(props);
        // console.log(props);
        
        this.getProjectList();
    }

    getProjectList() {
        console.log(11111);
        
        const result =  api({
            url: '/api/project/project/queryProject',
            method: 'GET',
        });

        result.text().then((text) => {
            console.log(22222);
            console.log(text)
            
        })
        
        
    }

    render() {
        return (
            <div>
                aaaa
                {/*<Table columns={columns} dataSource={this.state.data} />*/}
            </div>
        );
    }
}

function mapStateToProps(state){
    // console.log(11111);
    // console.log(state);
    // console.log(11111);
    return{
        project: state.project
    }
}

const mapDispatchToProps ={

}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)

