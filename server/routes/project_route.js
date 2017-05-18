/**
 * Created by aferica on 17-5-11.
 */

const Project = require('../db_services/projects/projects_controllers');

module.exports = function (app) {

    app.post('/api/project/project/create', function (req, res) {
        Project.createProject(req, res);
    });

    app.get('/api/project/project/queryProject', function (req, res) {
        Project.queryProject(req, res);
    });

    app.post('/api/project/project/updateProject', function (req, res) {
        Project.updateProject(req, res);
    });
}
