var grunt = require("grunt");

// Default task always get executed by default
grunt.registerTask('default', 'A default task description' ,function(){
	console.log('Hello World')
});

grunt.registerTask('someOtherTask',function(){
	console.log('This is a some other taks....');
});

grunt.registerTask('anotherTask', 'Another Task Description', function() {
	console.log('This is another task .......');
});

grunt.registerTask('helloName', 'description', function(name) {
		if (!name || !name.length) {
			grunt.warn('Provide a name.....');
		}
		console.log('Hello ' + name);
});

// you can link multiple grunt tasks by using arrays...
grunt.registerTask('multiple', ['someOtherTask','anotherTask','helloName:UpulDoluweera']);