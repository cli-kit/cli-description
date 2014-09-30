var expect = require('chai').expect
  , Description = require('../..');

var str = 'An *italic* string';
var expected = 'An italic string';

describe('cli-description:', function() {

  it('should throw error on invalid value', function(done) {
    var str = null;
    function fn() {
      var desc = new Description(str);
    }
    expect(fn).throws(Error);
    done();
  });

  it('should create description (string)', function(done) {
    var desc = new Description(str);
    expect(desc.md).to.eql(str);
    expect(desc.txt).to.eql(expected);
    expect(desc.toString()).to.eql(expected);
    done();
  });

  it('should create description (object)', function(done) {
    var desc = new Description({md: str, txt: expected});
    expect(desc.md).to.eql(str);
    expect(desc.txt).to.eql(expected);
    expect(desc.toString()).to.eql(expected);
    done();
  });


  it('should return existing description', function(done) {
    var desc = new Description(str);
    var dup = Description.toDescription(desc);
    expect(dup).to.equal(desc);
    done();
  });

  it('should convert description', function(done) {
    var desc = Description.toDescription(str);
    expect(desc.md).to.eql(str);
    expect(desc.txt).to.eql(expected);
    expect(desc.toString()).to.eql(expected);
    done();
  });
})
