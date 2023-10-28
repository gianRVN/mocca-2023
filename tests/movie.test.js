const app = require('../index')
const request = require('supertest')

describe('Test API Movie', () => {

    describe('GET Movie', () => {
        test('GET 200 All Movie', (done) => {
            request(app)
                .get('/movies') // --> endpoint yang mau ditest
                .expect('Content-Type', /json/) // --> mau expect datanya json
                .expect(200)
                .then(response => {
                    expect(response.body.message).toBe('success')
                    expect(response.body.data.length).toBe(2)
                    done()
                })
                .catch(done)
        });    
    })

    describe('UPDATE Movie', () => {
        test('UPDATE 201 Movie', (done) => {
            request(app)
                .put(`/movies/2`)
                .send({ title: 'Toy Story' })
                .expect(201)
                .then(response => {
                    expect(response.body.message).toBe('movie edited successfully')
                    done()
                })
                .catch(done)
        });

        test('UPDATE 201 Movie', (done) => {
            request(app)
                .put(`/movies`)
                .send({ titles: 'Toy Story' })
                .expect(404)
                .then(response => {
                    done()
                })
                .catch(done)
        });
    });

    describe('Undefined routes Movie', () => {
        test('UPDATE 201 Movie', (done) => {
            request(app)
                .get(`/film`)
                .expect(404)
                .then(() => {
                    done()
                })
                .catch(done)
        });
    });
  });