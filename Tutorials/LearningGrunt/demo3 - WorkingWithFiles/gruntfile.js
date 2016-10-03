//In order to copy files grunt require a node module called fs.
var fs = require('fs');

module.exports = function(grunt) {
    'use strict';


    grunt.initConfig({

        copyFileTask: {
            //This is the compact formt of defining a file - this is the first method of acessing files
            src: 'js/someFile.js',
            dest: 'dest-js/copiedFile.js'
        },

        fileObjectTask: {

            config1: {
                //This is the file object format - this is the second way of accessing files...
                //This will only work with multi tasks - my understanding
                //Src file should be there in the location
                files: {
                    'dest-js/destFile.js': 'js/srcFile.js',
                    'dest-js/anotherDestFile.js': 'js/anotherSrcFile.js'
                }
            }
        },

        filesArrayFormatTask: {

            config1: {

                files: [
                    {
                        src: 'js/srcFile.js',
                        dest: 'dest/destFile.js'
                    }, {
                        src: 'js/anotherSrcFile.js',
                        dest: 'dest/anotherDestFile.js'
                    },
                ]

            }
        }


    });



    /**
     * This task demostrates how to copy files from src to dest using fs node module
     */
    grunt.registerTask('copyFileTask', 'This is a simple task for coping files', function() {

        //This task runs asynchronously.
        var done = this.async();

        grunt.log.writeln('\n\nSome task......');

        //Accessing properties are same 
        grunt.log.writeln('To access the file define in : ' + grunt.config.get('copyFileTask.src'));

        grunt.log.writeln('Coping files');

        //Coping files from sorce to destination
        fs.readFile(grunt.config.get('copyFileTask.src'), function(error, data) {
            fs.writeFile(grunt.config.get('copyFileTask.dest'), data);
            grunt.log.writeln('Completed...')
                //Since the actual completion happens when the file is finished writing , done comes here.
            done();
        });

    });

    grunt.registerMultiTask('fileObjectTask', 'description', function() {


        grunt.log.writeln('FileObject Task');

        //This kind of thing will only work with multi tasks.       
        this.files.forEach(function(file) {
            grunt.log.writeln('\n\n' + file.src[0] + ' - ' + file.dest);
            grunt.log.writeln('Source file is ' + file.src[0]);
            grunt.log.writeln('Dest file is ' + file.dest);
        });

    });


    grunt.registerMultiTask('filesArrayFormatTask', 'description', function() {


        this.files.forEach(function(file) {

            grunt.log.writeln('\n\n' + file.src + ' - ' + file.dest);
            grunt.log.writeln('Source file is ' + file.src);
            grunt.log.writeln('Dest file is ' + file.dest);
        });

    });



    grunt.registerTask('default', ['copyFileTask']);


}