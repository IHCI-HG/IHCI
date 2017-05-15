/**
 * Created by aferica on 17-5-9.
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProjectSchema = new Schema({
  name: {type: String, default: '', trim: true},
  publisherName: {type: String, default: '', trim: true},
  publisherId: {type: String, default: '', trim: true},
  publishDate: {type: Date, default: '', trim: true},
  applicants: {type:Array, default:[],trim:true},
  createDate: {type: Date, default: '', trim: true},
  startProjectDate: {type: Date, default: '', trim: true},
  finishApplicationDate: {type: Date, default: '', trim: true},
  finishProjectDate: {type: Date, default: '', trim: true},
  detail: {type: String, default: '', trim: true},
  demand: {type: String, default: '', trim: true},
  type: {type: String, default: '', trim: true}
}, {collection: 'project'});

exports.ProjectSchema = ProjectSchema;
