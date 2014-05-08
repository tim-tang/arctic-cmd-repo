module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,

        download: {
            options: {
                dest: 'src',
                transform: function(code) {
                    return [
                        'define(function(require, exports, module) {',
                        //'var previousUnderscore = this._;',
                        //"this._ = require('underscore');",
                        "this.Backbone= require('backbone');",
                        'var previousBackbone= this.Backbone;',
                        code,
                        //"this._ = previousUnderscore;",
                        "this.Backbone= previousBackbone;",
                        "module.exports = Backbone.SubRoute;",
                        "});"
                    ].join('\n');
                }
            },
            src: {
                url: 'https://raw.githubusercontent.com/ModelN/backbone.subroute/<%= pkg.version %>/backbone.subroute.js',
                name: 'backbone.subroute.js'
            }
        }
    });

    grunt.loadGlobalTasks('spm-build');
    grunt.util._.merge(grunt.config.data, require('spm-build').config);

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download', 'spm-build']);
};
