'use strict';

/**
 * Module dependencies.
 * secure相当于production，区别在于secure模式使用https协议
 */
//server configuration
process.env.APP_NAME = 'project_manager_nodejs_app';
process.env.NODE_ENV = 'production';
process.env.PORT = 3006;
process.env.SSL = true;

//mongodb configuration
process.env.DB_1_PORT_27017_TCP_ADDR = 'mongodb_1:27017';
process.env.MONGO_DATABASE = 'project_manager';
process.env.MONGO_USER = '';
process.env.MONGO_PASSWORD = '';

//common library project path
process.env.COMMON_LIBRARY_PROJECT_PATH = '/../ux168_composite_lib';

//log configuration
process.env.LOG_FILE = 'logs/localhost_access_log.txt';
