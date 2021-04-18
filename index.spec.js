import Match from './classes/Match';

describe('Class Match tests', () => {
    it("Let the game start!", () => {
        let match = new Match("Argentina", "Spain");
        let received = match.startMatch();
        let expected = { 
            "homeTeam": 'Argentina',
            "awayTeam": 'Spain',
            "homeScore": 0,
            "awayScore": 0,
            "inProgress": true
        }

        expect(received).toEqual(expected);
    })

    it("Finish the game", () => {
        const match = new Match("Germany", "Russia");
        const received = match.finishMatch();
        const expected = {
            "homeTeam": 'Germany',
            "awayTeam": 'Russia',
            "homeScore": 0,
            "awayScore": 0,
            "inProgress": false
        }

        expect(received).toEqual(expected);
    })

    it("Update the game score", () => {
        const match = new Match("Italy", "Japan");
        match.startMatch(0, 7);
        const received = match.updateMatch(0, 7);
        const expected = {
            "homeTeam": 'Italy',
            "awayTeam": "Japan",
            "homeScore": 0,
            "awayScore": 7,
            "inProgress": true
        };

        expect(received).toEqual(expected);
    })
})