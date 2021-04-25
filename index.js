const MATCH = require('./classes/Match');
const BOARD = require('./classes/Board');

(function init(){
    const board = new BOARD();
    const match_1 = new MATCH("Argentina", "France");
    const match_2 = new MATCH("Spain", "Japan");
    
    match_1.startMatch();

    console.log("Summary of matches in play: ");
    console.table(board.getSummaryGamesInProgressByTotalScore());

    match_1.updateMatch(1, 0);

    console.log("Summary of matches in play: ");
    console.table(board.getSummaryGamesInProgressByTotalScore());

    match_1.updateMatch(2, 0);

    console.log("Summary of matches in play: ");
    console.table(board.getSummaryGamesInProgressByTotalScore());

    match_2.startMatch();

    console.log("Summary of matches in play: ");
    console.table(board.getSummaryGamesInProgressByTotalScore());

    match_2.finishMatch();

    match_1.finishMatch();

    
    console.log("Summary of all matches: ");
    console.table(board.getSummaryGamesByTotalScore());
})()
