import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import './teamItem.scss'

const favourites = require('./images/favourites.png')
const edit = require('./images/edit.png')

class TeamItem extends Component{

    render(){
        return (
            <div className="container-active" ref="teamItem" >
                <div className="picture"></div>
                <div className="icon">
                    <img id="favourites" src={favourites} />
                    <img id="edit" src={edit}/>
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