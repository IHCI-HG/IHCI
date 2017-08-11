import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { notification } from 'antd';

import $ from 'jquery'

import './createTeam.scss'


const close = require('./images/close.png')

class CreateTeam extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            members: [this.props.user.user, "test@test.test"]
        }
    }

    handleInputChange(event){
        const text = event.target.value;
        this.setState({
            name: text
        });
    }

    handleSubmit(){
        console.log(this.state)
        $.ajax({
            method: 'POST',
            url: 'http://' + window.location.host + '/api/project/team/createTeam',
            data: this.state
        }).done(function (data) {
            //console.log(data)
            if (data != {}) {
                notification.open({
                    message: '创建成功',
                    //description: '恭喜你创建团队成功，页面将自动跳转到我的团队页面！',
                });
            }
        })
    }

    render(){
        return (
            <div className = "createTeam-container">
               <div className = "header">
                   <p className = "title">创建新团队</p>
                   <img id="cancel" src={close} onClick={() => browserHistory.push("/teamList")}/>
               </div>
               <input 
                    type="text" 
                    placeholder="团队名称"
                    onChange = {this.handleInputChange.bind(this)}
               >
               </input>
               <button onClick={this.handleSubmit.bind(this)}>完成创建</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        team: state.team,
        user: state.user
    }
}

const mapDispatchToProps = {
    
}

export default CreateTeam = connect(mapStateToProps, mapDispatchToProps)(CreateTeam);