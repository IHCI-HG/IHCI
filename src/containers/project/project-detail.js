import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Button } from 'antd'

import $ from 'jquery' 

import './project.scss'

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
            }
        }

        this.getProjectDetailById()
    }

    getProjectDetailById () {

        console.log( this.state.project._id )
        $.ajax({
            method: 'GET',
            url: 'http://' + window.location.host + '/api/project/project/queryProject?_id=' + this.state.project._id,
        }).done(function (projectDetail) {
            // console.log(projectDetail)
            // projectDetail[0].demand = projectDetail[0].demand[0].split('↵');
            // projectDetail[0].detail = projectDetail[0].detail[0].split('↵');
            console.log(projectDetail)
            this.setState({
                project: projectDetail[0]
            })
        }.bind(this))
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
                    <Button type="primary" htmlType="submit">
                            申请
                    </Button>
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

