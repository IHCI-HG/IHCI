import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Modal from 'react-modal'
import { Menu, Select, Input, Icon, Breadcrumb, Tooltip, Form, Button, notification} from 'antd';
import  TeamItem2  from './teamItem2'
import ManagerItem from './managerItem'
import MemberItem from './memberItem'
import $ from 'jquery'
import DynamicFieldSet from './dynamicFieldSet' /*引入动态增减表单项*/
import './dynamicFieldSet.scss'
import './teamMember.scss'
import './teamItem2.scss'
import './managerItem.scss'
import './memberItem.scss'
import './addMember.scss'
const Option = Select.Option;
const FormItem = Form.Item;
//const Search = Input.Search;

const favour = require('./images/favourites.png')
const favourFilling = require('./images/favourites-filling.png')
const border = require('./images/artboard.png')
const add = require('./images/add.png')
const close = require('./images/close.png')
const  WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);

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
var currentTeam='';
 
class TeamMember extends Component{

    constructor(props){
        super(props);
        this.state={
            _id: '',
            // currentTeam:'',
            inMarkedTeam: 0,
            members: [],
            managers:[],
            searchText: '',
            teams: [],
            markedTeams: [],
        }
        
        this.openModal = this.openModal.bind(this);
        //this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getCurrTeamName();
        this.getTeamList();
        this.getMembers(currentTeam);
        this.handleInputChange=this.handleInputChange.bind(this);
        // this.handleSearch=this.handleSearch.bind(this);
        
    }

    getCurrTeamName(){
        var data=this.props.location.state;
        var {currTeamName}=data;
        console.log("params: "+currTeamName);
        // console.log("get current team name: "+this.props.router.params.state.currTeamName);
        // this.setState({ 
        //     currentTeam: currTeamName 
        // }),()=>{
        //     console.log("curr: "+this.state.currentTeam);
        // };
        currentTeam=currTeamName;
        console.log("params: "+currentTeam);
    }

    getTeamList() {
        $.get('http://rapapi.org/mockjsdata/24695/queryTeams?userName=a%40a.a').
            then((data) => {
                //console.log(data)
                const team = data.data.teams
                var markTeam = [];
                team.map(function (item) {
                    if(item.isStared)
                        markTeam.push(item);
                })
                console.log(team)
                this.setState({
                    teams: team,
                    markedTeams: markTeam,
                })
            }).then(()=>{console.log("GET teams: "+this.state)})
    }

    getMembers(team) {
        console.log("getting members...")
        $.get('http://rapapi.org/mockjsdata/24695/queryTeam?teamID='+team).
            then((data) => {
                console.log(data)
                this.setState({
                    managers: data.data.managers,
                    members: data.data.members,
                })
                console.log("data:"+data)
            }).then(()=>{
                console.log("GETMEMBERS- state: "+this.state.managers)
            })
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


    // menu(){
    //     return (         
    //         <Select defaultValue={this.state.currentTeam} value={this.state.currentTeam} style={{ width: 100 }} onSelect={this.handleChange.bind(this)}>
    //             <Option value="team1">team1</Option>
    //             <Option value="team2">team2</Option>
    //             <Option value="team3">team3</Option>
    //         </Select>
    //     );
    // }

    // handleTeamChange=(value)=>{

    // }

    handleTeamChange=(value)=>{
        currentTeam=value;
        this.getMembers(currentTeam);
    }


    handleChange=(value)=>{
        // this.setState({
        //     currentTeam:value,
        // });
        currentTeam=value;
    }

    handleMark=()=>{
        this.setState({
            mark: !this.state.mark,
        });
    }

    handleInputChange(event){
        const text = event.target.value;
        this.setState({
            searchText: text
        });
    }

    handleSearch=()=>{
        console.log("search");
        var search=false;
        const text=this.state.searchText.trim();
        if(text==""){
            notification.open({
                message: '团队名称不能为空！',
                // description: '团队名称不能为空！',
            });
        }else{
            this.state.teams.map(function (item) {
                if(item.teamID==text){
                    search=true;
                    currentTeam=text;
                    console.log("curr team: "+currentTeam);
                }
            });
            if(!search){
                notification.open({
                    // message: '搜索失败',
                    message: '请确认您是否在此团队中！',
                });
            }else{
                this.getMembers(currentTeam);
            }
        }
    }

    render(){

        return (
            <div className="out-container">
                <div className="nav" >
                    <div className="teamBC">
                        <div style={{float:'left',width:40}}>
                            <a onClick={() => browserHistory.push("/teamList")}>团队</a>
                        </div>
                        <div style={{float:'left',width:13,fontSize:18}}>/</div>
                        <div style={{marginLeft:53}}>
                            <a href="#">{ currentTeam } </a>
                        </div>
                    </div>
                    <div style={{marginLeft:5,marginTop:9}}>
                        <Tooltip  placement="right" title={this.state.mark ? "取消星标":"标记为星标团队" }>
                            <img id="favourite" onClick={this.handleMark.bind(this)} src={this.state.mark ? favourFilling : favour} />
                        </Tooltip>
                    </div>
                </div>

                <div className="content">
                    <div className="teamList-container">
                        <form action="" className="input-kw-form">
                            <Input type="search" style={{ width: 180, height:30, marginLeft:25, marginRight:5,marginTop:24 }} 
                                onChange={this.handleInputChange} placeholder="输入团队名称" />
                            <Button shape="circle" icon="search" onClick={this.handleSearch.bind(this)}/>
                        </form>
                        <div className="scroll-team">
                            <div className="markedTeam">
                                <p style={{marginBottom:3}}>星标团队</p>
                                <img id="border" src={border} />
                                <ul>
                                    {  
                                       this.state.markedTeams.map(function (item) {
                                            return (
                                            <li key={item._id} >
                                                <TeamItem2 
                                                    name={item.teamID} 
                                                ></TeamItem2>
                                            </li>
                                        )})
                                    }
                                </ul>
                            </div>

                            <div className="allTeam">
                                <p style={{marginBottom:3}}>所有团队</p>
                                <img id="border" src={border} />
                                <ul>
                                    {  
                                       this.state.teams.map(function (item) {
                                            return (
                                            <li key={item._id} >
                                                <TeamItem2 
                                                    name={item.teamID} 
                                                ></TeamItem2>
                                            </li>
                                        )})
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="memberList-container">
                        <span>所有成员</span>
                        <div className="scroll-member">
                            <ul>
                                <li onClick={this.openModal}>
                                    <div className="addbtn" >
                                        <div className="icon-container" >
                                            <img id="addIcon" src={add} />
                                        </div>
                                        <p>添加新成员</p>
                                    </div>
                                </li>
                                {/*返回成员列表*/}
                                {  
                                    this.state.managers.map(function (item) {
                                        {/*console.log("managers item:"+item)*/}
                                        return (
                                        <li key={item._id}>
                                            <ManagerItem 
                                                name={item} 
                                            ></ManagerItem>
                                        </li>
                                    )})
                                }
                                {  
                                    this.state.members.map(function (item) {
                                        {/*console.log("managers item:"+item)*/}
                                        return (
                                        <li key={item._id}>
                                            <MemberItem 
                                                name={item} 
                                            ></MemberItem>
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

                                    <div className="addMember-container">
                                        <div className="header">
                                            <p className="title">邀请新成员</p>
                                            <img id="cancel" src={close} onClick={this.closeModal} />
                                        </div>
                                        <div className="email-container">
                                            <WrappedDynamicFieldSet/>
                                        </div>
                                    </div>
                                </Modal>
                            </ul>
                        </div>
                    </div>
                </div>
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

export default TeamMember = connect(mapStateToProps, mapDispatchToProps)(TeamMember);