/**
 * Created by aferica on 17-4-26.
 */

// exports.index = function(req, res){
//   res.send('index');
// };


module.exports = function(app) {
  app.get('/resumes/getUserDataById', function (req, res) {
    // UserData.getUserDataInformationById(req, res);
    res.send('yes , i did');
  });
};
