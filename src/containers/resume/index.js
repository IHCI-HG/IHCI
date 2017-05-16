import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
                <Menu
                    theme= 'dark'
                    style={{ width: 160 }}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                >

                    <Menu.Item key="1">基本信息</Menu.Item>
                    <Menu.Item key="2">项目经历</Menu.Item>
                    <Menu.Item key="3">个人介绍</Menu.Item>
                    <Menu.Item key="4">项目经历</Menu.Item>
                </Menu>

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


