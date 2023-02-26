const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const homepage = supertest(app)

test('homepage route should be sucessful with response 200', async () => {
  await homepage
    .get('/')
    .expect(200)
    // .expect('Content-Type', /application\/json/)
})


test('dashboard route should redirect with response 302', async () => {
  await homepage
    .get('/dashboard')
    .expect(302)
    // .expect('Content-Type', /application\/json/)
})


afterAll(async () => {
  await mongoose.connection.close()
})