

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserAndProjectSchema = new Schema({
    userId: {type: String, default: '', trim: true},
    username: {type: String, default: '', trim: true},
    projectId: {type: String, default: '', trim: true},
    name: {type: String, default: '', trim: true},
    label: {type: String, default: '', trim: true},
    createdOn: {type: String, default: '', trim: true},
    status: {type: String, default: '', trim: true},
}, {collection: 'user_and_project'});

exports.UserAndProjectSchema = UserAndProjectSchema;