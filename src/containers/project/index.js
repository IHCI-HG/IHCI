import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { browserHistory } from 'react-router'

class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>test project</div>
                <div>test 2</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {

}

export default Project = connect(mapStateToProps, mapDispatchToProps)(Project)