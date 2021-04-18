import Score from '../classes/Score';

describe('Class Score tests', () => {
    it('Score constructor', () => {
        const teamAScore = new Score(true, 2);
        expect(teamAScore.score).toBe(2);
        expect(teamAScore.local).toBe(true);
    });

    it("Get score info", () => {
        const japanScore = new Score(false, 2);
        const received = japanScore.getScoreInfo();
        const expected = {
            "local": false,
            "score": 2
        };

        expect(received).toEqual(expected);
    })
})