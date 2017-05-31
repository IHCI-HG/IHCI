const Article = require('../db_services/articles/article_controllers')

module.exports = function (app) {
    

    app.get ('/api/project/article/getArticle', function (req, res) {
        Article.getLabel(req, res)
    })


}