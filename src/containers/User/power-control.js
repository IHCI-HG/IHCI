import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Tooltip  } from 'antd';
import './power-control.scss'

const favourites = require('../team/images/favourites.png')
const favouritesFilling = require('../team/images/favourites-filling.png')
const edit = require('../team/images/edit.png')

class PowerControl extends Component{
constructor(props){
        super(props);
        this.state={
            background:'rgba(0,0,0,0)',
            showIcon:'none',
            name:'奥分行东港股份的发',
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
                <div className="small-container">
                    <div className="picture" ></div>
                    <div className="icon" style={{ display: this.state.showIcon }}>
                        <Tooltip placement="right" title="标记为星标团队">
                            <img id="favourites" src={favourites} />
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

export default PowerControl = connect(mapStateToProps, mapDispatchToProps)(PowerControl);