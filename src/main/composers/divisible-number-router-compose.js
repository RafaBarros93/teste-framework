const DivisibleNumberRouter = require('../../presentation/routers/divisible-number')
const DivisibleNumberUseCase = require('../../domain/divisiblenumber-usecase')

module.exports = class DivisibleNumberRouterComposer {
  static compose() {
    const divisibleNumberUseCase = new DivisibleNumberUseCase()

    return new DivisibleNumberRouter(divisibleNumberUseCase)
  }
}
