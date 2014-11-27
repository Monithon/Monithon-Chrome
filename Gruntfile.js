module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	'chrome-extension': {
    options: {
        name: "demo-ext",
        version: "0.0.1",
        id: "00000000000000000000000000000000",
        updateUrl: "http://example.com/extension/111111/",
        chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        clean: true,
        certDir: 'cert',
        buildDir: 'build',
        resources: [
            "js/**",
            "images/**",
            "*.html"
        ]
    }
  },
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-chrome-compile');
  // Default task(s).
  grunt.registerTask('default', ['chrome-extension']);

};
