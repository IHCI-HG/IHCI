import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import './power-control.scss'
 
 
class PowerControl extends Component{

    constructor(props){
        super(props);
        this.state={
            name: "姓名"
        }
        
    }


    head(){
        return(
            <div>
                <div className = "team">团队</div>
                <img id = "more" src = {more} className = "more"/>
                <div className = "team-name">IHCI</div>
                <img id = "more_unfold" src = {more_unfold} className = "more-unfold"/>
                <img id = "favorites" src = {favourites} className = "shape"/>
                <div className = "triangle"></div>
                <div className = "rectangle"></div>
                <div className = "star">星标</div>
            </div>
        )
    }

    content(){
        return(
            <div>
            <div className = "left-container">
            <input type = "text" className = "text-fill" value=" 查找团队" />
            <div className = "star-team">星标团队
                <hr className = "line1" width = "90%"/>
                <ul className = "star-teamlist">
                    <li>团队名称</li>
                </ul>

            </div>
            <div className = "all-team">所有团队
                <hr className = "line2" width = "90%"/>
                <ul className ="all-teamlist">
                    <li>团队名称</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
            </div>
            </div>
                <div className = "member">所有成员
                    <ul className = "memberlist">
                        <li>
                            <div className = "add-container">
                                <img id = "addIcon" src = {add} /> 
                            </div>
                            <div className = "add-member">添加新成员</div>
                        </li>
                        <li>
                            <div className = "circle"></div>
                            <div className = "name">姓名</div>
                        </li>
                    </ul>
                </div>         
            </div>

        )
    }


    render(){
        return (
            <div className="member">
                <div className="picture">

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
    
}

export default PowerControl = connect(mapStateToProps, mapDispatchToProps)(PowerControl);