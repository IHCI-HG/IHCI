import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import './createTeam.scss'


const close = require('./images/close.png')

class CreateTeam extends Component{

    render(){
        return (
            <div className = "createTeam-container">
               <div className = "header">
                   <p className = "title">创建新团队</p>
                   <img id="cancel" src={close} onClick={() => browserHistory.push("/teamList")}/>
               </div>
               <input type="text" placeholder="团队名称"></input>
               <button>完成创建</button>
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

export default CreateTeam = connect(mapStateToProps, mapDispatchToProps)(CreateTeam);