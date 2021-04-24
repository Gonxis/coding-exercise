const Match = require('./Match');
const game1 = new Match("team 1", "team 2");
const getData = require('../getData');
const allMatchesInAnObj = require('../matches.json');

module.exports = class Board {
    constructor() {
        this.matchList = allMatchesInAnObj;
    }

    getSummaryGamesByTotalScore() {
        return this.matchList.
            sort((a, b) => (b.homeScore + b.awayScore) - (a.homeScore + a.awayScore) < 0 ? -1 
            : (b.homeScore + b.awayScore) - (a.homeScore + a.awayScore) > 0 ? 1 
            : (b.id) - (a.id) )
    }
}