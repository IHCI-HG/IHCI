import React, { Component } from 'react';
import Nav from '../Nav'
import './CoreLayout.css'
import '../../styles/core.css'

import { connect } from 'react-redux'
import { login, signOut } from '../../actions/user'

class Layout extends Component {
    render() {
        return (
            <div className='container'>
                <Nav {...this.props} />
                <div className='core-layout__viewport'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Layout;

