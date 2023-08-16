const { nanoid } = require('nanoid');
const request = require('supertest');
const app = require('../app'); 
const pool = require('../db');

describe('Users API', () => {
  beforeAll(async () => {
    await pool.getConnection();
  });

  afterAll(async () => {
    await pool.end();
  });

  it('should create a new user', async () => {
    const id = nanoid()
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'New User', email: 'john.doe@example.com', age: 30 });

    expect(response.status).toBe(201);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0].name).toBe('New User');
    expect(response.body[0].email).toBe('john.doe@example.com');
    expect(response.body[0].age).toBe(30);
  }, 10000);

  it('should get a user by ID', async () => {
    const userId = '159L7KStk-oWQMYXwgIyr';
    const response = await request(app).get(`/api/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });

  it('should update a user', async () => {
    const userId = 'qdggE76Jtbfd9eWJHrssH';
    const response = await request(app)
      .put(`/api/users/${userId}`)
      .send({ name: 'Updated Name', email: 'updated.email@example.com', age: 35 });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Updated Name');
    expect(response.body.email).toBe('updated.email@example.com');
    expect(response.body.age).toBe(35);
  });

  it('should delete a user', async () => {
   
    const userId = '5xRlP2w9CZFzuqdMpXpF7';
    const response = await request(app).delete(`/api/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Delete success');

  });
});