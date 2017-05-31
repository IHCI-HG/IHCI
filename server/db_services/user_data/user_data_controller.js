/**
 * Created by root on 17-1-4.
 */
var path = require('path');
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var url = require("url");
// var multer = require('multer');
var fs = require('fs');
let _ = require('lodash');


// 引入user_data_model
var UserDataSchema = require('./user_data_model').UserDataSchema;
UserDataSchema.plugin(mongoosePaginate);
var UserData = mongoose.model('UserDataModel', UserDataSchema);



exports.getUserDataInformationById = function (req, res) {
    var _id = req.query._id;
    UserData.find({_id: Object(_id)}).exec(function (err, userdata) {
        if(err) {
            return res.status(400).send({
                message: 'getUserErro'
            });
        } else {
            res.jsonp(userdata);
        }
    })
};

exports.updateUserDataInformationById = function (req, res) {
    var _id = req.body._id;
    UserData.find({_id: Object(_id)}).exec(function (err, userdata) {
        if(err) {
            return res.status(400).send({
                message: 'getUserErro'
            });
        } else {
            // res.jsonp(user);
            let newUserData = userdata[0];
            newUserData = _.extend(newUserData, req.body);
            newUserData.save(function(err) {
              if (err) {
                return res.status(400).send({
                  message: ''
                });
              } else {
                res.send({message: 'update success'});
              }
            });
        }
    });
};

