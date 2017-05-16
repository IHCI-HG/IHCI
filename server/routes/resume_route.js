/**
 * Created by aferica on 17-4-27.
 */

const Resume = require('../db_services/resumes/resumes_controllers');
const UserData = require('../db_services/user_data/user_data_controller');

module.exports = function (app) {

  /**
   * 对resume表的操作，包括：
   *
   */

  // 获取用户对应的user_data数据信息
  app.get ('/api/project/resumes/getUserDataById', function (req, res) {
    UserData.getUserDataInformationById(req, res);
  });

  // 更新用户对应的user_data数据信息
  app.post ('/api/project/resumes/createResume', function (req, res) {
    Resume.createResume(req, res);
  });

};

