const HttpResponse = require('../helpers/http-reponse')

module.exports = class DivisibleNumberRouter {
  constructor(divisibleNumberUseCas = {}) {
    this.divisibleNumberUseCase = divisibleNumberUseCas
  }

  route(httpRequest) {
    try {
      let {number} = httpRequest.body

      if (!httpRequest || !httpRequest.body) return HttpResponse.internalServerError()

      if (!number) return HttpResponse.badRequest('number')

      let arrayDivisibleNumbers = this.divisibleNumberUseCase.makeDivsibleNumber(number)

      return HttpResponse.ok(arrayDivisibleNumbers)
    } catch (error) {
      return HttpResponse.internalServerError()
    }
  }
}
