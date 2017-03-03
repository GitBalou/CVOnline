module.exports = function(grunt) {

    // Chargement de toutes les tâches contenues dans le package.json
    require('load-grunt-tasks')(grunt);

    grunt.config.init({

        // useminPrepare : pour préparer les fichiers à concaténer / minifier dans le index.html
        useminPrepare: {
            html: 'www/index.html',
            options: {
                dest: 'docs'
            }
        },

        usemin:{
            html:['docs/index.html']
        },

        copy:{
            html: {
                src: 'www/index.html', dest: 'docs/index.html'
            },
            img: {
                expand : true,
                flatten : true,
                src: 'www/img/*', dest:'docs/img/'
            },
            files: {
                expand : true,
                flatten : true,
                src: 'www/dl/*', dest:'docs/dl/'
            },

            // les polices fontawesome ne sont pas importées automatiquement lors du build css
            fonts : {
                expand : true,
                flatten : true,
                src: 'bower_components/font-awesome/fonts/*', dest:'docs/fonts/'
            }
        },

        clean : {
            before: ['.tmp','docs/*'],
            after: ['.tmp']
        }
    });

    // Build
    grunt.registerTask('build',[
        'clean:before',
        'copy:html',
        'copy:files',
        'copy:img',
        'copy:fonts',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin',
        'clean:after'
    ]);
};