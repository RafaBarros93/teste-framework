const request = require('supertest')
const app = require('../config/app')
describe('Divisible Number Routes', () => {
  test('Should return 200 when valid credentials are provided', async () => {
    await request(app)
      .get('/api/check')
      .expect(200)
      .then((response) => {
        expect(response.body.api).toEqual('Api test framework')
      })
  })
})
