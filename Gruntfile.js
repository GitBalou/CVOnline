module.exports = function(grunt) {
    // load grunt tasks based on dependencies in package.json
    require('load-grunt-tasks')(grunt);

    grunt.config.init({

        useminPrepare: {
            html: 'index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin:{
            html:['dist/index.html']
        },
        copy:{
            html: {
                src: './index.html', dest: 'dist/index.html'
            },
            img: {
                src: 'img/*', dest:'dist/'
            },
            files: {
                src: 'dl/*', dest:'dist/'
            }
        },
        clean : {
            before: ['.tmp','dist/*'],
            after: ['.tmp']
        }
    });

    grunt.registerTask('build',[
        'clean:before',
        'copy:html',
        'copy:files',
        'copy:img',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin',
        'clean:after'
    ]);
};