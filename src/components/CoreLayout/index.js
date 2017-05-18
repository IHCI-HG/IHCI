import React, { Component } from 'react';
import Nav from '../Nav'
import NewNav from '../Nav/newNav'
import './CoreLayout.scss'
import '../../styles/core.css'

import { connect } from 'react-redux'
import { login, signOut } from '../../actions/user'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu, ItemGroup } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const WechatLogin = () => {
    return (
        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div id="wechat-login"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};



class myLayout extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Layout
                style={{height: "100%"}}
            >
                <NewNav/>
                <Layout
                    className="main-container"
                    style={{height: "100%"}}
                >
                    <Content
                        style={{height: "100%"}}
                    >
                    {this.props.children}
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
    /*render() {
        return (
            <Layout className='container'>
                <Nav {...this.props} />
                <Header className="header">
                </Header>
                <div className='core-layout__viewport'>
                    {this.props.children}
                </div>
                <WechatLogin/>
            </Layout>
        )
    }*/
}
export default myLayout;

