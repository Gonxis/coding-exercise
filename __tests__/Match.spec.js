import Match from '../classes/Match';
import Score from '../classes/Score';

const homeScore = new Score(true);
const awayScore = new Score(false);

describe('Class Match tests', () => {
    it("Let the game start!", () => {
        let match = new Match("Argentina", "Spain");
        let received = match.startMatch();
        let expected = { 
            "homeTeam": 'Argentina',
            "awayTeam": 'Spain',
            "homeScore": homeScore.score,
            "awayScore": awayScore.score,
            "inProgress": true
        }

        expect(received).toEqual(expected);
    })

    it("Finish the game", () => {
        const match = new Match("Germany", "Russia");
        match.startMatch();
        const received = match.finishMatch();
        const expected = {
            "homeTeam": 'Germany',
            "awayTeam": 'Russia',
            "homeScore": homeScore.score,
            "awayScore": awayScore.score,
            "inProgress": false
        }

        expect(received).toEqual(expected);
    })

    it("Update the game score", () => {
        const match = new Match("Italy", "Japan");
        match.startMatch();
        const japanScore = new Score(false, 7);
        const received = match.updateMatch(homeScore.score, japanScore.score);
        const expected = {
            "homeTeam": 'Italy',
            "awayTeam": "Japan",
            "homeScore": homeScore.score,
            "awayScore": japanScore.score,
            "inProgress": true
        };

        expect(received).toEqual(expected);
    })

    it("Don't allow to finish a match when it has not begun", () => {
        const match = new Match("Japan", "Spain");

        const received = match.finishMatch();
        const expected = new Error("The match is not in progress");

        expect(received).toEqual(expected);
    })

    it("Don't allow to update a finished match", () => {
        const match = new Match("Brazil", "Mexico");
        match.startMatch();
        match.finishMatch()
        const received = match.updateMatch();
        const expected = new Error("The match has not started yet or has already finished");

        expect(received).toEqual(expected);
    })

    it("Don't allow to update a not started match", () => {
        const match = new Match("Brazil", "Mexico");
        const received = match.updateMatch();
        const expected = new Error("The match has not started yet or has already finished");

        expect(received).toEqual(expected);
    })
})