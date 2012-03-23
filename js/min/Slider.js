var Slider;

Slider = (function() {

  function Slider(id) {
    var _this = this;
    this.id = id;
    if (!id) return false;
    this.index = 0;
    this.slider = $(this.id);
    this.length = this.slider.children().length;
    this.width = $(this.id).outerWidth();
    this.totalWidth = this.length * this.width;
    $(id).addClass('slideWrapper').wrap('<div class="slideViewport">').after('<a href="#" class="prev">Previous</a><a href="#" class="next">Next</a>').css({
      'width': this.totalWidth
    }).children().addClass('slide').css({
      'width': this.width
    });
    $('.slideViewport a.next').click(function(e) {
      e.preventDefault();
      return _this.next();
    });
    $('.slideViewport a.prev').click(function(e) {
      e.preventDefault();
      return _this.prev();
    });
  }

  Slider.prototype.next = function() {
    var margin;
    this.index++;
    if (this.index >= this.length) {
      this.index = 0;
      margin = 0;
    }
    margin = this.index * this.width;
    return this.slider.animate({
      'marginLeft': -margin
    });
  };

  Slider.prototype.prev = function() {
    var margin;
    this.index--;
    if (this.index < 0) this.index = this.length - 1;
    margin = this.index * this.width;
    return this.slider.animate({
      'marginLeft': -margin
    });
  };

  return Slider;

})();
