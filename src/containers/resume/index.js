import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { Menu, Icon, Layout } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import { browserHistory } from 'react-router'
import SelfIntro from './self-intro'


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
        collapsed: true,
        mode: 'inline',

        finished : {
            baseInfo : false,
            selfIntro : false,
            project : false,
            social : false,
            production : false,
        }
    };

    componentDidMount() {
        if (window) {
            if (window.document.body.clientWidth > 600) {
                this.setState({collapsed: false})
            }
        }

    }


    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    menuHandel(e) {
        switch(e.key) {
            case "1" :
                browserHistory.push("/resume/base-info"); break;
            case "2" :
                browserHistory.push("/resume/self-intro"); break;
            case "3" :
                browserHistory.push("/resume/project"); break;
            case "4" :
                browserHistory.push("/resume/social"); break;
            case "5" :
                browserHistory.push("/resume/production"); break;
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <div className="icon-container">
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </div>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    breakpoint="xs"
                    collapsedWidth="0"
                    style={{
                        height: "300px"
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        onClick={this.menuHandel}
                    >
                        <Menu.Item key="1">
                            <Icon type={this.props.finished.baseInfo ? "check-circle" : "check-circle-o"} />
                            <span className="nav-text">基本信息 <span style={{ color: "red" }}>*</span></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type={this.props.finished.selfIntro ? "check-circle" : "check-circle-o"} />
                            <span className="nav-text">个人介绍 <span style={{ color: "red" }}>*</span></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type={this.props.finished.project ? "check-circle" : "check-circle-o"} />
                            <span className="nav-text">项目经历</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type={this.props.finished.social ? "check-circle" : "check-circle-o"} />
                            <span className="nav-text">社团经历</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type={this.props.finished.production ? "check-circle" : "check-circle-o"} />
                            <span className="nav-text">个人作品</span>
                        </Menu.Item>
                    </Menu>
                </Sider>


                {this.props.children}

            </Layout>
        );
    }
}


function mapStateToProps(state) {
    return {
        finished: state.resume.finished
    }
}

const mapDispatchToProps = {

}

export default Resume = connect(mapStateToProps, mapDispatchToProps)(Resume)


