import React, { Component } from 'react'
import { connect } from 'react-redux'

import { browserHistory } from 'react-router'
import SelfIntro from './self-intro'
import Skill from './skill'


class ResumeSidebar extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div onClick={this.btnHandel}>
            </div>
        );
    }
}


class Resume extends Component {
    state = {



    }

    render() {
        return (
            <div>
                <div onClick={()=>{browserHistory.push("/resume/skill")}}>
                    skill   nav
                </div>
                <div onClick={()=>{browserHistory.push("/resume/self-intro")}}>
                    self-intro   nav
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        resume: state.user.resume,
    }
}

const mapDispatchToProps = {

}

export default Resume = connect(mapStateToProps, mapDispatchToProps)(Resume)


