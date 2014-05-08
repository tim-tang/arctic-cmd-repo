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
                            "var moment = require('moment');",
                            code.replace(/window\.jQuery/g, "jQuery"),
                            code.replace(/window\.moment/g, "moment"),
                            "});"
                        ].join('\n');
                    }
                },
                //note: can not be found by version.
                url: 'https://raw.githubusercontent.com/dangrossman/bootstrap-daterangepicker/master/daterangepicker.js',
                name: 'daterangepicker.js'
            },
            css: {
                //options: {
                //    transform: function(code) {
                //        return code.replace(/\.\.\/fonts\//g, './fonts/');
                //    }
                //},
                url: 'https://raw.githubusercontent.com/dangrossman/bootstrap-daterangepicker/master/daterangepicker-bs3.css',
                name: "daterangepicker-bs3.css"
            },
        }
    });

    grunt.loadGlobalTasks('spm-build');
    grunt.util._.merge(grunt.config.data, require('spm-build').config);

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download', 'spm-build']);
};
