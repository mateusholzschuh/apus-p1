module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
          temp: ['dist/js/scripts.js'],
          all: 'dist/'
        },
        jshint: {
            dist: {
                src: ['js/**/*.js']
            }
        },
        concat: {
            dist: {
                src: ['js/**'],
                dest: 'dist/js/scripts.js'
            }
        },
        uglify: {
            options:{
                //fix error '$injector:modulerr'
                mangle: false
            },
            scripts: {
                src: ['dist/js/scripts.js'],
                dest: 'dist/js/scripts.min.js'
            }
        },
        cssmin: {
           styles: {
               src: ['css/**.css'],
               dest: 'dist/css/styles.min.css'
           } 
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            views: {
                expand: true,
                cwd: 'view/',
                src: ['**/*.html', '*.html'],
                dest: 'dist/view'
            }
        },
        copy: {
            libs: {
                files: [
                    //Libs js
                    {
                        expand:true,
                        flatten:true,
                        src: [
                            'lib/angular/angular.min.js',  
                            'lib/angular/angular-route.min.js',
                            'lib/angular/angular-locale_pt-br.js',
                            'lib/jquery/jquery-3.3.1.min.js',
                            'lib/bootstrap/js/bootstrap.min.js',
                            'lib/bootbox/bootbox.min.js',
                            'lib/ui-bootstrap/ui-bootstrap-tpls-2.5.0.min.js'
                        ],
                        dest: 'dist/js/',
                        filter: 'isFile'
                    },

                    //Libs css
                    {
                        expand:true,
                        flatten:true,
                        src: [
                            'lib/bootstrap/css/bootstrap.min.css',
                            'lib/font-awesome/css/font-awesome.min.css'
                        ],
                        dest: 'dist/css/',
                        filter: 'isFile'
                    },

                    //Lib font (css)
                    {
                        expand:true,
                        flatten:true,
                        src: [
                            'lib/font-awesome/fonts/*'
                        ],
                        dest: 'dist/fonts/',
                        filter: 'isFile'
                    }
                ]
            },
        
            idist: {
                src: 'index-dist.html',
                dest: 'dist/index.html'
            }
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean:all', 'jshint', 'concat:dist', 'uglify', 'cssmin', 'htmlmin', 'copy', 'clean:temp']);

};