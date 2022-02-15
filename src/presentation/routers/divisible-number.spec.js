const DivisibleNumberRouter = require('./divisible-number')

describe('Divisible number', () => {
  test('Should return 200 if number is provided', () => {
    const sut = new DivisibleNumberRouter()

    const httpRequest = {
      body: {
        number: 45
      }
    }
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statuCode).toBe(200)
  })

  test('Should return 400 if no number is provided', () => {
    const sut = new DivisibleNumberRouter()

    const httpRequest = {
      body: {}
    }
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statuCode).toBe(400)
  })
  test('Should return 400 if  httpRequest is not provided', () => {
    const sut = new DivisibleNumberRouter()

    const httpResponse = sut.route()

    expect(httpResponse.statuCode).toBe(500)
  })
})
