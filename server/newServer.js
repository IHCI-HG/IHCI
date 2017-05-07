const express = require('express')
const debug = require('debug')('app:server')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')
const compress = require('compression')
const bodyParser = require('body-parser')

const app = express()

// Apply gzip compression
app.use(compress())

// for parsing application/json
app.use(bodyParser.json({
    limit: '10mb',
}));

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10mb',
}));

// ------------------------------------
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
    app.use(require('webpack-hot-middleware')(compiler, {
        path: '/__webpack_hmr'
    }))
    app.use(express.static(project.paths.public()))
    app.use('*', function (req, res, next) {
        const filename = path.join(compiler.outputPath, 'index.html')
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return next(err)
            }
            res.set('content-type', 'text/html')
            res.send(result)
            res.end()
        })
    })
} else {
    app.use(express.static(project.paths.dist()))
}



module.exports = app
