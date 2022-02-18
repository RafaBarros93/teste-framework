module.exports = {
  isPrime(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false
      }

    let prime = num >= 1

    return prime
  }
}
