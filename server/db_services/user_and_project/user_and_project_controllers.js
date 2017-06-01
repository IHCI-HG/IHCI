let path = require('path');
let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');

let UserAndProjectSchema = require('./user_and_project_models').UserAndProjectSchema
UserAndProjectSchema.plugin(mongoosePaginate);
let UserAndProject = mongoose.model('UserAndProjectSchema', UserAndProjectSchema);

exports.create = function (req, res) {
    let userAndProject = new UserAndProject(req.body);
    userAndProject.save (function (err, userAndProject) {
        if (err) {
            return res.status(400).send ({
                message: 'create failed'
            });
        } else {
            res.jsonp(userAndProject);
        }
    }) 
}

exports.update = function (req, res) {
    let username = req.body.username
    let projectId = req.body.projectId
    UserAndProject.find({username: username, projectId: projectId}).exec(function (err, userAndProject) {
         if (err) {
            return res.status(400).send ({
                message: 'find failed'
            });
        } else {
            let newUserAndProject = new UserAndProject(userAndProject[0]);
            newUserAndProject.status = req.body.status
            newUserAndProject.save (function (err, userAndProject) {
                if (err) {
                    return res.status(400).send ({
                        message: 'update status failed'
                    });
                } else {
                    res.jsonp({
                        message: 'update status success'
                    });
                }
            }) 
        }
    })
}

exports.find = function (req, res) {
    UserAndProject.find(req.query).exec(function (err, userAndProject) {
         if (err) {
            return res.status(400).send ({
                message: 'find failed'
            });
        } else {
            res.jsonp(userAndProject);
        }
    })
}
