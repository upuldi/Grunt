var grunt = require('grunt');

/**
 * This function initializes the config object..
 * it can be access by the grunt.config.get();
 */
grunt.initConfig({
	intiConfigTestForMultiTasks : {
		someTarget : ['X','Y','Z'],
		otherTarget : 'someValue',
		someOtherTarget : 'anotherValue' 
	},
	test : {
		x : 10
	}
	
});

grunt.registerTask('simpleTask',function(x,y){
	console.log('A simple task with two parameters x : ' + x + ' and y :' + y);
});


/**
 * multi tasks work differntly with config object,
 * here in this example the task name picks the corrosponding object name from the config and executes it for defined targets.
 * Basically this tak will be executed for the number of targets defined in the init config object
 * 
 */ 
grunt.registerMultiTask('intiConfigTestForMultiTasks', function() {
	grunt.log.writeln(this.target + ' ' + this.data);
});

/**
 * Inorder to read a value from the config object use grunt.config.get('property') method.
 * 
 */
grunt.registerTask('getConfig', function(){
	var test = grunt.config.get('test.x');
	console.log('Test Value is : ' + test);
});

/**
 * Warnings can be forced with --force keyword
 * --stack can be used to view the stack trace..
 * 
 */
grunt.registerTask('warnTest',function(){
	grunt.fail.warn('Test Warning....');
});

/**
 * Fatal warnings can not be continued by forcing them.
r */
grunt.registerTask('fatalFailTest',function(){
	grunt.fail.fatal('Fatal fai can not be continued....');
});
