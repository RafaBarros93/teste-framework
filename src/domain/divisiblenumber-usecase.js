module.exports = class DivisibleNumberUseCase {
  isPrime(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false
      }

    let prime = num >= 1

    return prime
  }

  makeDivsibleNumber(number) {
    let arr = []
    for (let i = number; i > 0; i--) {
      if (number % i === 0) {
        arr.push({divisores: i})
        if (this.isPrime(i)) {
          arr.push({primos: i})
        }
      }
    }
    arr.sort((a, b) => (a.divisores > b.divisores ? 1 : b.divisores > a.divisores ? -1 : 0))

    return arr
  }
}
