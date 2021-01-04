'use strict';

const { server } = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(server);

jest.setTimeout(30000);


describe('web server', () => {

  beforeAll(done => {
    done()
  })
  
  afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
  })

  it('should respond with a 404 on an invalid route', async () => {
    const response = await mockRequest.put('/unicorns');
    expect(response.status).toBe(404);
  });

  // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/api/v1/food');
    expect(response.status).toBe(404);
  });

  it('POST /api/v1/clothes adds an item to the DB and returns an object with the added item', async () => {
    let clothesObject = {
      name:"shirt",
      color:"blue",
      size:"small"
  }
    const response = await mockRequest.post('/api/v1/clothes').send(clothesObject);
    expect(response.status).toBe(200);
  },30000);

});





// POST /api/v1/:model adds an item to the DB and returns an object with the added item
// GET /api/v1/:model returns a list of :model items
// GET /api/v1/:model/ID returns a single item by ID
// PUT /api/v1/:model/ID returns a single, updated item by ID
// DELETE /api/v1/:model/ID returns an empty object. Subsequent GET for the same ID should result in nothing found