define(function(require) {
    var module = require('./dist/backbone.subroute');
    var expect = require('expect');
    describe('backbone.subroute', function() {
        it('constructor should function', function() {
            expect(module.constructor).to.be.a('function');
        });
    });
});
