//A grunt file is a node module
module.exports = function(grunt) {
	'use strict';


	//Register task method is used to register a task.
	//
	//A simple task
	grunt.registerTask('simpleTask', 'Task Description', function() {
		grunt.log.writeln('This is a simple task....');
	});

	//A task with out a description
	grunt.registerTask('someTask', function() {
		grunt.log.writeln('This is a task without description');
	});


	//A default task is a task which will automatically get executed when run with grunt command
	grunt.registerTask('default', 'this is a default task', function() {
		grunt.log.writeln('My first default task is running.....');
	});


	//A task can have a parameter, A value can be passes to the task via command line grunt <taskname>:<argument>
	grunt.registerTask('taskWithInputs', 'This task accepts an argument', function(someArgument) {
		grunt.log.writeln('This task accepts an input passes to the task ' + someArgument);
		
	});

	//Name and other importand properties of a task can be obtained by the this variable.
	grunt.registerTask('taskWithName' , function() {

		//This is the callback function for the task.
		var taskComplete = this.async();

		grunt.log.writeln('The name of this task is the : ' + this.name);		


		//At the end of the task you are suppose to invoke the callback function
		taskComplete();

	});


	//alies task containts one or more other tasks
	grunt.registerTask('aliesTask', 'This is a alies task',['taskWithName']);
	

	//You can specify a collection of tasks into one task, however these specified collection will be called synchronizely
	// If you want to specifies an async task you should define the async method in the task itself to provide a callback
	grunt.registerTask('oneTaskWithMany', 'This is a alies task with many tasks',['taskWithName','simpleTask','someTask']);

}