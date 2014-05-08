module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,

        download: {
            options: {
                dest: 'src',
            },
            js: {
                options: {
                    transform: function(code) {
                        return [
                            'define(function(require, exports, module) {',
                            "var jQuery = require('$');",
                            code.replace(/window\.jQuery/g, "jQuery"),
                            "});"
                        ].join('\n');
                    }
                },
                //note: can not be found by version.
                url: 'https://raw.githubusercontent.com/jasny/bootstrap/master/dist/js/jasny-bootstrap.js',
                name: 'jasny-bootstrap.js'
            },
            css: {
                url: 'https://raw.githubusercontent.com/jasny/bootstrap/master/dist/css/jasny-bootstrap.css',
                name: "jasny-bootstrap.css"
            },
        }
    });

    grunt.loadGlobalTasks('spm-build');
    grunt.util._.merge(grunt.config.data, require('spm-build').config);

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download', 'spm-build']);
};
