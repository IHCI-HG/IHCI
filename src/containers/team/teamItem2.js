import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Tooltip  } from 'antd';
import './teamItem2.scss'

class TeamItem2 extends Component{

    constructor(props){
        super(props);
        this.state={
            name: 'iHCI',
        }

    }

    render(){
        return (
            <div className="container1">
                <div className="pic">
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

export default TeamItem2 = connect(mapStateToProps, mapDispatchToProps)(TeamItem2);