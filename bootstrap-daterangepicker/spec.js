define(function(require) {
    var $ = require("$");
    var module = require('./dist/daterangepicker-debug');
    var expect = require('expect');
    describe('bootstrap-daterangepicker', function() {
        it('should has function', function() {
            expect($.fn.daterangepicker).to.be.a('function');
        });
    });
});
