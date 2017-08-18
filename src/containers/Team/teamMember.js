import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Menu, Select, Input, Icon, Breadcrumb, Tooltip} from 'antd';
import  TeamItem2  from './teamItem2';
import './teamMember.scss'
import './teamItem2.scss'
const Option = Select.Option;
const Search = Input.Search;

const favour = require('./images/favourites.png')
const favourFilling = require('./images/favourites-filling.png')
const border = require('./images/artboard.png')
const add = require('./images/add.png')
 
 
class TeamMember extends Component{

    constructor(props){
        super(props);
        this.state={
            _id: '',
            currentTeam:'',
            mark: 0,
            inMarkedTeam: 0,
            members: [],
            searchText: '',
        }
        
    }


    menu(){
        return (         
            <Select defaultValue={this.state.currentTeam} value={this.state.currentTeam} style={{ width: 100 }} onSelect={this.handleChange.bind(this)}>
                <Option value="team1">team1</Option>
                <Option value="team2">team2</Option>
                <Option value="team3">team3</Option>
            </Select>
        );
    }

    handleSearch=(value)=>{

    }


    handleChange=(value)=>{
        this.setState({
            currentTeam:value,
        });
    }

    handleMark=()=>{
        this.setState({
            mark: !this.state.mark,
        });
    }

    render(){
        return (
            <div className="container">
                <div className="nav" >
                    <Breadcrumb>
                        <Breadcrumb.Item><a onClick={() => browserHistory.push("/teamList")}>团队</a></Breadcrumb.Item>
                        {/*<Dropdown overlay={this.menu()} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#">
                                {this.state.currentTeam} <Icon type="down" />
                            </a>
                        </Dropdown>*/}
                        {this.menu()}
                        <Tooltip placement="right" title="星标">
                            <img id="favour" onClick={this.handleMark.bind(this)} src={this.state.mark ? favourFilling : favour} />
                        </Tooltip>
                    </Breadcrumb>
                </div>

                <div className="small-container">
                    <div className="teamList-container">
                        <Search
                                placeholder="查找团队"
                                style={{ width: 220, margin: 20 }}
                                onSearch={this.handleSearch.bind(this)}
                            />
                        <div className="scroll-container">
                            <div className="markedTeam">
                                <p>星标团队</p>
                                <img id="border" src={border} />
                                <ul>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                </ul>
                            </div>

                            <div className="allTeam">
                                <p>所有团队</p>
                                <img id="border" src={border} />
                                <ul>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                    <li><TeamItem2></TeamItem2></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="memberList-container">
                        <span>所有成员</span>
                        <ul>
                           <li /*onClick={this.openModal}*/>
                                <div className="addbtn" >
                                    <div className="icon-container" >
                                        <img id="addIcon" src={add} />
                                    </div>
                                     <p>添加新成员</p>
                                </div>
                           </li> 
                           {/*返回成员列表*/}
                        </ul>
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