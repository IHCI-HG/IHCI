'use strict';

/**
 * Module dependencies.
 */

//server configuration
process.env.APP_NAME = 'project_nodejs_app';
process.env.NODE_ENV = 'development';
process.env.PORT = 3006;

//mongodb configuration
process.env.DB_1_PORT_27017_TCP_ADDR = 'mongodb_1:27017';
//process.env.DB_1_PORT_27017_TCP_ADDR = '172.16.10.62:27017';
//process.env.MONGO_DATABASE = 'project_manager-test';
process.env.MONGO_DATABASE = 'project';
process.env.MONGO_USER = '';
process.env.MONGO_PASSWORD = '';

// //common library project path
// process.env.COMMON_LIBRARY_PROJECT_PATH = '/../ux168_composite_lib';
//
// //app
// //process.env.SEQUENCE_APP_URL_MASTER = 'http://app.sequence.sandbox.ux168.cn:8080/sequence_app'
// process.env.SEQUENCE_APP_URL_MASTER = 'http://172.16.10.43:8080/sequence_app';
//
// // send email address
// process.env.SEND_EMAIL_APP_URL = 'mail.services.ux168.cn';

//log configuration
process.env.LOG_FILE = 'logs/localhost_access_log.txt';
