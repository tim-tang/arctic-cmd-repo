define(function(require) {
    var Parsley = require('./dist/parsley');
    var expect = require('expect');
    var jquery = require('$');
    describe('parsley', function() {
        it('should has function', function() {
            expect($.fn.validate).to.be.a('function');
        });
    });
});
