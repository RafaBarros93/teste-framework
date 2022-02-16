const DivisibleNumberRouter = require('./divisible-number')
const {ServerError, MissingParamError} = require('../errors')
const DivisibleNumberUseCase = require('../../domain/divisiblenumber-usecase')

describe('Divisible number', () => {
  test('Should return 200 if number is provided', () => {
    let divisibleNumberUseCase = new DivisibleNumberUseCase()

    const sut = new DivisibleNumberRouter(divisibleNumberUseCase)

    const httpRequest = {
      body: {
        number: 45
      }
    }
    const {statusCode, body} = sut.route(httpRequest)

    console.log('BodY::', body)

    expect(statusCode).toBe(200)
    expect(body[2].divisores).toEqual(9)
    expect(body[4].primos).toEqual(5)
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

    const {statusCode, body} = sut.route(httpRequest)

    expect(statusCode).toBe(500)
    expect(body.error).toBe(new ServerError().message)
  })
})
