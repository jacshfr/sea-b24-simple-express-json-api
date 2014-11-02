var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

describe('Simple JSON API', function() {
  it('should send the local time', function() {
    chai.request('http://localhost:5500')
    .get('/time', function(err, res) {
      expect(res).to.have.property('time');
      var date = new Date();
      var localTime = date.toLocaleTimeString();
      expect(res.time).to.be(localTime);
    });

  });

  it('should greet someone', function() {
    chai.request('http:localhost:5500')
    .get('/hello', function(req, res) {
      expect(res).to.have.property('msg');
      expect(res.message).to.be('hello');
    });
  });
});
