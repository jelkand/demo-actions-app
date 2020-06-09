const request = require('supertest');
const { app, server } = require('./index');

describe('the server', () => {
  afterAll(() => {
    server.close();
  });
  test('should return the right string on the root', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello World!');
  });
  test('should return a valid npc', async () => {
    const res = await request(app).get('/npcs');
    expect(res.status).toBe(200);
  });
});
