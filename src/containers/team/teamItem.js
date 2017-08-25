import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Tooltip  } from 'antd';
import './teamItem.scss'

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
        console.log(this.state)
        //setState的回调
        this.setState({
            inMarkedTeam: !this.state.inMarkedTeam,
            },()=>{
                    console.log(this.state)
            }); 
        //this.handleTeamMark(index);//调用父节点teamlist的方法
    }
    
    render(){
        return (
            <div className="container"/* checked={this.state.mark}*/ style={{background:this.state.background}} onMouseOver={this.handleMouseover}  onMouseOut={this.handleMouseOut}>
                <div className="container2">
                    <div className="picture" ></div>
                    <div className="icon" style={{ display: this.state.showIcon }}>
                        <Tooltip placement="right" title={this.state.inMarkedTeam ? "取消星标":"标记为星标团队" }>
                            <img 
                                id="favourites" 
                                onClick={this.handleMark.bind(this.index)} 
                                src={this.state.inMarkedTeam ? favourFilling : favour} 
                            />
                        </Tooltip>
                        <Tooltip placement="right" title="编辑">
                            <img id="edit" src={edit} />
                        </Tooltip>
                </div>
                </div>
                <p>{this.state.name}</p>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {
    //login: (arg) => login(arg),
}

export default TeamItem = connect(mapStateToProps, mapDispatchToProps)(TeamItem);