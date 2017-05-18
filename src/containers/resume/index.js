import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Menu, Icon, Layout } from 'antd';
const { Sider } = Layout;
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
        collapsed: false,
        mode: 'inline',

        finished : {
            baseInfo : false,
            selfIntro : false,
            project : false,
            social : false,
            production : false,
        }
    };

    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    render() {
        return (
            <Sider
                breakpoint="xs"
                collapsedWidth="0"
                style={{height: "100%"}}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type={this.state.finished.baseInfo ? "check-circle" : "check-circle-o"} />
                        <span className="nav-text">基本信息 <span style={{ color: "red" }}>*</span></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type={this.state.finished.selfIntro ? "check-circle" : "check-circle-o"} />
                        <span className="nav-text">个人介绍 <span style={{ color: "red" }}>*</span></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type={this.state.finished.project ? "check-circle" : "check-circle-o"} />
                        <span className="nav-text">项目经历</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type={this.state.finished.social ? "check-circle" : "check-circle-o"} />
                        <span className="nav-text">社团经历</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type={this.state.finished.production ? "check-circle" : "check-circle-o"} />
                        <span className="nav-text">个人作品</span>
                    </Menu.Item>
                </Menu>
            </Sider>
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


