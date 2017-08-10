import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import './teamList.scss'


const add = require('./images/add.png')

class TeamList extends Component{


    markedTeam(){
        //星标团队
        return(
            <div className="small-container">
                <span className="title">星标团队</span>
                <ul>
                    <li>星标团队列表</li>
                </ul>
            </div>
        )
    }

    myOwnTeam(){
        //我拥有的团队，需要判断是否为团队主管或超级管理员，不是则没有此项
        //if(!this.props.isManager)
        return(
            <div className="small-container">
                <span className="title">我拥有的团队</span>
                <ul onClick={() => browserHistory.push("/createTeam")}>
                    <li><p>团队</p></li>
                    
                    <li key="add">
                       <div className="addbtn" >
                          <div className="icon-container" >
                             <img id="addIcon" src={add}/>
                          </div>
                       </div>
                       <p>创建新团队</p>
                    </li>
                </ul>
            </div>
        )
    }

    myTeam(){
        //我参与的团队
        return(
            <div className="small-container">
                <span className="title">我参与的团队</span>
                <ul>
                    <li><p>团队</p></li>
                </ul>
                
            </div>
        )
    }

    render(){
        return (
            <div className="teamList-container">
                {this.markedTeam()}
                {this.myOwnTeam()}
                {this.myTeam()}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {
    
}

export default TeamList = connect(mapStateToProps, mapDispatchToProps)(TeamList);