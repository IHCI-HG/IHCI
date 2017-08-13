import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import './power-control.scss'

const favourites = require('../Team/images/favourites.png')
const edit = require('../Team/images/edit.png')

class PowerControl extends Component{


    render(){
        return (
            <div className="container-active" >
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

export default PowerControl = connect(mapStateToProps, mapDispatchToProps)(PowerControl);