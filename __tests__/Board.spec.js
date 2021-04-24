import Board from '../classes/Board';
import Match from '../classes/Match';
import * as matchList from '../data.json';

describe('Class Board tests', () => {
    it('Board constructor', () => {
        const scoreBoard = new Board(matchList);
        const expected = {
            "matches": [
                {
                    "id": 1,
                    "homeTeam": "Mexico",
                    "awayTeam": "Canada",
                    "homeScore": 0,
                    "awayScore": 5
                },
                {
                    "id": 2,
                    "homeTeam": "Spain",
                    "awayTeam": "Brazil",
                    "homeScore": 10,
                    "awayScore": 2
                },
                {
                    "id": 3,
                    "homeTeam": "Germany",
                    "awayTeam": "France",
                    "homeScore": 2,
                    "awayScore": 2
                },
                {
                    "id": 4,
                    "homeTeam": "Uruguay",
                    "awayTeam": "Italy",
                    "homeScore": 6,
                    "awayScore": 6
                },
                {
                    "id": 5,
                    "homeTeam": "Argentina",
                    "awayTeam": "Australia",
                    "homeScore": 3,
                    "awayScore": 1
                }
            ]
        };

        expect(scoreBoard.matchList).toEqual(expected);
    });
})