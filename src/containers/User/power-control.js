import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import './power-control.scss'

class PowerControl extends Component{

    render(){
        return (
            <div>
                这是我的权限
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