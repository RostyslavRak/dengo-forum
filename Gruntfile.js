module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-sourcemap');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');



    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    src: ['libs/**/*.{png,jpg,gif}','src/**/*.{png,jpg,gif}'],
                    dest: 'build/images'
                }]
            }
        },

    html2js: {
      /**
       * These are the templates from `src/app`.
       */
      app: {
        options: {
          base: 'src'
        },
        src: ['src/**/*.tpl.html'],
        dest: 'build/templates-app.js'
      }
    },


    less: {
      all: {
        src: 'style.less',
        dest: 'build/style.css',
        options: {
          report: 'gzip'
        }
      }
    },

    connect: {
      serve: {
        options: {
          port: 8080,
          base: 'build/',
          hostname: '*',
          debug: true
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      templates: {
        files: ['src/**/*.tpl.html'],
        tasks: ['html2js']
      },
      less: {
        files: ['style.less', 'src/**/*.less'],
        tasks: ['less']
      },
      sources: {
        files: ['src/**/*.js', 'src/*.js'],
        tasks: ['concat_sourcemap:app']
      },
      index: {
        files: 'index.html',
        tasks: ['copy:index']
      },
      images: {
        files: ['**/*.{png,jpg,gif}'],
        tasks: ['imagemin:dynamic'],
          options: {
              spawn: false,
          }
      }

    },
    concat_sourcemap: {
      options: {
        sourcesContent: true
      },
      app: {
        src: ['src/**/*.js', 'src/*.js'],
        dest: 'build/app.js'
      },
      libs: {
        src: [
          'libs/angular/angular.js',
          'libs/angular-animate/angular-animate.js',
          'libs/angular-mocks/angular-mocks.js',
          'libs/angular-ui-router/release/angular-ui-router.js',
          'libs/jquery/dist/jquery.min.js',
          'libs/jstree/dist/jstree.min.js',
          'libs/angular-material-icons/angular-material-icons.min.js',
          'libs/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
            'node_modules/textangular/dist/textAngular-rangy.min.js',
            'node_modules/textangular/dist/textAngular-sanitize.min.js',
            'node_modules/textangular/dist/textAngular.min.js'
        ],
        dest: 'build/libs.js'
      }
    },
    copy: {
      index: {
        src: 'index.html',
        dest: 'build/'
        // options: {
        //   processContent: function (content, srcpath) {
        //     // Compiling index.html file!
        //     var packageVersion = require('./package.json').version;
        //     return grunt.template.process(content, {
        //       data: {
        //         version: packageVersion
        //       }
        //     });
        //   }
        // }
      }
    },

    clean: {
      all: {
        src: ['build/']
      }
    }

  });


  grunt.registerTask('build', ['clean', 'html2js', 'less', 'concat_sourcemap:app', 'concat_sourcemap:libs', 'copy']);
  grunt.registerTask('default', ['clean', 'concat_sourcemap:libs', 'connect', 'watch','imagemin', 'copy:index']);

};
