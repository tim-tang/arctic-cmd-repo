define(function(require) {
    var module = require('./dist/daterangepicker');
    var expect = require('expect');
    describe('bootstrap.daterangepicker', function() {
        it('should has function', function() {
            expect(window.jQuery.fn.daterangepicker).to.be.a('function');
        });
    });
});
