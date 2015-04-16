/**
 * Created by samuelmecham on 3/12/15.
 */

var request = require('supertest')
    , express = require('express');

var app = require("../app");

var users = require('../routes/users.js');

describe('GET /users', function(){
    it('respond with html', function(done){
        request(app)
            .get('/')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);
    })
});

describe('POST /users', function(){
    it('respond with particular JSON structure', function(done){
        request(app)
            .post('/post')
            .send({userName: "DJ Misurelli", email: "deeger_2@msn.com"})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({userName: "DJ Misurelli", email: "deeger_2@msn.com"})
            .expect(200, done);
    })
});
