let mongoose = require('mongoose');
let Schema  = mongoose.Schema;

let TeamSchema = new Schema({
    name: {type: String, default:'', trim: true},
    members: {type: [String], default:'', trim: true}
},{collection: 'team'});