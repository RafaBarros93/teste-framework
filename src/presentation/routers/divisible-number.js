const HttpResponse = require('../helpers/http-reponse')

module.exports = class DivisibleNumberRouter {
  constructor(divisibleNumberUseCas = {}) {
    this.divisibleNumberUseCase = divisibleNumberUseCas
  }

  route(httpRequest) {
    if (!httpRequest || !httpRequest.body) return HttpResponse.internalServerError()

    let {number} = httpRequest.body

    if (!number) return HttpResponse.badRequest('number')

    let arrayDivisibleNumbers = this.divisibleNumberUseCase.makeDivsibleNumber(number)

    return HttpResponse.ok(arrayDivisibleNumbers)
  }
}
