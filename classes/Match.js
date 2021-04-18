module.exports = class Match {
    constructor(homeTeam, awayTeam, homeScore = 0, awayScore = 0, inProgress = false) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.inProgress = inProgress;
    }

    getMatchInfo() {
        return {
            homeTeam: this.homeTeam,
            awayTeam: this.awayTeam,
            homeScore: this.homeScore,
            awayScore: this.awayScore,
            inProgress: this.inProgress
        }
    }

    startMatch() {
        this.inProgress = true;
        return this.getMatchInfo();
    }

    finishMatch() {
        this.inProgress = false;
        return this.getMatchInfo();
    }
}