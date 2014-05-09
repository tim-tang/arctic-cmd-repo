define(function(require) {
    var module = require('./dist/bootstrap-jasny-debug');
    var expect = require('expect');
    describe('bootstrap-jasny', function() {
        it('should has function', function() {
            expect(window.jQuery.fn.fileinput).to.be.a('function');
        });
    });
});
