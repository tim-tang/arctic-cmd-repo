define(function(require) {
    require('./dist/datatables');
    var expect = require('expect');

    describe('datatables', function() {
        it('should has dataTable method', function() {
            expect($.fn.dataTable).to.be.a('function');
        });
    });

});
