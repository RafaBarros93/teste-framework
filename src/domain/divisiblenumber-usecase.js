module.exports = class DivisibleNumberUseCase {
  makeDivsibleNumber(number) {
    let arr = []
    for (let i = number; i > 0; i--) {
      if (number % i == 0) {
        console.log(i)
        arr.push(i)
      }
    }

    return arr
  }
}
