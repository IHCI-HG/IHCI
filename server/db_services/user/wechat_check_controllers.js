/**
 * Created by root on 17-1-15.
 */
let https = require('https');
let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');
let errorHandler = require('../common_functions/errors_server_controller');
let wechatURL = 'https://api.weixin.qq.com';

let parameter = '';
let getTokenParameter = '/sns/oauth2/access_token';
let getUserinfoParameter = '/sns/userinfo';
let appid = 'wx50a231aefaff3222';
let secret = '7eaa350215f234a6252a0f014cd9973a';
let grant_type = 'authorization_code';

let User = require('./user_controllers');
let UserSchema = require('./user_models').UserSchema
UserSchema.plugin(mongoosePaginate)
let UserModel = mongoose.model('UserModel', UserSchema)
const session = require('express-session')

exports.wechatLogin = function (req, res) {
  console.log(req.query);
  getTokenByCode(req, function (token) {
    // console.log(token);
    getUserinfoByToken(token, function (userinfo) {
      // console.log(userinfo);
      // res.send(userinfo);
      UserModel.find({ wechat: userinfo.unionid }).exec(function (err, user) {
        if(err) {
          return 'login failed, please try again'
        } else {
          if(user.length > 0) {
            req.session.sign = true
            req.session.username = req.body.username
            req.session.password = req.body.password
            console.log(req.session.name)
            res.redirect('http://120.25.207.237/');
            res.send(user);

          } else {
            req.body = { wechat: userinfo.unionid };
            User.create(req, res);
          }
        }
      });
    });
  });
};

exports.wechatBinding = function (req, res) {
  let _id = req.query._id;
  getTokenByCode(req, function (token) {
    // console.log(token);
    getUserinfoByToken(token, function (userinfo) {
      // console.log(userinfo);
      // res.send(userinfo);
      UserModel.find({ _id: Object(_id) }).exec(function (err, user) {
        if(err) {
          return 'login failed, please try again'
        } else {
          if(user.length > 0) {
            let newUser = user[0];
            newUser.wechat = userinfo.unionid;
            newUser.save(function (err) {
              if (err) {
                return res.status(400).send({
                  message: 'update failed'
                })
              } else {
                res.send({ message: 'update success' })
              }
            })
          } else {
            res.send('this user is not exit')
          }
        }
      });
    });
  });
};


exports.wechatUnbinding = function (req, res) {
  let _id = req.query._id;
  UserModel.find({ _id: Object(_id) }).exec(function (erro, user) {
    if (erro) {
      return res.status(400).send({
        message: 'update failed'
      })
    } else {
      if (user.length === 0) {
        res.send('this user is not exit')
      } else {
        let newUser = user[0];
        newUser.wechat = '';
        newUser.save(function (err) {
          if (err) {
            return res.status(400).send({
              message: 'update failed'
            })
          } else {
            res.send({ message: 'update success' })
          }
        })
      }
    }
  });
}


/**
 * 根据传入code获取token和openid
 * @param req  http request
 * @param res  http response
 */
function getTokenByCode(req, callback) {
  parameter = getTokenParameter + '?appid=' + appid + '&secret=' + secret +
    '&code=' + req.query.code + '&grant_type=' + grant_type;
  console.log(wechatURL + parameter);
  https.get(wechatURL + parameter, (result) => {
    let size = 0;
    let chunks = [];
    result.on('data', function(chunk) {
      size += chunk.length;
      chunks.push(chunk);
    });
    result.on('end', function() {
      let token = Buffer.concat(chunks, size);
      token = JSON.parse(token);
      callback(token);
    });
  }).on('error', (e) => {
    console.log(e.message);
    return 'error';
  });
}

/**
 * 更具token和openid获得登录微信用户信息
 * @param token json格式数据，包含token和openid
 * @param res  http response
 */
function getUserinfoByToken(token, callback) {
  parameter = getUserinfoParameter + '?access_token=' + token.access_token
    + '&openid=' + token.openid ;
  console.log(wechatURL + parameter);
  https.get(wechatURL + parameter, (result) => {
    let size = 0;
    let chunks = [];
    result.on('data', function(chunk){
      size += chunk.length;
      chunks.push(chunk);
    });
    result.on('end', function(){
      let userinfo = Buffer.concat(chunks, size);
      // console.log(userinfo);
      // res.send(userinfo);
      callback(JSON.parse(userinfo));
    });
  }).on('error', (e) => {
    console.log(e.message);
  });
}
