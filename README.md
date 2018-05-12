# GULP

    * JS toolkit or task runner used to automate tasks
    * gulp works with and is installed with node.js

## Info



## tasks 

    * minification of scripts and styles
    * concatonation of multiple files into one
    * cache busing (letting the browser know theres a new version of a file)
    * testing, linting, optimization
    * dev server 

## environment

    * we install gulp both locally (globally) and as a dev dependency for our app. 
        > npm install -g gulp
        > npm install --save-dev gulp
    * we will put everything in our src folder, but then our gulp tasks will go through and put everything into our dist directory, which will be our production ready product. 


## USE

    * You can call the functions you define in your gulpfile from the command line by using the gulp command:
        > gulp functionName
    
    * If you name your function 'default' then you can run it with the the gulp command with no argument:
        > gulp

    * you will generally install modules with npm that you can then use to perform tasks in your functions
        > npm install --save-dev gulp-moduleName


## Top Level Function (common use functions)

    * gulp.task() - this is how we define the tasks that we want to be able to execute. 
        e.g. gulp.task('taskName', callbackFunction(){...})
    
    * gulp.src() - this tells gulp which directory to read from. We can also put things like shorthand modifiers to grab all files (*, etc.)
        e.g. gulp.src('parent/child/*.js)

    * gulp.dest() - tells gulp where to put the files at the end of the pipe
        e.g. 

    * gulp.watch() - this is what we use to monitor files for changes. 
        e.g. gulp.watch('fileToBeWatched', ['scriptToBeRunOnChange'])

    * src.pipe() - we can use the pipe function to pipe the output of one function into the input of the next.
        e.g. gulp.src('dir').pipe(somefunction()).dest('someOtherDir')