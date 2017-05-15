/**
 * Created by root on 17-1-10.
 */
let mongoose = require('mongoose');
let Schema  = mongoose.Schema;

let ResumeSchema = new Schema ({
  name: {type: String, default: '', trim: true},
  sex: {type: String, default: '', trim: true},
  birthDate: {type: Date, default: '', trim: true},
  phone: {type: String, default: '', trim: true},
  address: {type: String, default: '', trim: true},
  email: {type: String, default: '', trim: true},
  education: {type: String, default: '', trim: true},
  educationExperience: {type: String, default: '', trim: true},
  projectExperience: {type: String, default: '', trim: true},
  internshipExperience: {type: String, default: '', trim: true},
  selfEvaluation: {type: String, default: '', trim: true},
}, {collection: 'resume'});

exports.ResumeSchema = ResumeSchema;
