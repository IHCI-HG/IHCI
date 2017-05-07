/**
 * Created by root on 17-1-4.
 */
var mongoose = require('mongoose')
var promise = require('bluebird')

// Build the connection string
var dbURI = 'mongodb://127.0.0.1:27017/project'

mongoose.Promise = promise
// Create the database connection
mongoose.connect(dbURI)

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI)
})

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err)
})

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected')
})

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})

exports.dbURI = dbURI
