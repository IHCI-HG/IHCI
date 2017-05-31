let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    articleNo: {type: String, default: '', trim: true},
    articleTitle: {type: String, default: '', trim: true},
    createdOn: {type: String, default: '', trim: true},
    type:{type: String, default: '', trim: true}
}, {collection: 'article'});

exports.ArticleSchema = ArticleSchema;