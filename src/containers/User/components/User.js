/**
 * Created by luqianyu on 2017/1/16.
 */
// import React from 'react'
// import WechatPop from './bindWechatPop'


// const UserManagement = React.createClass({
//   getInitialState () {
//     return {
//       wechat: this.props.wechat
//     }
//   },
//   fackBindBtn() {
//     localStorage.wechat = "sssss"
//     this.props.bindWechat("sssss")
//     this.setState({ wechat: "sssss" })
//   },
//   unBindBtn() {
//     localStorage.wechat = ""
//     this.props.unbindWechat()
//     this.setState({ wechat: "" })
//   },
//   wechatBind(isLogin) {
//     if(!isLogin) {
//       return  (
//         <div> 请先登录 </div>
//       )
//     } else {
//       if(this.state.wechat === "") {
//         return (
//           <div className='input-group'>
//             <span>微信账号未绑定</span>
//             <button onClick={this.fackBindBtn}>假装绑定</button>
//             <WechatPop/>
//           </div>

//         )
//       } else {
//         return (
//           <div className='input-group'>
//             <span className='input-group-addon'>微信</span>
//             <input type='text' className='form-control' disabled='true' placeholder='Wechat (已绑定)'/>
//             <span className='input-group-btn'>
//           <button className='btn btn-default' type='button' onClick={this.unBindBtn}>解除绑定</button>
//         </span>
//           </div>
//         )
//       }
//     }

//   },
//   render() {
//     return (
//       <div>
//         {this.wechatBind(this.props.isLogin)}
//       </div>
//     )
//   }
// })

// export default UserManagement



import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
        ???
      </div>
    );
  }
}

export default User;