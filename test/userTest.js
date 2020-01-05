process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
 
chai.use(chaiHttp);

function makeRandomUsername(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


describe('USER TEST REQUESTS',()=>
{
    describe('/POST Register User',()=>{
        it('Ok REGISTER',(done)=>
        {
            let user = {
                "firstName":"Mike",
                "lastName":'Bold',
                "username":makeRandomUsername(5),
                "password":"1234"
            }
            chai.request(server)
            .post('/api/user/register')
            .send(user)
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
        })
        it('Fail REGISTER on bad username entry ', (done) => {
            let user = {
              "firstName": undefined,
              "lastName": "",
            }
            chai.request(server)
              .post('/api/user/register')
              .send(user)
              .end((err, res) => {
                res.should.have.status(400);
                done();
              });
          });
    });
    
    describe('/POST Login User', () => {
        it('Ok LOGIN', (done) => {
          let user = {
            "username": "gigipedala",
            "password": "123"
          }
          chai.request(server)
            .post('/api/user/login')
            .send(user)
            .end((err, res) => {
              res.should.have.status(200);
              done();
            });
        })
        it('Fail LOGIN on bad username entry', (done) => {
            let user = {
              "email": "undefined",
              "password": "",
            }
            chai.request(server)
              .post('/api/user/login')
              .send(user)
              .end((err, res) => {
                res.should.have.status(400);
                done();
              });
            })
    })
})