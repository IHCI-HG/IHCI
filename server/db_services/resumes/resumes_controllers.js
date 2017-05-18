/**
 * Created by root on 17-1-10.
 */
// let path = require('path');
let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');
// let url = require("url");
// let multer = require('multer');
// let fs = require('fs');xfgf
// let _ = require('lodash');

// 引入user_model
let ResumeSchema = require('./resumes_models').ResumeSchema;
ResumeSchema.plugin(mongoosePaginate);
let Resume = mongoose.model('ResumeSchema', ResumeSchema);

/**
 * 创建简历
 */
exports.createResume = function (req, res) {
  let resume = new Resume(req.body);
  resume.save( function (err, resume) {
    if (err) {
      return 'erro';
    } else {
      // return resume;
      res.send(resume);
    }
  });
};
