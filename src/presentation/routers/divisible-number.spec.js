const DivisibleNumberRouter = require('./divisible-number')
const MissingParamError = require('../erros/missing-param-error')

describe('Divisible number', () => {
  test('Should return 200 if number is provided', () => {
    const sut = new DivisibleNumberRouter()

    const httpRequest = {
      body: {
        number: 45
      }
    }
    const {statusCode} = sut.route(httpRequest)

    expect(statusCode).toBe(200)
  })

  test('Should return 400 if no number is provided', () => {
    const sut = new DivisibleNumberRouter()

    const httpRequest = {
      body: {}
    }
    const {statusCode, body} = sut.route(httpRequest)

    expect(statusCode).toBe(400)
    expect(body).toEqual(new MissingParamError('number'))
  })
  test('Should return 500 if  httpRequest is not provided', () => {
    const sut = new DivisibleNumberRouter()

    const {statusCode} = sut.route()

    expect(statusCode).toBe(500)
  })
  test('Should return 500 if body is not provided', () => {
    const sut = new DivisibleNumberRouter()

    const httpRequest = {}

    const {statusCode} = sut.route(httpRequest)

    expect(statusCode).toBe(500)
  })
})
