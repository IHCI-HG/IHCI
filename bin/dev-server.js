const project = require('../config/project.config')
const app = require('../server/main')
const debug = require('debug')('app:bin:dev-server')
const https = require('https')
const fs = require('fs')

const hskey = fs.readFileSync('./ssl/ihci-key.pem');
const hscert = fs.readFileSync('./ssl/ihci-cert.pem');


const credentials = {key: hskey, cert: hscert};
const httpsServer = https.createServer(credentials, app);

app.listen(project.server_port)
httpsServer.listen(project.https_port,()=>{
    debug(`Http server is now running at http://localhost:${project.https_port}.`)
})
debug(`Server is now running at http://localhost:${project.server_port}.`)

