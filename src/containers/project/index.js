import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { browserHistory } from 'react-router'
import $ from 'jquery'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import '../resume/index.scss'

class Project extends Component {
    constructor(props) {
        super(props)
        let path = this.props.location.pathname.split('/')
        let defaultSelectedKeys = []
        defaultSelectedKeys[0] = path[path.length - 1]
        console.log(defaultSelectedKeys)
        this.state = {
            collapsed: true,
            mode: 'inline',
            defaultSelectedKeys: defaultSelectedKeys
        };

    }


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
        const url = '/project/' + items.key
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.defaultSelectedKeys}  style={{ height: '100%' }}
                            onClick={this.changeTheSelectedItem} openKeys={['g1','g2']}>
                        <SubMenu key="g1" title="用户" >
                            <Menu.Item key="project-list">项目中心</Menu.Item>
                            <Menu.Item key="my-project">我的项目</Menu.Item>
                        {/*</SubMenu>
                        <SubMenu title="教师">*/}
                            {/*<Menu.Item key="project-list">项目中心</Menu.Item>
                            <Menu.Item key="my-project">我的项目</Menu.Item>*/}
                            <Menu.Item key="create-project">创建项目</Menu.Item>
                        </SubMenu>
                        <SubMenu key="g2" title="管理员">
                            <Menu.Item key="label-list">标签管理</Menu.Item>
                            <Menu.Item key="create-label">创建标签</Menu.Item>
                        </SubMenu>
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
        project: state.project,
        user: state.user
    }
}

const mapDispatchToProps = {
    
    
}

export default Project = connect(mapStateToProps, mapDispatchToProps)(Project)