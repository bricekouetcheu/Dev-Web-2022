


const request = require("supertest");
// we also need our app for the correct routes!
const app = require('../app');


test("It adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });


  describe("GET books / ", () => {
    test("It should respond with an array of books", async () => {
      const response = await request(app).get("/api/books/:title");
     /* expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);*/
      expect(response.status).toBe(200);
    });
  });


  
  describe("GET one sigle book / ", () => {
    test("It should respond with an array of books", async () => {
      const id = '71nDBQAAQBAJ';
      const response = await request(app).get('/api/books/single/'+id);
      expect(response.status).toBe(200);
    });
  });


  describe('Post Endpoints', () => {
    it('should not create a new comment', async () => {
      const res = await request(app)
        .get('/api/books/single/cdsedsd/comments')
      expect(res.status).toEqual(200)
      expect(res.body.length).toBeGreaterThan(0)
    })
  })




  describe("GET users / ", () => {
    test("It should respond with an array of users", async () => {
      const response = await request(app).get("/api/users");
     expect(response.body.length).toBeGreaterThan(0);
      expect(response.status).toBe(200);
    });
  });


  describe('Post Endpoints', () => {
    it('should create a new comment', async () => {
      const res = await request(app)
        .post('/api/books/single/cdsedsd/comment')
        .send({
          description: 'super livre',
          authors: 'brice',
        })
      expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('message')
    })
  })


  describe('Post Endpoints', () => {
    it('should not create a new comment', async () => {
      jest.setTimeout(30000);
      const res = await request(app)
        .post('/api/books/single/cdsedsd/comment')
        .send({
          
          authors: 'brice',
        })
      expect(res.status).toEqual(500)
      expect(res.body.message).toHaveProperty('pas de post')
    })
  })





