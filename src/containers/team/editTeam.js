import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import './createTeam.scss'


const close = require('./images/close.png')

class EditTeam extends Component{

    render(){
        return (
            <div className = "createTeam-container">
               <div className = "header">
                   <p className = "title">编辑团队</p>
                   <img id="cancel" src={close}/>
               </div>
               <input type="text" placeholder="团队名称"></input>
               <button>保存</button>
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

export default EditTeam = connect(mapStateToProps, mapDispatchToProps)(EditTeam);