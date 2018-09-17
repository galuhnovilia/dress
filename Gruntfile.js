module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      options: {
        style: 'compressed'
      },
      dist: {
        files: {
          'build/css/style.min.css': ['src/scss/style.scss'],
          'build/css/mobile.min.css': ['src/scss/mobile.scss']
        }
      }
    },
    uglify: {
      build: {
        files: {
          'build/js/app.min.js': ['src/js/*.js']
        }
      }
    },
    codekit: {
      files: {
        src: ['**/*.kit'],
        dest: 'build'
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['vendor/**'],
            dest: 'build/',
            filter: 'isFile'
          },
          {
            expand: true,
            cwd: 'src',
            src: ['img/**'],
            dest: 'build/',
            filter: 'isFile'
          },
        ],

      },
    },
    watch: {
      scss: {
        files: ['src/scss/*.scss'], 
        tasks: ['sass']
      },
      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      },
      codekit: {
        files: ['**/*.kit'],
        tasks: ['codekit']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
  require('load-grunt-tasks')(grunt);
}