define(function(require) {
    var module = require('./dist/parsley-debug');
    var expect = require('expect');
    var jQuery = require('$');
    describe('parsley', function() {
        it('should has function', function() {
            expect(module.validate).to.be.a('function');
        });
    });
});
