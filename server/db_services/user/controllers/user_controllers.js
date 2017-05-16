/**
 * Created by root on 17-1-4.
 */
let path = require('path');
let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');
let fs = require('fs');
let _ = require('lodash');

//使用md5加密
let md5 = require('md5');

// 引入user_model
let UserSchema = require('./../models/user_models').UserSchema;
UserSchema.plugin(mongoosePaginate);
let User = mongoose.model('UserModel', UserSchema);

// 引入user_data_model
let UserDataSchema = require('../../user_data/user_data_model').UserDataSchema;
UserDataSchema.plugin(mongoosePaginate);
let UserData = mongoose.model('UserDataModel', UserDataSchema);

exports.create = function (req, res) {

    req.body.password = md5(req.body.password);
    let user = new User(req.body);
    let userData = new UserData();

    userData.save (function (err, userData) {
        if (err) {
            return res.status(400).send ({
               message: 'create failed'
            });
        } else {
            let dataId = userData._id;
            user.dataId = dataId;
            user.save (function (err, user) {
                if (err) {
                    return res.status(400).send ({
                        message: 'create failed'
                    });
                } else {
                    res.jsonp(user);
                }
            })
        }
    })
};


exports.isLogin = function (req, res) {
  console.log(req.session.id);
  if (req.session.sign) {
    console.log(req.session);
    res.send(req.session.username);
  } else {
    console.log(req.session);
    res.send('sign first');
  }
};

exports.login = function (req, res) {
  let username = req.body.username;
  let password = md5(req.body.password);
  let query = {username: username, password: password};
  User.find(query).exec(function (err, user) {
    if (err) {
      return res.status(400).send({
        message: 'sign failed'
      });
    } else {
      if (user.length === 1) {
        req.session.sign = true;
        req.session.username = req.body.username;
        req.session.password = md5(req.body.password);
        console.log(req.session.name);
        res.send('sign success');
      } else {
        res.send('sign failed, name or password error');
      }
    }
  })
};

exports.isNameExit = function (req, res) {

   console.log('yes');
    User.find(req.query).count(function (err, exit) {
        if(err) {
            return res.status(400).send ({
                message: 'isNameExitErro'
            });
        } else {
            if (exit > 0) {
                res.send({ exist: true });
            } else {
                res.send({ exist: false });
            }
        }
    })
};

exports.getUserInformation = function (req, res) {

    User.find(req.query).exec(function (err, user) {
        if(err) {
            return res.status(400).send ({
                message: 'getUserError'
            });
        } else {
            res.jsonp(user);
        }
    })
};


exports.updateUser = function (req, res) {
    let id = req.body._id;
    User.find({_id: Object(id) }).exec( function (erro, user) {
        if (erro) {
            return res.status(400).send ({
                message: 'update failed'
            });
        } else {
            if (user.length === 0) {
                res.send('this user is not exit');
            } else {
                let newUser = user[0];
                newUser = _.extend(newUser, req.body);
                newUser.save(function(err) {
                    if (err) {
                        return res.status(400).send({
                            message: ''
                        });
                    } else {
                        res.send({message: 'update success'});
                    }
                });
            }
        }
    })
};

// 激活或者冻结用户
exports.activateOrInvalidUser = function (req, res) {
    let activateOrInvalid = 'invalid';
    let id = req.query.id;
    let isActiveNum = 0;
    if(req.query.isActive && req.query.isActive === '1') {
        isActiveNum = 1;
        activateOrInvalid = 'activate';
    }
    delete req.query.isActive;
    User.find(req.query).exec( function (err, user) {
        if (err) {
            return 'query failed';
        } else {
            console.log(user);
            user[0].isActive = isActiveNum;
            console.log(user);
            let newUser = user[0];
            newUser.save( function(err) {
                if (err) {
                    return res.status(400).send({
                        message: activateOrInvalid + ' failed'
                    });
                } else {
                    res.send({message: activateOrInvalid + ' success'});
                }
            });
        }
    });
};



// 根据ID或username找到对应用户
exports.findUser = function (field, value) {
    let query = {_id: value};
    console.log(query);
    User.find(query).exec( function (err, user) {
        if (err) {
            return 'query failed';
        } else {
            console.log(user);
            return user;
        }
    });
};
