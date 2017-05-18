import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { browserHistory } from 'react-router'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Project extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        const {selectedItem} = this.props.project
        const {changeTheSelectedItem} = this.props
        return (
            <div>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu mode="inline" defaultSelectedKeys={['项目中心']} defaultOpenKeys={['projects']} style={{ height: '100%' }}
                             onClick={changeTheSelectedItem}>
                            <SubMenu key="projects" title={<span><Icon type="user" />项目管理</span>}>
                                <Menu.Item key="项目中心">项目中心</Menu.Item>
                                <Menu.Item key="我的项目">我的项目</Menu.Item>
                                <Menu.Item key="创建项目">创建项目</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content width="60%" style={{ padding: '0 24px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>项目管理</Breadcrumb.Item>
                            <Breadcrumb.Item>{selectedItem}</Breadcrumb.Item>
                        </Breadcrumb>
                        {this.props.children}
                    </Content>
                </Layout>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        project: state.project,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTheSelectedItem: ()=> dispatch({type: 'test'})
    }
}

export default Project = connect(mapStateToProps, mapDispatchToProps)(Project)