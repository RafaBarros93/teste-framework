const isPrime = require('../domain/helpers/is-prime')

module.exports = class DivisibleNumberUseCase {
  makeDivsibleNumber(number) {
    let arr = []
    for (let i = number; i > 0; i--) {
      if (number % i === 0) {
        arr.push({divisores: i})
        if (isPrime(i)) {
          arr.push({primos: i})
        }
      }
    }
    arr.sort((a, b) => (a.divisores > b.divisores ? 1 : b.divisores > a.divisores ? -1 : 0))

    return arr
  }
}
