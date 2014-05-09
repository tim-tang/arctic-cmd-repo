define(function(require) {
    var module = require('./dist/bootstrap.touchspin-debug');
    var expect = require('expect');
    describe('bootstrap-touchspin', function() {
        it('should has function', function() {
            expect(window.jQuery.fn.TouchSpin).to.be.a('function');
        });
    });
});
