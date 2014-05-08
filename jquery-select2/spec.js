define(function(require) {

  var $ = require("$");
  var expect = require('expect');
  var Select2 = require('./dist/select2');

  describe('select2', function() {
    it('should has select2 method', function() {
      expect($.fn.select2).to.be.a('function');
    });
  });

});
