module.exports = class Score {
    constructor(local, score = 0) {
        this.score = score;
        this.local = local;
    }

    getScoreInfo() {
        return {
            score: this.score,
            local: this.local,
        }
    }
}