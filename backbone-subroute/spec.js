define(function(require) {
    var module = require('./dist/backbone-subroute');
    describe('backbone-subroute', function() {
        it('should has VERSION', function() {
            expect(module.VERSION).to.be.a('string');
        });
    });
});
