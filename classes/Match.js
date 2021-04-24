const Score = require('./Score');
const Error = require('./Error');
const scoreTeamA = new Score(true);
const scoreTeamB = new Score(false);
const getData = require('../getData');

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
            homeScore: this.homeScore,
            awayScore: this.awayScore,
        }
    }

    startMatch() {
        this.inProgress = true;
        return this.getMatchInfo();
    }

    finishMatch() {
        if (!this.inProgress)
            return new Error("The match is not in progress");
        this.inProgress = false;
        getData.writeInFile({...this.getMatchInfo()})
        return this.getMatchInfo();
    }

    updateMatch(homeScore, awayScore) {
        if (!this.inProgress)
            return new Error("The match has not started yet or has already finished");
        let local = new Score(true, homeScore);
        let away = new Score(false, awayScore);
        this.homeScore = local.score;
        this.awayScore = away.score;
        return this.getMatchInfo();
    }
}