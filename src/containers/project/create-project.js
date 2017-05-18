import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Icon } from 'antd';

import $ from 'jquery'

class CreateProject extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            projects: [{}]
        }
        this.getProjectList();

    }

    getProjectList() {
        
        $.get('http://' + window.location.host + '/api/project/project/queryProject', function(projects) {
            console.log(projects)
            this.setState ({
                projects: projects
            })
        }.bind(this))
    }
        
        

    render() {
        return (
            <div>
                <div>{this.props.user.user}</div>
                <div>aaaaa</div>
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

