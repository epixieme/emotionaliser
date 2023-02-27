const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const request = require('superagent');
const server = request.agent(app);

// const homepage = supertest(app)
const User = require('../models/user')
const api = supertest(app)
//...

describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    // const user = new User({ username: 'root', password: 'password' })

    // await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    // const usersAtStart = await helper.usersInDb()

    const newUser = {
      userName: 'mluukkai',
      email: 'test.user@tu.com',
      password: 'salainen',
      confirmPassword:'salainen',
    
    }

    await api
      .post('/signup')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    // const usersAtEnd = await helper.usersInDb()
    // expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    // const usernames = usersAtEnd.map(u => u.username)
    // expect(usernames).toContain(newUser.username)
  })
})