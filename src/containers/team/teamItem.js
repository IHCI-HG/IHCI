import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Tooltip  } from 'antd';
import './teamItem.scss'

const favourites = require('./images/favourites.png')
const favouritesFilling = require('./images/favourites-filling.png')
const edit = require('./images/edit.png')

class TeamItem extends Component{
<<<<<<< HEAD
constructor(props){
        super(props);
        this.state={
            background:'rgba(0,0,0,0)',
            showIcon:'none',
            name:this.props.teamName,
=======
    constructor(props){
        super(props);
        this.state={
            background:'rgba(0,0,0,0)'
>>>>>>> liuzhuoman
        }
    }
    handleMouseover=()=>{
        this.setState({
<<<<<<< HEAD
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

    render(){
        return (
            <div className="container"  style={{background:this.state.background}} onMouseOver={this.handleMouseover}  onMouseOut={this.handleMouseOut}>
                <div className="picture" ></div>
                <div className="icon"  style={{display:this.state.showIcon}}>
                     <Tooltip placement="right" title="标记为星标团队">
                         <img id="favourites" src={favourites}/>
                     </Tooltip>
                     <Tooltip placement="right" title="编辑">
                         <img id="edit"  src={edit}/>
                     </Tooltip>
=======
            background:'rgba(249,249,249,0.9)'
        });
    }
    handleMouseOut=()=>{
        this.setState({
            background:'rgba(0,0,0,0)'
        });
    }
    render(){
        return (
            <div className="container-active" style={{background:this.state.background}}>
                <div className="picture" 
                onMouseOver={this.handleMouseover} 
                onMouseOut={this.handleMouseOut}></div>
                <div className="icon" >
                    <img id="favourites" src={favourites} />
                    <img id="edit" src={edit}/>
>>>>>>> liuzhuoman
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