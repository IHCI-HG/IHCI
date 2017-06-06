/**
 * Created by aferica on 17-5-31
 */
let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')

let ArticleSchema = require('./article_model').ArticleSchema
ArticleSchema.plugin(mongoosePaginate)
let Article = mongoose.model('ArticleSchema', ArticleSchema)


/**
 * 获得标签
 */
exports.getLabel = function (req, res) {
    Article.find(req.query).exec (function (err, articles){
        if (err) {
            return res.status(400).send ({
                message: 'query failed'
            });
        } else {
            res.jsonp(articles[0].articleTitle);
        }     
    })
}