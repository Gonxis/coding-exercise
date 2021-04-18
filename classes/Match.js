module.exports = class Match {
    constructor(homeTeam, awayTeam, homeScore = 0, awayScore = 0, inProgress = true) {
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
        return this.getMatchInfo();
    }

    finishMatch() {
        return {
            ...this.getMatchInfo(),
            inProgress: false
        }
    }
}