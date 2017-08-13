import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import './teamItem.scss'

const favourites = require('./images/favourites.png')
const favouritesFilling = require('./images/favourites.png')
const edit = require('./images/edit.png')

class TeamItem extends Component{
constructor(props){
        super(props);
        this.state={
            background:'rgba(0,0,0,0)',
            showIcon:'none',
        }
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

    render(){
        return (
            <div className="container"  style={{background:this.state.background}} onMouseOver={this.handleMouseover}  onMouseOut={this.handleMouseOut}>
                <div className="picture" ></div>
                <div className="icon"  style={{display:this.state.showIcon}}>
                    <img id="favourites" src={favourites}/>
                    <img id="edit"  src={edit}/>
                </div>
                <p>iHCI</p>
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