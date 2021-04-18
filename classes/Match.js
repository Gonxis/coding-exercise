module.exports = class Match {
    constructor(homeTeam, awayTeam, homeScore = 0, awayScore = 0, inProgress = false) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.inProgress = inProgress;
    }

    startMatch() {
        return {
            homeTeam: this.homeTeam,
            awayTeam: this.awayTeam,
            homeScore: 0,
            awayScore: 0,
            inProgress: true
        }
    }

    finishMatch() {
        return {
            homeTeam: this.homeTeam,
            awayTeam: this.awayTeam,
            homeScore: 0,
            awayScore: 0,
            inProgress: false
        }
    }
}