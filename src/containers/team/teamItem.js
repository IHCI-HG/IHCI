import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Tooltip  } from 'antd';
import './teamItem.scss'

const favour = './images/favourites.png'
const favourFilling = './images/favourites-filling.png'
const edit = require('./images/edit.png')

class TeamItem extends Component{
constructor(props){
        super(props);
        this.state={
            background:'rgba(0,0,0,0)',
            showIcon:'none',
            favor:favour,
            name:this.props.teamName,
            mark:0
        }
        this.handleMark=this.handleMark.bind(this);
        // this.updateTeamMark=this.updateTeamMark.bind(this);
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
        console.log(this.state);
        var value=this.state.favor;
        var mk=this.state.mark;
        if(value==favour){
            value=favourFilling;
            mk=1;
        }else{
            value=favour;
            mk=0;
        }
        console.log(value+" "+mk);
        this.setState({
            favor:value,
            mark:mk
        });
        this.props.handleTeamMark();
        // console.log(this.state);
        // console.log(this.state.mark);
    }
    render(){
        return (
            <div className="container" checked={this.state.mark} style={{background:this.state.background}} onMouseOver={this.handleMouseover}  onMouseOut={this.handleMouseOut}>
                <div className="picture" ></div>
                <div className="icon"  style={{display:this.state.showIcon}} >
                     <Tooltip placement="right" title="标记为星标团队">
                         <img id="favourites" onClick={this.handleMark} src={require(this.state.favor)}/>
                     </Tooltip>
                     <Tooltip placement="right" title="编辑">
                         <img id="edit"  src={edit}/>
                     </Tooltip>
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