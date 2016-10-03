module.exports = function(grunt) {
    'use strict';


    //to configure grunt we use init config method
    // When a task is running grunt look for this method to findout a object with the same name of the task
    // So for every task which need configuration should have an object naming that task inside this method.
    // You can define any number of objects inside the init config to define properties.
    grunt.initConfig({

        //Since we have a simpleTask this is the configuration object for that task
        acesssPropertiesTask: {

            //Inside the configuration object you can have many properties you want.
            somePropertyName: "SomePropertyValue"

        },
        someOtherObject: {
            someKey: 'SomeValueInOtherObject'
        },
        requiresPropTask: {
            someRequiredKey: 'Value for some rquired key...'
        },
        //Here this multi task has two different configurations
        multiTaskDemo: {
            config1: {
                someKey: 'SomeValueInConfiguration - One'
            },
            config2: {
                someKey: 'SomeValueInConfiguration - Two'
            }
        },
        someMultiTask: {

            someConfig: {
                key: 'Some Obj'
            },
            anotherConfig: {
                key: 'Another Obj'
            },
            otherConfig: {
                key: 'Other Obj'
            }
        }

    });



    /**
     * This task demostrates how to acess properties defined in the init config object
     */
    grunt.registerTask('acesssPropertiesTask', 'This is a simple task', function() {

        grunt.log.writeln('\n\nThis is the acess properties task......');

        //Inorder to access the property inthe config method you should use config.get method with object value dot notation
        //Yout have to pass the name of the property to get the value back
        //If the property is not defined it will return null
        //You have to define the dot notation for that
        grunt.log.writeln('The property name is : ' + grunt.config.get('acesssPropertiesTask.somePropertyName'));

        //You have to use the dot notation to access properties from objects
        grunt.log.writeln('Accessing some other object property : ' + grunt.config.get('someOtherObject.someKey'));

    });



    /**
     * This task demostrate requires properties where if the properties are not defined it will faill to run the task
     */
    grunt.registerTask('requiresPropTask', 'This is a requires properties task', function() {

        //However if a property is not defined it returns null, so these properties are optional for this task.
        //If you want to make sure certain properties are mandatory for a module, you can define the properties with requires flag
        //so if the properties configutation isnt defined in the init config it will fails to run.
        grunt.config.requires('requiresPropTask.someRequiredKey');

        grunt.log.writeln('Accessing some required property : ' + grunt.config.get('requiresPropTask.someRequiredKey'));

    });



    grunt.registerTask('default', ['acesssProperties']);


    /**
     * Multi tasks can have differrent configuration settings.
     * It allows a task to have different configurations and choose a once at runtime.
     * 
     * It will run with the all configuration settings at lease a once if you didnt specify the configuration setting
     * you want to run for eg : grunt multiTask will run twice as the config setting has not been specified with the 
     * argument, instead if you run grunt multiTask:config2 will run only once with the given configuration.
     */
    grunt.registerMultiTask('multiTaskDemo', 'This is a multitask', function() {

        //Inside a multitask you can access the configuration using this.data
        grunt.log.writeln('Config data ' + this.data);
        grunt.log.writeln('Some key ' + this.data.someKey);
    });


    // In order to define the configuration someMultitask:someConfig
    grunt.registerMultiTask('someMultiTask', 'description', function() {
        grunt.log.writeln(this.data.key);

    });

}
