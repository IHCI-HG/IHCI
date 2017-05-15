/**
 * Created by aferica on 17-5-11.
 */
let _ = require('lodash');
let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');

let ProjectSchema = require('./projects_models').ProjectSchema;
ProjectSchema.plugin(mongoosePaginate);
let Project = mongoose.model('ProjectSchema',ProjectSchema);

/**
 * 创建项目
 */

exports.createProject = function (req, res) {
    let project = new Project(req.body);

    project.save (function (err, project) {
        if (err) {
            return res.status(400).send ({
                message: 'create failed'
            });
        } else {
            res.jsonp(project);
        }
    })
};

/**
 * 查询项目
 */
exports.queryProject = function (req, res) {

    let id = req.query.id;
    let query = {'_id': id};
    if (id == undefined) {
        query = {};
    }
    Project.find (query).exec (function (err, project) {
        if (err) {
            return res.status(400).send ({
                message: 'query failed'
            });
        } else {
            res.jsonp(project);
        }
    })
};

/**
 * 更新项目
 */
exports.updateProject = function (req, res) {
    // console.log(req.body);
    let id = req.body._id;
    Project.find({_id: Object(id) }).exec( function (erro, project) {
        if (erro) {
            return res.status(400).send ({
                message: 'update failed'
            });
        } else {
            if (user.length === 0) {
                res.send('this user is not exit');
            } else {
                let newProject = project[0];
                newProject = _.extend(newProject, req.body);
                newProject.save(function(err) {
                    if (err) {
                        return res.status(400).send({
                            message: ''
                        });
                    } else {
                        res.send({message: 'update success'});
                    }
                });
            }
        }
    })
};


