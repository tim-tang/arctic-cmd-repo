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
                url: 'https://raw.githubusercontent.com/lou/multi-select/<%= pkg.version %>/js/jquery.multi-select.js',
                name: 'jquery.multi-select.js'
            },

            css: {
                url: 'https://raw.githubusercontent.com/lou/multi-select/<%= pkg.version %>/css/multi-select.css',
                name: 'multi-select.css'
            },

            img: {
                url: 'https://raw.githubusercontent.com/lou/multi-select/<%= pkg.version %>/img/switch.png',
                name: 'switch.png'
            },
        }
    });

    grunt.loadGlobalTasks('spm-build');
    grunt.util._.merge(grunt.config.data, require('spm-build').config);

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download', 'spm-build']);
};
