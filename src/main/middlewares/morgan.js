const morgan = require('morgan')

const chalk = require('chalk')

module.exports = morgan(function (tokens, req, res) {
  return [chalk.green.bold(tokens.method(req, res)), chalk.yellowBright.bold(tokens.status(req, res)), chalk.white(tokens.url(req, res)), chalk.yellow(tokens['response-time'](req, res) + ' ms')].join(' ')
})
