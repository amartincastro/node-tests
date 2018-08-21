const request = require('supertest');

var app = require('./server.js').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect('Hello world!')
    .end(done);
});
