import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Tooltip  } from 'antd';
import './teamItem.scss'

<<<<<<< HEAD
const favour = './images/favourites.png'
const favourFilling = './images/favourites-filling.png'
=======
const favourites = require('./images/favourites.png')
const favouritesFilling = require('./images/favourites-filling.png')
>>>>>>> zml
const edit = require('./images/edit.png')

class TeamItem extends Component{
constructor(props){
        super(props);
        this.state={
            background:'rgba(0,0,0,0)',
            showIcon:'none',
<<<<<<< HEAD
            favor:favour
=======
            name:this.props.teamName,
>>>>>>> zml
        }
        this.handleMark=this.handleMark.bind(this);
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
        console.log(this.state.favor);
        var value=this.state.favor;
        if(value==favour)
            value=favourFilling
        else
            value=favour
        this.setState({
            favor:value
        });
        
        // $.ajax({
        //     method: 'POST',
        //     url: 'http://' + window.location.host + '/api/project/team/teamMark',
        //     data: this.state
        // }).done(function (data) {
        //     //console.log(data)
        //     if (data != {}) {
        //         notification.open({
        //             message: '创建成功',
        //             //description: '恭喜你创建团队成功，页面将自动跳转到我的团队页面！',
        //         });
        //     }
        // })
    }

    render(){
        return (
            <div className="container"  style={{background:this.state.background}} onMouseOver={this.handleMouseover}  onMouseOut={this.handleMouseOut}>
                <div className="picture" ></div>
                <div className="icon"  style={{display:this.state.showIcon}} >
                     <Tooltip placement="right" title="标记为星标团队">
                         <img id="favourites" onClick={this.handleMark.bind(this)} src={require(this.state.favor)}/>
                     </Tooltip>
                     <Tooltip placement="right" title="编辑">
                         <img id="edit"  src={edit}/>
                     </Tooltip>
                </div>
<<<<<<< HEAD
                <p>{this.props.name}</p>
=======
                <p>{this.state.name}</p>
>>>>>>> zml
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