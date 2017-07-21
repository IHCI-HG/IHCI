import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import './createTeam.scss'

class CreateTeam extends Component{

    render(){
        return (
            <div>
               创建团队
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