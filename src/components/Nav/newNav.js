import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {
    cheakIfLogin,
    login,
    signOut
} from '../../actions/user';
import './nav.scss'
import { Layout, Menu, Icon, Modal } from 'antd';
const { Header } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class newNav extends Component {

    componentWillMount() {
        this.props.cheakIfLogin();
    }

    handleClick(e) {
        switch (e.key) {
            case "login":
                browserHistory.push("/login"); break;
            case "resume":
                browserHistory.push("/resume"); break;
            case "setting":
                browserHistory.push("/user"); break;
            case "logout":
                this.props.signOut(); break;
            case "main":
                browserHistory.push("/"); break;
            case "counter":
                browserHistory.push("/demoCompoant/counter"); break;
            case "todolist":
                browserHistory.push("/TodoList"); break;
            case "blog":
                browserHistory.push("/blog"); break;
            case "project":
                browserHistory.push("/project"); break;
        }
    }

    user() {
        if(!this.props.isLogin) {
            return (
                    <Menu.Item key="login">登录 注册</Menu.Item>
            )
        } else {
            return (
                <SubMenu title="用户">
                    <Menu.Item key="resume"  onClick={() => browserHistory.push("/resume")}>简历</Menu.Item>
                    <Menu.Item key="setting" onClick={() => browserHistory.push("/user")}>个人设置</Menu.Item>
                    <Menu.Item key="logout" onClick={this.props.signOut}>登出</Menu.Item>
                </SubMenu>
            )
        }
    }

    render() {
        return (
            <Header>
                <Menu
                    mode="horizontal"
                    theme="dark"
                    className="nav-menu"
                    onClick={this.handleClick.bind(this)}
                >
                    <Menu.Item key="main">主页</Menu.Item>
                    <Menu.Item key="blog">博客</Menu.Item>
                    <Menu.Item key="project">机会</Menu.Item>
                    {/*<SubMenu title="demo" key="demo">
                        <Menu.Item>Action</Menu.Item>
                        <Menu.Item>Another action</Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item key="counter">counter</Menu.Item>
                        <Menu.Item key="todulist">todolist</Menu.Item>
                    </SubMenu>*/}
                    {this.user()}
                </Menu>

            </Header>
        );
    }
}



function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
        user: state.user.user,
        userId: state.user.userId,
    }
}

const mapDispatchToProps = {
    login: (arg) => login(arg),
    signOut: () => signOut(),
    cheakIfLogin: () => cheakIfLogin(),
}
export default connect(mapStateToProps, mapDispatchToProps)(newNav)
