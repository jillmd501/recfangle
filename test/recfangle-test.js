const assert = require('assert');
const Rectangle = require('../')

describe('Rectangle', function(){

  it('should be a function', function() {
    assert.equal(typeof Rectangle, 'function');
  });

  it('should take four arguments', function() {
    assert.equal(Rectangle.length, 4);
  });

  it('should instantiate an instance', function() {
    var rect = new Rectangle(0, 0, 10, 10);
    assert.equal(typeof rect, Object);
  });

  it('should throw an error if "new" is omitted', function () {
    assert.throw(function() {
      Rectangle();
    }, 'You cannot call this function without the "new" keyword')
  });

  describe('instance', function() {
    beforeEach(function (){
      this.rect = new Rectangle(1,2,3,4);
    });
    it('should have an "x" property on the first argument', function(){
      assert(this.rect.x, 'Instance does not have an "x" property');
      assert.equal(this.rect.x, 1)
    });
  });

  describe('#perimeter', function() {
    it('should return the perimeter of the rectangle', function(){
      var rect = new Rectangle(0, 0, 10, 10);
      assert.equal(rect.perimeter, 40);
    })
  })

  describe('#area', function() {
    it('should return the area of the rectangle', function() {
      var rect = new Rectangle(0, 0, 10, 10);assert.equal(rect.area, 100)
    })
  })

});
