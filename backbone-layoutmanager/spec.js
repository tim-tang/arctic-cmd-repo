define(function(require) {
    var module = require('./dist/backbone-layoutmanager');
    describe('backbone-layoutmanager', function() {
        it('should has VERSION', function() {
            expect(module.VERSION).to.be.a('string');
        });
    });
});
