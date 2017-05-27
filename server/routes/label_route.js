
const Label = require('../db_services/labels/label_controllers')

module.exports = function (app) {
    
    app.post ('/api/project/label/createLabel', function (req, res) {
        Label.createLabel(req, res)
    })

    app.get ('/api/project/label/getLabel', function (req, res) {
        Label.getLabel(req, res)
    })

    app.get ('/api/project/label/isActive', function (req, res) {
        Label.updateLabelStatus(req, res)
    })
}
