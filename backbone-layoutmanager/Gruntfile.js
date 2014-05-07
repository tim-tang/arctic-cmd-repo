module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,

        download: {
            options: {
                dest: 'src',
            },
            src: {
                options: {
                    header: 'define(function(require, exports, module) {',
                    footer: '});'
                },
                url: 'https://raw.githubusercontent.com/tbranyen/backbone.layoutmanager/<%= pkg.version %>/backbone.layoutmanager.js',
                name: 'backbone.layoutmanager.js'
            }
        }
    });

    grunt.loadGlobalTasks('spm-build');
    grunt.util._.merge(grunt.config.data, require('spm-build').config);

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download', 'spm-build']);
};
