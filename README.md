# Title of the exercise

Here I would add the exercise description, but for now and in order not to give more information to any new potencial candidate and because this repository will remain public for a while, I will not give information about the exercise.


## Setup

Assuming we have NodeJS installed, I will proceed with the setup of my application in order to run it.

I installed some tools in the project, so we can run the different tests of it:

    Jest: a test runner based on Jasmine
    Babel: to transpile ECMAScript 2016 code to ECMAScript 5

It can be installed running this command within the project root directory:

    yarn install 
    or 
    npm install


## Text file

The inputs that will read the program are introduced via a josn file in the root directory of the application with name:

    matches.json

The program will save the matches in that json. A match is saved when it begins, is updated or finished.

## Running the application

You can run it on REPL like this:

    node
    Board = require('./classes/Board')
    Match = require('./classes/Match')
    board = new Board()
    match = new Match("Team A", "Team B")
    match.startMatch()
    match.updateMatch(0, 1)
    match.finishMatch()
    board.getSummaryGamesByTotalScore()

## Tests

To execute the tests we will have to do it with the command below:

    yarn test
    or
    npm test


## Application requirements

### Feature 1 - Start match

```
As a user
I want to start a new game
And set a home and an away team
So that I could be able to see it on the board
```

### Feature 2 - Finish match

```
As a user
I want to finish a match
So that I no longer see it on the board
```

### Feature 3 - Update the score

```
As a user
I want to update the score of a match
So that the match score is always up to date
```

### Feature 4 - Get summary of games by total score.

```
As a user
I want to get a summary of games by total score.
So that I can see all the games and their results in an specific order.
```


## Other considerations

I have been working alone on the Main branch as I am the only one working in this project, but maybe if I had been working with other people, I had followed gitflow or I had worked with branch per feature.

I have made the assumption that the games were sorted first of all summing the total of each scores (homeScore and AwayScore) by the greatest the first ones, and if they are with the same total score, sorted by the most recently added to the system first. So in the example given, the order is: d, b, a, e and c

I consider a Match that was played as one started, so if a match was created but was not started even if the result was 0 - 0 and don't need to be updated, the match is not saved in the file. You need to call startMatch from Match class in order to save it.

I considered persisting the data was important, that is the reason why I dedicated time to save the data in a file.

I will no longer continue with the exercise, I think I dedicated time enough to finish it and I haven't done it yet.


## Future steps

Making all the project as an independent module in order to work anywhere as a library.

Correct an issue when writing into the file, where the id of a match is the same as another match in progress and one of them is not written in the file.