/*
 * grunt-svg-resize
 * Example usage
 */

module.exports = function(grunt) {
    'use strict';

    var assetsPath = 'icons/';

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js'],
            options: {
            }
        },
        clean: {
            all: assetsPath
        },
        mkdir: {
            all: {
                options: {
                    create: [
                        assetsPath+'results'
                    ]
                }
            }
        },
        svg: {
            resize: {
                options: {
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-svg-resize');

    grunt.registerTask('default',['jshint','clean:all','mkdir:all','svg:resize']);

};
