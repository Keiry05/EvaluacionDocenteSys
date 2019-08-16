module.exports = function(grunt) {
    grunt.initConfig({
		sass: {
			options: {
                includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
            },
            dist: {
				options: {
					outputStyle: 'compressed'
				},
                files: [{
                    'assets/css/style.min.css': 'assets/scss/main.scss',  							/* 'All main SCSS' */
				}]
            }
        },
        uglify: {
          my_target: {
            files: {
                'assets/bundles/libscripts.bundle.js': ['assets/plugins/jquery/jquery-3.3.1.min.js','assets/plugins/bootstrap/js/bootstrap.bundle.js'], /* main js*/
              }
            }
        }                
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask("buildcss", ["sass"]);	
    grunt.registerTask("buildjs", ["uglify"]);
};
