'use strict';

/**
 * Module dependencies.
 */

//server configuration
process.env.APP_NAME = 'project_manager_nodejs_app';
process.env.NODE_ENV = 'production';
process.env.PORT = 60006;
process.env.SSL = false;

//mongodb configuration
process.env.DB_1_PORT_27017_TCP_ADDR = 'master.mongodb.projectmanager.ux168.cn:27017';
process.env.MONGO_DATABASE = 'project_manager';
process.env.MONGO_USER = 'project_manager_master';
process.env.MONGO_PASSWORD = 'project_manager_master123';

//common library project path
process.env.COMMON_LIBRARY_PROJECT_PATH = '/../ux168_composite_lib';

//app
process.env.SEQUENCE_APP_URL_MASTER = 'http://master.app.sequence.ux168.cn:8080/sequence_app';

// send email address
// process.env.SEND_EMAIL_APP_URL = 'mail.services.ux168.cn';
process.env.SEND_EMAIL_APP_URL = 'alivpc.mail.services.ux168.cn';

//log configuration
process.env.LOG_FILE = 'logs/localhost_access_log.txt';
