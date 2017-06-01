
const UserAndProject = require('../db_services/user_and_project/user_and_project_controllers');

module.exports = function(app) {


  app.post ('/api/project/userAndProject/createUserAndProject', function (req, res) {
    UserAndProject.create(req, res);
  });

  app.get ('/api/project/userAndProject/getUserAndProject', function (req, res) {
    UserAndProject.find(req, res);
  });

  app.post ('/api/project/userAndProject/updateUserAndProject', function (req, res) {
    UserAndProject.update(req, res);
  });

};