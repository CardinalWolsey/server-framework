var expect = require('chai').expect;
var fs = require('fs');
var matches = require(__dirname + '/../lib/getMatches');
var dOpen = /<d:/g;
var source = fs.readFileSync('./server.js', 'utf8');

describe('the getMatches function', function() {
  it('should return an array of two items', function() {
    expect(matches.matches(0, 800, dOpen, source)).to.have.keys('0', '1');
  });
});
