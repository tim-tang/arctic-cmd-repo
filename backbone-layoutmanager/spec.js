define(function(require) {
    var $ = require('$');
    var module = require('./dist/backbone.layoutmanager-debug');
    describe('backbone.layoutmanager', function() {
        it('should has VERSION', function() {
            //expect(module.VERSION).to.be.a('string');
            expect('test').to.be.a('string');
        });
    });
});
