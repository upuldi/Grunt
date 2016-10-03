//In order to copy files grunt require a node module called fs.
var fs = require('fs');

module.exports = function(grunt) {
    'use strict';


    grunt.initConfig({

        someProperty: 'Some Property value',
        author: 'Upul Doluweera',


        templateTask: {

            options: {
                comment: '/* <%= someProperty %> */'
            }
        },

        writeACommentToAFileTask: {

            src: 'js/someFile.js',
            dest: 'dest-js/someFileWithComment.js',

            options: {
                comment: '/* <%= someProperty %> */'
            }
        },

        writeAuthorCommentTask: {
            src: 'js/someFile.js',
            dest: 'dest-js/someFileWithAuthor.js',
            options: {
                authorComment: '/** Author: <%= author %> */'
            }
        },

        packageInfoFromPackageJsonFile: {
            src: 'js/someFile.js',
            dest: 'dest-js/someFileWithPackageJsonInfo.js',
            options: {
                authorComment: '/** Author: <%= pkgInfo.author %> */',
                licenseComment: '/** license: <%= pkgInfo.license %> */',
                nameComment: '/** name: <%= pkgInfo.name %> */'
            }
        },

        //Also grunt can read the package.json file to get package informations as below
        pkgInfo: grunt.file.readJSON('package.json')

    });

    grunt.registerTask('templateTask', function() {
        var comment = this.options().comment;
        grunt.log.writeln(comment);
    });


    grunt.registerTask('writeACommentToAFileTask', function() {
        var done = this.async();
        var comment = this.options().comment;

        fs.readFile(grunt.config.get('writeACommentToAFileTask.src'), function(error, data) {
            grunt.log.writeln(data);
            fs.writeFile(grunt.config.get('writeACommentToAFileTask.dest'), comment + '\n' + data);
            done();
        });

        grunt.log.writeln('done');
    });


    grunt.registerTask('writeAuthorCommentTask', function() {
        var done = this.async();
        var author = this.options().authorComment;

        fs.readFile(grunt.config.get('writeAuthorCommentTask.src'), function(error, data) {
            grunt.log.writeln(data);
            fs.writeFile(grunt.config.get('writeAuthorCommentTask.dest'), author + '\n' + data);
            done();
        });

        grunt.log.writeln('done');
    });

    grunt.registerTask('packageInfoFromPackageJsonFile', function() {

        var done = this.async();
        
        var author = this.options().authorComment;
        var license = this.options().licenseComment;
        var name = this.options().nameComment;

        fs.readFile(grunt.config.get('packageInfoFromPackageJsonFile.src'), function(error, data) {
            grunt.log.writeln(data);
            fs.writeFile(grunt.config.get('packageInfoFromPackageJsonFile.dest'), author + '\n' + name + '\n' + license + '\n' + data);
            done();
        });

        grunt.log.writeln('done');
    });



    grunt.registerTask('default', ['templateTask']);


}