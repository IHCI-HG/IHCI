/**
 * Created by aferica on 17-4-26.
 */

const User = require('../db_services/user/controllers/user_controllers');
const Wechat = require('../db_services/user/controllers/wechat_login_controllers')

module.exports = function(app) {
  /**
   * 对user表的操作，包括：
   *      createUser： 创建（用户注册）
   *      isNameExit:  判断用户名是否已存在
   *      getUser： 获得用户信息
   *      updateUser: 更新用户数据
   */

  // 创建用户，即用户注册登录
  app.post('/api/project/user/createUser', function (req, res) {
    User.create(req, res);
  });

  // 判断用户名是否可用
  app.get('/api/project/user/isNameExit', function (req, res) {
    User.isNameExit(req, res);
  });

  // 获取用户信息
  app.get('/api/project/user/getUser', function (req, res) {
    User.getUserInformation(req, res);
  });

  // 更新用户数据
  app.post('/api/project/user/updateUser', function (req, res) {
    User.updateUser(req, res);
  });

  app.post('/api/project/user/updatePassword', function (req, res) {
    User.changePassword(req, res);
  })

  // 激活或是冻结帐号
  app.get('/api/project/user/activateOrInvalidUser', function (req, res) {
    User.activateOrInvalidUser(req, res);
  });


  /**
   * 判断是否已登录过了
   */
  app.get('/api/project/signin', function (req, res) {
    User.isLogin(req, res);
  });

  /**
   * 通过输入用户名和密码登录，并建立和保存session
   */
  app.post('/api/project/signin', function (req, res) {
    User.login(req, res);
  });

  /**
   * 登出操作
   */
  app.get('/api/project/user/signout', function (req, res) {
    if (req.session.sign) {
      req.session.sign = false;
    }
    res.send('signout success');
  });


  /**
 * 关于wechat 操作
 */
// 使用wechat登录
// 传入参数  code  微信扫码后得到的code
app.get('/api/project/user/wechat/Login', function (req, res) {
    Wechat.wechatLogin(req, res);
});

/**
 * 帐号与微信绑定
 * 传入参数  code  微信扫码后得到的code
 *          _id   帐号唯一标识符（mongodb数据id）
 */
app.get('/api/project/user/wechat/binding', function (req, res) {
    Wechat.wechatBinding(req, res);
});

// 帐号与微信绑定
// 传入参数  _id   帐号唯一标识符（mongodb数据id）
app.get('/api/project/user/wechat/unbinding', function (req, res) {
    Wechat.wechatUnbinding(req, res);
});
};
