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
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-middleware-proxy');

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    src: ['src/**/*.{png,jpg,gif}'],
                    // dest: 'build/images',
                    dest: '../../resources/static/images'
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
        // dest: '../../resources/static/templates-app.js'
      }
    },


    less: {
      all: {
        src: 'style.less',
        dest: 'build/style.css',
        // dest: '../../resources/static/style.css',
        options: {
          report: 'gzip'
        }
      }
    },

      connect: {
        server: {
          options: {
            port: 9000,
            hostname: 'localhost',
            base: 'build/',
            // base: '../../resources/static/',
            middleware: function (connect, options, middlewares) {
              /*Requires the Middleware snipped from the Library
               and add it before the other Middlewares.*/
              middlewares.unshift(require('grunt-middleware-proxy/lib/Utils').getProxyMiddleware());
              return middlewares;
            }
          },
          proxies: [{
            context: '/api', //REQUIRED! Must start with a '/' should not end with a '/'
            host: '192.168.0.222', //REQUIRED! Should not contain 'http://' or 'https://'
            port: 8090, //Optional, defaults to 80 if http or 443 if https
            https: false,//Optional, defaults to false
            rewriteHost: true,//Optional, defaults to true
            auth: 'user@gmail.com:user', //Optional, adds the Authorization header
            headers: {//Optional.
              'header':'value'
            }
          }]
        }
      },
    //   connect: {
    //   serve: {
    //     options: {
    //       port: 8080,
    //       base: 'build/',
    //       hostname: 'localhost',
    //       debug: true
    //     }
    //   }
    // },
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
        files: ['{png,jpg,gif}'],
        tasks: ['imagemin:dynamic'],
          options: {
              spawn: false
          }
      },
      fonts: {
         files: ['{eot,svg,ttf,woff,woff2,otf}'],
         tasks: ['copy:fonts']
        }
        // data: {
        //     files: ['*.json'],
        //     tasks: ['copy:data']
        // }

    },
    concat_sourcemap: {
      options: {
        sourcesContent: true
      },
      app: {
        src: ['src/**/*.js', 'src/*.js'],
        dest: 'build/app.js'
        // dest: '../../resources/static/app.js'
      },
      libs: {
        src: [
          'node_modules/angular/angular.js',
          'node_modules/angular-animate/angular-animate.js',
          'node_modules/ngmap/build/scripts/ng-map.js',
          'node_modules/angular-mocks/angular-mocks.js',
          'node_modules/angular-ui-router/release/angular-ui-router.js',
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/bootstrap-select/dist/js/bootstrap-select.min.js',
          'node_modules/angular-material-icons/angular-material-icons.min.js',
          'node_modules/angular-carousel/dist/angular-carousel.min.js',
          'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
          'node_modules/bootstrap/dist/js/bootstrap.min.js',
          'node_modules/textangular/dist/textAngular-rangy.min.js',
          'node_modules/perfect-scrollbar/min/perfect-scrollbar.min.js',
          'node_modules/textangular/dist/textAngular-sanitize.min.js',
          'node_modules/textangular/dist/textAngular.min.js',
          'node_modules/moment/min/moment.min.js',
          'node_modules/angular-moment/angular-moment.js',
          'node_modules/angular-ui-calendar/src/calendar.js',
          'node_modules/angular-cookies/angular-cookies.min.js',
          'node_modules/fullcalendar/dist/fullcalendar.min.js',
          'node_modules/textangular/dist/textAngular.min.js',
          'node_modules/angular-translate/dist/angular-translate.min.js',
          'src/welcome/geometryangle.js',
          'node_modules/jquery-circle-progress/dist/circle-progress.min.js',
          'node_modules/jquery.inputmask/dist/inputmask/inputmask.js',
          'node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
          'node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
          'node_modules/angular-touch/angular-touch.min.js'



        ],
        dest: 'build/libs.js'
        // dest: '../../resources/static/libs.js'
      }
    },
    copy: {
      index: {
        src: 'index.html',
        dest: 'build/',
        // dest: '../../resources/static/',
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

      },
        fonts: {
            files: [{
                expand: true,
                cwd: 'src/fonts',
                src: ['*.{eot,svg,ttf,woff,woff2,otf}'],
                dest: 'build/fonts/'
                // dest: '../../resources/static/fonts/'
            }]
        }
        // data: {
        //         src: 'src/post/posts.json',
        //         dest: 'build/data/'
        //
        // }

    },

    clean: {
      all: {
        src: ['build/']
        // src: ['../../resources/static']
      }
    }

  });


  grunt.registerTask('build', ['clean', 'html2js', 'less', 'concat_sourcemap:app', 'concat_sourcemap:libs', 'copy']);
  grunt.registerTask('default', ['concat_sourcemap:libs', 'connect', 'watch','imagemin', 'copy:index','copy:fonts']);
  grunt.registerTask('server', ['setupProxies:server', 'connect:server', 'watch']);

};
