const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello World', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200, 'Hello World', done);
  });
});