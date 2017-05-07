const project = require('../config/project.config')
const app = require('../server/main')
const debug = require('debug')('app:bin:dev-server')

project.env = 'production'
app.listen(project.server_port)

debug(`Server is now running at http://localhost:${project.server_port}.`)
