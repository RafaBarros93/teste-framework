const HttpResponse = require('../helpers/http-reponse')

module.exports = class DivisibleNumberRouter {
  constructor({authUseCase} = {}) {
    this.authUseCase = authUseCase
  }

  route(httpRequest) {
    if (!httpRequest || !httpRequest.body) return HttpResponse.internalServerError()

    let {number} = httpRequest.body

    if (!number) return HttpResponse.badRequest('number')
    else return HttpResponse.ok([])
  }
}
