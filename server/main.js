const express = require('express');
const debug = require('debug')('app:server');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');
const project = require('../config/project.config');
const bodyParser = require('body-parser');
const compress = require('compression');
const logger = require('morgan');
const kraken = require('kraken-js');
const mongoose = require('mongoose');
// session相关,将session存储到mongodb
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const dbURI = require('./config/db_connection').dbURI;
mongoose.createConnection(dbURI); //连接数据库

const routes = require('./routes');
const user = require('./routes/user_route');
const user_data = require('./routes/user_data_route');
const resume = require('./routes/resume_route');
const projects = require('./routes/project_route');

const app = express();
app.disable('x-powered-by');
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(cookieParser('what do you want to do?'));
app.use(session({

  secret: "what do you want to do?", //secret的值建议使用128个随机字符串
  cookie: {maxAge:  1000 * 60 * 20}, //过期时间
  // resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
  // saveUninitialized: false,
  store: new MongoStore({
    // mongooseConnection: mongoose.connection //使用已有的数据库连接
    url: dbURI
  })
}));


routes(app);
user(app);
user_data(app);
resume(app);
projects(app);

app.use(require('connect-history-api-fallback')());
// Apply gzip compression
app.use(compress());

// ---------------------------------r---
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig);
  debug('Enabling webpack dev and HMR middleware');
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : project.paths.client(),
    hot         : true,
    quiet       : project.compiler_quiet,
    noInfo      : project.compiler_quiet,
    lazy        : false,
    stats       : project.compiler_stats
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(project.paths.public()))
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  );
  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(project.paths.dist()))
}

module.exports = app;



