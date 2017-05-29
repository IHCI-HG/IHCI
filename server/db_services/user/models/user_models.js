/**
 * Created by root on 17-1-4.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    password: {type: String, default: '', trim: true},
    username: {type: String, default: '', trim: true},
    wechat: {type: String, default: '', trim: true},
    phone: {type: String, default: '', trim: true},
    email: {type: String, default: '', trim: true},
    dataId: {type: String, default: '', trim: true},
    isActive: {type: Number, default: 0, trim: true},
    isTeacher: {type: Number, default: 0, trim: true},
    label: {type: String, default: '', trim: true},
}, {collection: 'user'});

exports.UserSchema = UserSchema;
