/**
 * Created by root on 17-1-4.
 */
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserDataSchema = new Schema({
  sex: { type: String, default:'', trim: true },
  age: { type: Number, default:1, trim: true }
}, { collection: 'user_data' })

exports.UserDataSchema = UserDataSchema
