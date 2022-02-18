const HealthCheckRouter = require('../routers/health-check')

describe('Divisible number', () => {
  test('Should return 200 and result divisible numbers and prime numbers', () => {
    const sut = new HealthCheckRouter()

    const {
      statusCode,
      body: {api}
    } = sut.route()

    expect(statusCode).toBe(200)
    expect(api).toEqual('Api test framework')
  })
})
