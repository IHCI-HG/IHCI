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
process.env.MONGO_DATABASE = 'project';
process.env.MONGO_USER = '';
process.env.MONGO_PASSWORD = '';

//log configuration
process.env.LOG_FILE = 'logs/localhost_access_log.txt';
