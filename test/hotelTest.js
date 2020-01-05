process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
 
chai.use(chaiHttp);

describe('HOTEL TEST REQUESTS',()=>
{
    describe('/POST Register Hotel',()=>{
        it('Ok REGISTER',(done)=>
        {
            let hotel = {
                "name":"Spring Dream Motel",
                "img":'https://pix6.agoda.net/hotelImages/5068840/-1/7836ebca77dca47925c31ba85e0d6276.jpg',
                "phone":"0742143223",
                "city":"Craiova",
                "rating":4.5
            }
            chai.request(server)
            .post('/api/hotel/register')
            .send(hotel)
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
        })
    });
    
    describe('/POST recieve all hotels', () => {
        it('Ok RECEIEVE HOTELS', (done) => {
          chai.request(server)
            .post('/api/hotel/getAllHotels')
            .end((err, res) => {
              res.should.have.status(200);
              done();
            });
        })
    })

    describe('/POST get city hotels',()=>{
        it('Ok CITY HOTELS', (done) => {
            let location = {
                "city":"Deva"
            }
            chai.request(server)
              .post('/api/hotel/getCityHotels')
              .send(location)
              .end((err, res) => {
                res.should.have.status(200);
                done();
              });
          })
    })
})