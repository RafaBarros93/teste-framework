const DivisibleNumberRouter = require('./divisible-number')

describe('Divisible number', () => {
  test('Should return 200 if  number is provided', () => {
    const sut = new DivisibleNumberRouter()

    const httpRequest = {
      body: {
        number: 45
      }
    }
    const httpResponse = sut.route(httpRequest)
    console.log('Http ress', httpResponse)

    expect(httpResponse.statuCode).toBe(200)
  })

  test('Should return 400 if no number is provided', () => {
    const sut = new DivisibleNumberRouter()

    const httpRequest = {
      body: {}
    }
    const httpResponse = sut.route(httpRequest)
    console.log('Http ressp teste 2', httpResponse)

    expect(httpResponse.statuCode).toBe(400)
  })
})
