const request = require('supertest')
const app = require('../config/app')

describe('Divisible Number Routes', () => {
  test('Should return 200 when valid credentials are provided', async () => {
    await request(app)
      .post('/api/divisible-number')
      .send({
        number: 45
      })
      .expect(200)
  })

  test('Should return 400 when send emppty object', async () => {
    await request(app).post('/api/divisible-number').send({}).expect(400)
  })

  test('Should return 400 when send null object', async () => {
    await request(app).post('/api/divisible-number').send({number: null}).expect(400)
  })
})
