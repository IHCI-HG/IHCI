import React, { Component } from 'react';
import { connect } from 'react-redux'

class User extends Component {
    loginJudge() {
        if (this.props.isLogin) {
            return (
                <div className="form-horizontal">
                    <div className="page-header">
                        <h1> 个人设置 </h1>
                    </div>
                    <div className="form-group">
                        <label>账号邮箱</label>
                        <input type="email" disabled="true" className="form-control" placeholder={this.props.email + "  (已绑定)"}/>
                    </div>
                    <div className="form-group">
                        <label>密码</label>
                        <input type="password" className="form-control" placeholder='请输入新密码'/>
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder='请确认新密码'/>
                            <span className="input-group-btn">
                                 <button type="submit" className="btn btn-default pull-right">确认</button>
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>第三方账号关联</label>
                        <input type="password" className="form-control" placeholder='请输入新密码'/>
                        <input type="password" className="form-control" placeholder='请确认新密码'/>
                        <button type="submit" className="btn btn-primary pull-right col-md-4">确认</button>
                    </div>
                </div>
            )
        } else {
            return "请先登录"
        }
    }

    render() {
        return (
            <div>
                {this.loginJudge()}
            </div>
        );
    }
}



const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
    isLogin: state.user.isLogin,
    email: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
