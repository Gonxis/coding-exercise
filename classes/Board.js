const Match = require('./Match');
const game1 = new Match("team 1", "team 2");
const { getJSONFileDataSync } = require('../getData');
const allMatchesInAnObj = require('../matches.json');

module.exports = class Board {
    constructor() {
        this.matchList = allMatchesInAnObj;
        this.matchesInProgress = [];
    }

    updateMatchList() {
        this.matchList = getJSONFileDataSync();
    }

    sort(item) {
        return item.
            sort((a, b) => (b.homeScore + b.awayScore) - (a.homeScore + a.awayScore) < 0 ? -1 
            : (b.homeScore + b.awayScore) - (a.homeScore + a.awayScore) > 0 ? 1 
            : (b.id) - (a.id) )
    }

    getSummaryGamesByTotalScore() {
        this.updateMatchList();
        return this.sort(this.matchList)
    }

    getSummaryGamesInProgressByTotalScore() {
        this.updateMatchList();
        const matchesInProgress = this.matchList.filter(match => match.inProgress);
        return this.sort(matchesInProgress)
    }
}