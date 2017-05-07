/**
 * Created by luqianyu on 2017/1/16.
 */
import { connect } from 'react-redux'

// import { bindWechat, unbindWechat } from '../modules/UserModule'

import User from '../components/User'

const mapDispatchToProps = {
  // bindWechat: (wechatOpenId) => bindWechat(wechatOpenId),
  // unbindWechat: () => unbindWechat()
}

const mapStateToProps = (state) => ({
  // isLogin : state.header.isLogin,
  // wechat: state.user.wechat,
  // account: state.user.account
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
