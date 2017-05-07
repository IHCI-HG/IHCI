const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')
const bodyParser = require('body-parser')
const compress = require('compression')
const logger = require('morgan')
const kraken = require('kraken-js')
const mongoose = require('mongoose')
// session相关,将session存储到mongodb
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cookieParser = require('cookie-parser')
const dbURI = require('./config/db_connection').dbURI
mongoose.createConnection(dbURI) // 连接数据库
const app = express()


// app.disable('x-powered-by')
app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

const db = require('./config/db_connection')
const User = require('./db_services/user/user_controllers');
const Wechat = require('./db_services/user/wechat_check_controllers');
const UserData = require('./db_services/user_data/user_data_controller')
const SendEmail = require('./db_services/common_functions/sendEmail')
const Resume = require('./db_services/resumes/resumes_controllers');
const Users = mongoose.model('UserModel', require('./db_services/user/user_models').UserSchema)

// app.use(cookieParser('what do you want to do?'));
app.use(session({
    secret: 'what do you want to do?', // secret的值建议使用128个随机字符串
    cookie: { maxAge: 1000 * 60 * 20 }, // 过期时间
    resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection // 使用已有的数据库连接
    })
}))

/**
 * 判断是否已登录过了
 */
app.get('/api/project/signin', function (req, res) {
    console.log(req.session)
    if (req.session.sign) {
        console.log(req.session)
        res.send(req.session.username)
    } else {
        console.log(req.session)
        res.send('sign first')
    }
})

/**
 * 通过输入用户名和密码登录，并建立和保存session
 */
app.post('/api/project/signin', function (req, res) {

    let username = req.body.username
    let password = req.body.password
    let query = { username: username, password: password }

    Users.find(query).exec(function (err, user) {
        if (err) {
            return res.status(400).send({
                message: 'sign failed'
            })
        } else {
            if (user.length === 1) {
                req.session.sign = true
                req.session.username = req.body.username
                req.session.password = req.body.password

                res.send(user)

            } else {
                res.send('sign failed, name or password error')
            }
        }
    })
})

/**
 * 登出操作
 */
app.get('/api/project/signout', function (req, res) {
    if (req.session.sign) {
        req.session.sign = false
    }
    res.send('signout success')
})

app.get('/getVersion', function (req, res) {
    res.send('10')
})

/**
 * 对user表的操作，包括：
 *      createUser： 创建（用户注册）
 *      isNameExit:  判断用户名是否已存在
 *      getUser： 获得用户信息
 *      updateUser: 更新用户数据
 */

// 创建用户，即用户注册登录
app.post('/api/project/user/createUser', function (req, res) {
    User.create(req, res)
})



// 判断用户名是否可用
app.get('/api/project/user/isNameExit', function (req, res) {
    User.isNameExit(req, res)
})

// 获取用户信息
app.get('/api/project/user/getUser', function (req, res) {
    User.getUserInformation(req, res)
})

// 更新用户数据
app.post('/api/project/user/updateUser', function (req, res) {
    User.updateUser(req, res)
})

// 激活或是冻结帐号
app.get('/api/project/user/activateOrInvalidUser', function (req, res) {
    User.activateOrInvalidUser(req, res)
})

//  发送邮件
app.get('/api/project/sendEmail', function (req, res) {
    SendEmail.sendmail(req, res)
})

/**
 * 关于wechat 操作
 */
// 使用wechat登录
// 传入参数  code  微信扫码后得到的code
app.get('/api/project/user/wechat/Login', function (req, res) {
    Wechat.wechatLogin(req, res);
});

/**
 * 帐号与微信绑定
 * 传入参数  code  微信扫码后得到的code
 *          _id   帐号唯一标识符（mongodb数据id）
 */
app.get('/api/project/user/wechat/binding', function (req, res) {
    Wechat.wechatBinding(req, res);
});

// 帐号与微信绑定
// 传入参数  _id   帐号唯一标识符（mongodb数据id）
app.get('/api/project/user/wechat/unbinding', function (req, res) {
    Wechat.wechatUnbinding(req, res);
});

/**
 * 对user_data表的操作，包括：
 *       getUserDataById： 根据Id获得用户数据user_data
 *       updataUserDataById: 根据Id修改用户数据
 */

// 获取用户对应的user_data数据信息
app.get('/api/project/userData/getUserDataById', function (req, res) {
    UserData.getUserDataInformationById(req, res)
})

// 更新用户对应的user_data数据信息
app.post('/api/project/userData/updateUserDataById', function (req, res) {
    UserData.updateUserDataInformationById(req, res)
})


/**
 * 对resume表的操作
 * 1.createResume 创建简历
 * 2.updateResume 修改更新简历
 */
app.post('/api/project/resume/createResume', function (req, res) {
    Resume.createResume(req, res);
});

app.post('/api/project/resume/updateResume', function (req, res) {
    Resume.updateResume(req, res);
});

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement universal
// rendering, you'll want to remove this middleware.
app.use(require('connect-history-api-fallback')())
// Apply gzip compression
app.use(compress())

// ---------------------------------r---
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
    const compiler = webpack(webpackConfig)
    debug('Enabling webpack dev and HMR middleware')
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase: project.paths.client(),
        hot: true,
        quiet: project.compiler_quiet,
        noInfo: project.compiler_quiet,
        lazy: false,
        stats: project.compiler_stats
    }))
    app.use(require('webpack-hot-middleware')(compiler))
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
    )
    // Serving ~/dist by default. Ideally these files should be served by
    // the web server and not the app server, but this helps to demo the
    // server in production.
    app.use(express.static(project.paths.dist()))
}

module.exports = app

