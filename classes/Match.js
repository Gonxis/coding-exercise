const Score = require('./Score');
const scoreTeamA = new Score(true);
const scoreTeamB = new Score(false);

module.exports = class Match {
    constructor(homeTeam, awayTeam, homeScore = scoreTeamA.score, awayScore = scoreTeamB.score, inProgress = false) {
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

    getMatchScore() {
        return {
            homeScore: this.homeScore.score,
            awayScore: this.awayScore.score,
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

    updateMatch(homeScore, awayScore) {
        let local = new Score(true, homeScore);
        let away = new Score(false, awayScore);
        this.homeScore = local.score;
        this.awayScore = away.score;
        return this.getMatchInfo();
    }
}