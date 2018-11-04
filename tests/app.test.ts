import request from 'supertest';
import app from '../src/app';

describe('App', () => {
  test('should respond as expected', async () => {
    const response = await request(app.callback()).get('/');
    expect(response.status).toBe(200);
    expect(response.body.data).toBe('Hello there stranger!');
  });
});
