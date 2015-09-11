module.exports = function (grunt) {

  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    path: {
      src: './src',
      env: './dev'
    },

    clean: {
      all: ['<%= path.env %>']
    },

    eslint: {
      target: ['./*.js']
    },

    assemble: {
      options: {
        layoutdir: '<%= path.src %>/layouts',
        partials: ['<%= path.src %>/partials/*.hbs', '<%= path.src %>/sub-partials/*.hbs'],
        plugins: ['./plugin.js']
      },
      all: {
        options: {
          layout: 'default.hbs'
        },
        files: [
          {
            expand: true,
            cwd: '<%= path.src %>/pages',
            src: '**/*.hbs',
            dest: '<%= path.env %>'
          }
        ]
      }
    }
  });


  grunt.registerTask('default', ['clean', 'eslint']);
  grunt.registerTask('build', ['clean', 'eslint', 'assemble']);
  grunt.registerTask('test', ['clean', 'assemble']);
};
