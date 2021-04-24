const MATCH = require('./classes/Match');
const BOARD = require('./classes/Board');

//const getData = require('./getData');

//getData.getData(process.argv[2]);

exports.startMatch = (homeTeam, awayTeam) => {
    const match = new MATCH(homeTeam, awayTeam);
    return match.startMatch();
}

exports.updateMatch = (homeScore, awayScore) => {
    const match = this.startMatch();
    return match.updateMatch(homeScore, awayScore);
}

exports.finishMatch = () => {
    const match = this.startMatch();
    return match.finishMatch();
}