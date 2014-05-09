define(function(require) {
    var module = require('./dist/daterangepicker');
    var expect = require('expect');
    var $ = require('$');
    describe('bootstrap.daterangepicker', function() {
        it('should has function', function() {
            expect($.fn.daterangepicker).to.be.a('function');
        });
    });
});
