import React, { Component } from 'react';
import Nav from '../Nav'
import './CoreLayout.scss'
import '../../styles/core.css'

import { connect } from 'react-redux'
import { login, signOut } from '../../actions/user'



const WechatLogin = () => {
    return (
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {/*<div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                    </div>*/}
                    <div className="modal-body">
                        <div id="wechat-login"></div>
                    </div>
                    {/*<div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>*/}
                </div>
            </div>
        </div>
    );
};



class Layout extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div className='container'>
                <Nav {...this.props} />
                <div className='core-layout__viewport'>
                    {this.props.children}
                </div>
                <WechatLogin/>
            </div>
        )
    }
}
export default Layout;

