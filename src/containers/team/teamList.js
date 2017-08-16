import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Modal from 'react-modal';
import './teamList.scss'
import './teamItem.scss'
import TeamItem from './teamItem'; 
import { notification, message } from 'antd';
import $ from 'jquery'
import './createTeam.scss'


const close = require('./images/close.png')
const add = require('./images/add.png')

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },

    content : {
        //top: '50%',
        //left: '50%',
        //right: 'auto',
        //bottom: 'auto',
        //marginRight: '-50%',
        //transform: 'translate(-50%, -50%)',
        border:'none',
        backgroundColor:'rgba(0, 0, 0, 0)',
    },

};


class TeamList extends Component{

    constructor(props) {
        super(props);

        this.state = {
             modalIsOpen: false,  
             background:'rgba(0,0,0,0)',
             teams:[],
             markedTeams:[],
             ownTeams:[],
             //创建新团队属性
             name:"",
             members: [this.props.user.user, "test@test.test"]
        };

        this.getTeamList();

        this.openModal = this.openModal.bind(this);
        //this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        //this._handleTeamMark=this.handleTeamMark.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }


    //获取团队列表
    getTeamList() {
        $.get('http://' + window.location.host + '/api/project/team/queryTeam', function(teams) {
            //console.log(teams)
            this.setState ({
                teams: teams
            })
        }.bind(this))
    }


    handleMouseover=()=>{
         this.setState({
             background:'#fff'
         });
     }
     handleMouseOut=()=>{
         this.setState({
             background:'rgba(0,0,0,0)'
         });
     }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    // afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     this.subtitle.style.color = '#f00';
    // }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handleInputChange(event){
        const text = event.target.value;
        this.setState({
            name: text
        });
    }

    handleSubmit() {
        var id = this.props.user.user +" "+ Date();
        this.setState({
            _id: id
        });
        if (this.state.name != '') {
            $.ajax({
                method: 'POST',
                url: 'http://' + window.location.host + '/api/project/team/createTeam',
                //data: JSON.stringify(this.state)
                data: this.state
            }).done(function (data) {
                //console.log(data)
                if (data != {}) {
                    notification.open({
                        message: '创建成功',
                        description: '恭喜你创建团队成功，页面将自动跳转到我的团队页面！',
                    });
                    //成功创建后跳转到改团队页面
                    //browserHistory.push('teamList');
                }
            })
        } else {
            message.error('请输入团队名称');
        }

        var name = this.state.name;
        this.setState({
            ownTeams: [
                ...this.state.ownTeams,
                {
                    teamName: name,
                    mark: 0,
                    inMarkedTeam: 0,
                    _id: id
                },
            ]
        })
    }
    
    //点击星标会添加到星标团队，取消星标从星标团队中删除，并作为属性传给teamitem
    handleTeamMark(index){
        this.state.teams.map(function(item){  
            //有星标且原来不在星标团队中
           if(item.mark && !item.inMarkedTeam){ 
               this.setState({
                   markedTeams: [
                       ...this.state.markedTeams,
                       item,
                   ]
               })
           }//取消星标且原来在星标团队中 
           else if (!item.mark && item.inMarkedTeam)
               this.setState({
                   markedTeams: this.state.markedTeams.filter((elem, i) => index !== i)
               })
        });
    }
   
    //星标团队
    markedTeam(){
        if(!this.state.markedTeams.length)
            return(
                <div className="small-container">
                    <span className="title">星标团队</span>
                    <ul><li>还没有星标团队哦~</li></ul>
                </div>
            )
        else
            return(
                <div className="small-container">
                    <span className="title">星标团队</span>
                    <ul>
                        {  
                            this.state.markedTeams.map(function (item) {
                                return (
                                    <li key={item._id}>
                                        <TeamItem 
                                            teamName={item.teamName} 
                                            mark={item.mark} 
                                            //handleTeamMark={this.handleTeamMark}
                                        ></TeamItem>
                                    </li>
                            )})
                        }
                    </ul>
                </div>
            )
    }
    

    //我拥有的团队，需要判断是否为团队主管或超级管理员，不是则没有此项
    //if(!this.props.isManager)
    myOwnTeam(){
       
        return(
            <div className="small-container">
                <span className="title">我拥有的团队</span>
                <ul>
                    <li key="add" onClick={this.openModal}>
                       <div className="addbtn" onClick={this.openModal} 
                       onMouseOver={this.handleMouseover} onMouseOut={this.handleMouseOut} 
                       style={{background:this.state.background}}>
                          <div className="icon-container" >
                             <img id="addIcon" src={add}/>
                          </div>
                       </div>
                       <p>创建新团队</p>
                    </li>

                     {  
                        this.state.ownTeams.map(function (item) {
                             return (
                                <li key={item._id}>
                                    <TeamItem 
                                        teamName={item.teamName} 
                                        mark={item.mark} 
                                        //handleTeamMark={this.handleTeamMark}
                                    ></TeamItem>
                                </li>
                         )})
                     }
                    
                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Modal"
                >

                    <div className="createTeam-container">
                        <div className="header">
                            <p className="title">创建新团队</p>
                            <img id="cancel" src={close} onClick={this.closeModal} />
                        </div>
                        <input type="text" placeholder="团队名称"  onChange={this.handleInputChange} autoFocus></input>
                        <button onClick={this.handleSubmit.bind(this)}>完成创建</button>
                    </div>
                </Modal>
                </ul>
                
            </div>
        )
    }
 
    //我参与的团队
    myTeam(){
        if(!this.state.teams.length)
            return(
                <div className="small-container">
                    <span className="title">我参与的团队</span>
                    <ul><li>你还没有团队哦~</li></ul>
                </div>
            )
        else
            return(
                <div className="small-container">
                    <span className="title">我参与的团队</span>
                    <ul>
                        {  
                            this.state.teams.map(function (item) {
                                return (
                                    <li key={item._id}>
                                        <TeamItem 
                                            teamName={item.name} 
                                            mark={item.mark} 
                                            //handleTeamMark={this.handleTeamMark}
                                            ></TeamItem>
                                    </li>
                            )})
                        }
                    </ul>
                    
                </div>
            )
    }

    render(){
        //this._handleTeamMark=this.handleTeamMark.bind(this);
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
        team: state.team,
        user: state.user
    }
}

const mapDispatchToProps = {
    
}

export default TeamList = connect(mapStateToProps, mapDispatchToProps)(TeamList)