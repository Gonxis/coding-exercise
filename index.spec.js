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
})