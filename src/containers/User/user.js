import React, { Component } from 'react';
import { connect } from 'react-redux'

class User extends Component {

    state = {
        isBindWechat : true,
    }

    componentDidMount() {
          !function (a, b) { function d(a) { var e, c = b.createElement("iframe"), d = "https://open.weixin.qq.com/connect/qrconnect?appid=" + a.appid + "&scope=" + a.scope + "&redirect_uri=" + a.redirect_uri + "&state=" + a.state + "&login_type=jssdk"; d += a.style ? "&style=" + a.style : "", d += a.href ? "&href=" + a.href : "", c.src = d, c.frameBorder = "0", c.allowTransparency = "true", c.scrolling = "no", c.width = "300px", c.height = "400px", e = b.getElementById(a.id), e.innerHTML = " ", e.appendChild(c) } a.WxLogin = d }(window, document);

    }


    bindWechat() {
        // this.setState({isBindWechat : true})
        setTimeout(function () {
            var obj = new WxLogin({
                id: "wechat-login",
                appid: "wx50a231aefaff3222",
                scope: "snsapi_login",
                redirect_uri: "http%3A%2F%2F120.25.207.237%2Fapi%2Fproject%2Fuser%2Fwechat%2FLogin",
                state: "",
                style: "",
                href: ""
            }, 1000);
        })
    }

    unbindWechat() {
        this.setState({isBindWechat : false})
    }

    loginJudge() {
        if (this.props.isLogin) {
            return (
                <div>
                    <div className="page-header">
                        <h1> 个人设置 </h1>
                    </div>
                    <div className="form-group">
                        <label>账号邮箱</label>
                        <input type="email" disabled="true" className="form-control" placeholder={this.props.email + "  (已绑定)"}/>
                    </div>
                    {/*<div className="form-group">
                        <label>密码</label>
                        <input type="password" className="form-control" placeholder='请输入新密码'/>
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder='请确认新密码'/>
                            <span className="input-group-btn">
                                 <button  className="btn btn-default pull-right">确认</button>
                            </span>
                        </div>
                    </div>*/}

                    <div className={'form-group ' + this.passwordState()}>
                    <input type='password' className='form-control' ref='password' placeholder='新密码' onChange={this.passwordCheck.bind(this)} />
                    {this.passwordCheckSpan(this.state.passwordState)}
                </div>

                <div className={'form-group ' + this.checkNewPasswordState()}>
                    <input type='password'
                        className='form-control'
                        ref='checkPassword'
                        placeholder='确认新密码'
                        onChange={this.checkNewPasswordCheck.bind(this)}
                    />
                    {this.checkPasswordSpan(this.state.checkPasswordState)}

                </div>

                    <div className="form-group">
                        <label>第三方账号关联</label>
                        {
                            this.state.isBindWechat ?
                            <div className="input-group">
                                <input type="password" disabled="true" className="form-control" placeholder='微信 (已绑定)'/>
                                <span className="input-group-btn">
                                    <div  onClick={this.unbindWechat.bind(this)} className="btn btn-default pull-right">解除绑定</div>
                                </span>
                            </div>
                            :
                            <div className="input-group">
                                <input type="password" disabled="true" className="form-control" placeholder='微信 (未绑定)'/>
                                <span className="input-group-btn">
                                    <div onClick={this.bindWechat.bind(this)} data-toggle="modal" data-target="#myModal" className="btn btn-default pull-right">点击绑定</div>
                                </span>
                            </div>
                        }

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
                {
                    this.props.ifLogin ?
                     <div>
                         sssss
                     </div>
                    :
                    <div>
                        ssssss
                    </div>
                }
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
