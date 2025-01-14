const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../server'); 
const Experience = require('../models/Experience');
const mongoose = require('mongoose');

const { expect } = chai;

const mockExperience = {
    title: 'New Experience',
    description: 'This is a new experience',
    location: 'New York',
    date: new Date().toISOString(),
    imageUrl: 'http://example.com/image.jpg'
  };

// Mock Mongoose model
const sandbox = sinon.createSandbox();
beforeEach(() => {
  sandbox.stub(Experience, 'find');
  sandbox.stub(Experience, 'findById');
  sandbox.stub(Experience.prototype, 'save');
});
afterEach(() => {
  sandbox.restore();
});

describe('GET /experiences', () => {
  it('should return all experiences', (done) => {
    const experiences = [{...mockExperience, title: 'Experience 1' }, {...mockExperience,  title: 'Experience 2' }];
    Experience.find.resolves(experiences);

    request(app)
      .get('/experiences')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(experiences);
        done();
      });
  });
});

describe('GET /experiences/:id', () => {
  it('should return a single experience', (done) => {
    Experience.findById.resolves(mockExperience);

    request(app)
      .get('/experiences/1')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(mockExperience);
        done();
      });
  });

  it('should return 404 if experience not found', (done) => {
    Experience.findById.resolves(null);

    request(app)
      .get('/experiences/wrong-id')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.have.property('error', 'Experience not found');
        done();
      });
  });
});

describe('POST /experiences', () => {
    it('should create a new experience', (done) => {    
        request(app)
          .post('/experiences')
          .send(mockExperience)
          .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body.title).to.deep.equal(mockExperience.title);
            expect(res.body.description).to.deep.equal(mockExperience.description);
            expect(res.body.location).to.deep.equal(mockExperience.location);
            expect(res.body.date).to.deep.equal(mockExperience.date);
            expect(res.body.imageUrl).to.deep.equal(mockExperience.imageUrl);
            done();
          });
      });
});