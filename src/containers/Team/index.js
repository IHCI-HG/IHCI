import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { browserHistory } from 'react-router'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import '../resume/index.scss'

class Team extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        collapsed: true,
        mode: 'inline',
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

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    changeTheSelectedItem(items) {
        const url = '/team/' + items.key
        browserHistory.push(url)
    }

    render() {
        const {selectedItem} = this.props.project
        return (
            <Layout style={{height: "100%" }}>
                <div className="icon-container">
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </div>
                <Sider  trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    breakpoint="xs"
                    collapsedWidth="0"
                    style={{
                        height: "100%"
                    }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['member']}  style={{ height: '100%' }}
                            onClick={this.changeTheSelectedItem}>
                        <Menu.Item key="member">成员</Menu.Item>
                        <Menu.Item key="roleManage">角色管理</Menu.Item>
                    </Menu>
                </Sider>
                <Content width="60%" style={{ padding: '0 24px' }}>
                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {
    
    
}

export default Team = connect(mapStateToProps, mapDispatchToProps)(Team)