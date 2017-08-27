import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Tooltip  } from 'antd';
import './teamItem.scss'

import { handleStar } from '../../reducers/team'


const favour = require('./images/favourites.png')
const favourFilling = require('./images/favourites-filling.png')
const edit = require('./images/edit.png')

class TeamItem extends Component{
    constructor(props){
        super(props);
        this.state={
            background:'rgba(0,0,0,0)',
            showIcon:'none',
            //favor:this.state.mark ? favourFilling : favour,
            name: this.props.teamName,
            id: this.props.teamID,
            //mark: this.props.mark,
            inMarkedTeam: this.props.inMarkedTeam,
            members: [],
        }

        //this._handleTeamMark = this.props.handleTeamMark;//父节点teamlist里的方法
    }

    handleMouseover=()=>{
        this.setState({
            background: 'rgba(249,249,249,0.9)',
            showIcon: 'block',
        });
    }

    handleMouseOut=()=>{
        this.setState({
            background:'rgba(0,0,0,0)',
            showIcon:'none',
        });
    }

    handleMark=()=>{
        //console.log(this.state)
        //setState的回调
        this.setState({
            inMarkedTeam: !this.state.inMarkedTeam,
            });
        //this.handleTeamMark(index);//调用父节点teamlist的方法
        this.props.handleStar(this.props.teamID);
    }

    render(){
        return (
            <div className="container"/* checked={this.state.mark}*/ style={{background:this.state.background}} onMouseOver={this.handleMouseover}  onMouseOut={this.handleMouseOut}>
                <div className="container2">
                    <div className="picture" >
                        <img src="http://via.placeholder.com/150x93"
                        onClick={() =>browserHistory.push({
                                                pathname: '/teamMember',
                                                // query: { modal: true },
                                                state: { currTeamName: this.props.teamName}
                                            })}/>
                    </div>
                    <div className="icon" style={{ display: this.state.showIcon }}>
                        <Tooltip placement="right" title={this.props.inMarkedTeam ? "取消星标":"标记为星标团队" }>
                            <img
                                id="favourites"
                                onClick={
                                    this.handleMark.bind(this.index)
                                }
                                src={this.props.inMarkedTeam ? favourFilling : favour}
                            />
                        </Tooltip>
                        <Tooltip placement="right" title="编辑">
                            <img id="edit" src={edit} />
                        </Tooltip>
                </div>
                </div>
                <p>{this.props.teamName}</p>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        team: state.team,
    }
}

const mapDispatchToProps = {
    //login: (arg) => login(arg),
    handleStar : (arg) => handleStar(arg),
}

export default TeamItem = connect(mapStateToProps, mapDispatchToProps)(TeamItem);
