const {MissingParamError, ServerError} = require('../errors')

module.exports = class HttpResponse {
  static badRequest(paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static ok(body) {
    return {
      statusCode: 200,
      body
    }
  }

  static internalServerError() {
    return {
      statusCode: 500,
      body: {error: new ServerError().message}
    }
  }
}
