const HttpResponse = require('../erros/http-reponse')

module.exports = class DivisibleNumberRouter {
  route(httpRequest) {
    if (!httpRequest || !httpRequest.body) return HttpResponse.internalServerError()

    let {number} = httpRequest.body

    if (!number) return HttpResponse.badRequest('number')
    else return HttpResponse.ok()
  }
}
