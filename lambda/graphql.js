require('source-map-support').install()

const awsLambdaFastify = require('aws-lambda-fastify')
const { app } = require('../build-server/app')

const proxy = awsLambdaFastify(app)

exports.handler = proxy
