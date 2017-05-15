/**
 * Created by root on 17-4-26.
 */

const UserData = require('../db_services/user_data/user_data_controller');

module.exports = function(app) {


  /**
   * 对user_data表的操作，包括：
   *       getUserDataById： 根据Id获得用户数据user_data
   *       updataUserDataById: 根据Id修改用户数据
   */

  // 获取用户对应的user_data数据信息
  app.get ('/api/project/userData/getUserDataById', function (req, res) {
    UserData.getUserDataInformationById(req, res);
  });

  // 更新用户对应的user_data数据信息
  app.post ('/api/project/userData/updateUserDataById', function (req, res) {
    UserData.updateUserDataInformationById(req, res);
  });

};

