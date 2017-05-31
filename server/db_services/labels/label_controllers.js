/**
 * Created by aferica on 17-5-27
 */
let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')

let LabelSchema = require('./label_models').LabelSchema
LabelSchema.plugin(mongoosePaginate)
let Label = mongoose.model('LabelSchema', LabelSchema)

/**
 * 添加标签
 */
exports.createLabel = function (req, res) {
    let label = new Label(req.body)
    label.save (function (err, label) {
        if (err) {
            return res.status(400).send ({
                message: 'create faild'
            })
        } else {
            res.jsonp(label)
        }
    })
}

/**
 * 获得标签
 */
exports.getLabel = function (req, res) {
    Label.find(req.query).exec (function (err, labels){
        if (err) {
            return res.status(400).send ({
                message: 'query failed'
            });
        } else {
            res.jsonp(labels);
        }     
    })
}

/**
 * 激活/作废标签
 */
exports.updateLabelStatus = function (req, res) {
    Label.find(req.query).exec (function (err, label) {
        if (err) {
            return res.status(400).send ({
                message: 'update failed'
            });
        } else {
            let newLabel = label[0]
            newLabel.isActive = 1 - (newLabel.isActive)
            newLabel.save (function (saveErr, saveResult) {
                if (saveErr) {
                    return res.status(400).send ({
                        message: 'update failed'
                    });
                } else {
                    res.jsonp({message: 'success'})
                }
            })
        }
    })
}
