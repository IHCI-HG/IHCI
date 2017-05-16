/**
 * Created by root on 17-1-6.
 */
var nodemailer = require('nodemailer');

//配置邮件
var transporter = nodemailer.createTransport('SMTP',{
    host: "smtp.163.com",
    secureConnection: true,
    port: 465,
    auth: {
        user: '18819466397@163.com',
        pass: 'aferica001',
    }
});
//发送邮件
exports.sendmail = function(req, res){
    var username = req.query.username;
    var email = req.query.email;
    var option = {
        from:"18819466397@163.com",
        to: email
    }
    option.subject = username + '欢迎使用XXX，请点击网址验证'
    option.html = '很高兴你可以加入我们，<br>';
    option.html += '请点击下面网址验证：<br>';
    option.html += '<a href="http://www.baidu.com?username=' + username + '" target="_blank">www.baidu.com</a><br>';
    transporter.sendMail(option, function(error, response){
        if(error){
            console.log("fail: " + error);
        }else{
            console.log("success: " + response.message);
            res.send('send email success');
        }
    });
}
//调用发送邮件
// sendmail("邮件内容：<br/>这是来自nodemailer发送的邮件！iVan");