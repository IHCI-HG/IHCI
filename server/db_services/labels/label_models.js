/**
 * 
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LabelSchema = new Schema({
    labelName: {type: String, default: '', trim: true},
    createdOn: {type: String, default: '', trim: true},
    isActive: {type: Number, default: 1, trim: true},
}, {collection: 'label'});

exports.LabelSchema = LabelSchema;