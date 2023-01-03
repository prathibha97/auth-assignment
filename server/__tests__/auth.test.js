
const request = require('supertest');
const mongoose = require('mongoose')
const app = require('../app');

beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/userDb')
});

test('register a new user', async () => {
  const response = await request(app)
    .post('/api/auth/register/')
    .send({
      fullName: 'test user',
      username: 'test',
      password: 'password',
      email: 'test@test.com',
    });

  expect(response.statusCode).toBe(200);
});

test('login with correct credentials', async () => {
  const response = await request(app)
    .post('/api/auth/login')
    .send({ email: 'john@example.com', password: '123456' });

  expect(response.statusCode).toBe(200);
});

test('login with incorrect password', async () => {
  const response = await request(app)
    .post('/api/auth/login')
    .send({ email: 'test@example.com', password: 'wrongpassword' });

  expect(response.statusCode).toBe(401);
});


afterAll(async () => {
  await mongoose.disconnect();
});
