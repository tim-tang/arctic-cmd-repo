define(function(require) {
    var module = require('./dist/jquery.multi-select-debug');
    var expect = require('expect');
    describe('jquery multi-select', function() {
        it('should has function', function() {
            expect(window.jQuery.fn.multiSelect).to.be.a('function');
        });
    });
});
