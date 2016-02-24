function Rectangle(x, y, width, height) {

if (!(this instanceof Rectangle)) {
  throw new Error('You cannot call this function without the "new" property')
}

this.x = x;
this.y = y;
this.width = width;
this.height = height;

}


module.exports = Rectangle
