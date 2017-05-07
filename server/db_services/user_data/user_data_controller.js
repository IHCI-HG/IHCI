/**
 * Created by root on 17-1-4.
 */
var path = require('path')
var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var url = require('url')
// var multer = require('multer');
var fs = require('fs')

// 引入user_model
// var UserSchema = require('./user_models').UserSchema;
// UserSchema.plugin(mongoosePaginate);
// var User = mongoose.model('UserModel', UserSchema);

// 引入user_data_model
var UserDataSchema = require('./user_data_model').UserDataSchema
UserDataSchema.plugin(mongoosePaginate)
var UserData = mongoose.model('UserDataModel', UserDataSchema)

exports.getUserDataInformationById = function (req, res) {
  console.log(req.query.id)
  var id = req.query.id
  UserData.find({ _id: id }).exec(function (err, user) {
    if (err) {
      return res.status(400).send({
        message: 'getUserErro'
      })
    } else {
      res.jsonp(user)
    }
  })
}

exports.updateUserDataInformationById = function (req, res) {
    // console.log(req.query.id);
    // var id = req.query.id;
    // UserData.find({_id: id}).exec(function (err, user) {
    //     if(err) {
    //         return res.status(400).send({
    //             message: 'getUserErro'
    //         });
    //     } else {
    //         res.jsonp(user);
    //     }
    // })
}

