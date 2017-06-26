module.exports = function(grunt){
   grunt.loadNpmTasks("grunt-contrib-sass");
    
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        sass: {
            style: {
                files: {
                    "css/style.css": "sass/style.scss"
                }
            }
            
        }
    });
};