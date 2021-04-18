# Title of the exercise

Here I would add the exercise description, but for now and in order not to give more information to any new potencial candidate and because this repository will remain public for a while, I will not give information about the exercise.


## Setup

Assuming we have NodeJS installed, I will proceed with the setup of my application in order to run it.

I installed some tools in the project, so we can run the different tests of it:

    Jest: a test runner based on Jasmine
    Babel: to transpile ECMAScript 2021 code to ECMAScript 5 (or at least ECMAScript 2016)

It can be installed running this command within the project root directory:

    yarn install 
    or 
    npm install


## Text file

The inputs that will read the program are introduced via a text file in the root directory of the application with name:

    data.txt

The program will read the file line-by-line, each line contains information about a match as described below:

    nameOfHomeTeam - nameOfAwayTeam: scoreOfHome - scoreOfAway


## Running the application

In order to execute the application, we have to run the next command line:

    node index.js
    or 
    node build/bundle

This will execute the application with the data.txt file as default. If we wanted to execute the application with an external file, the command line we have tu run is the next one:

    node index.js /Path/to/file/AnotherFileName.txt
    or
    node build/bundle /Path/to/file/AnotherFileName.txt

Where AnotherFileName.txt is the file we wanted to run, and /Path/to/file the path where the file is saved.


## Tests

To execute the tests we will have to do it with the command below:

    yarn test
    or
    npm test


## Other considerations