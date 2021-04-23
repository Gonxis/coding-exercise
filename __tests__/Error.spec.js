import Match from '../classes/Match';

describe('Class Error tests', () => {
    it("Don't allow to finish a match when it has not begun", () => {
        const match = new Match("Japan", "Spain");

        const error = match.finishMatch();
        const received = error.message;
        const expected = "The match is not in progress";

        expect(received).toEqual(expected);
    })

    it("Don't allow to update a finished match", () => {
        const match = new Match("Brazil", "Mexico");
        match.startMatch();
        match.finishMatch()
        const error = match.updateMatch();
        const received = error.message;
        const expected = "The match has not started yet or has already finished";

        expect(received).toEqual(expected);
    })

    it("Don't allow to update a not started match", () => {
        const match = new Match("Brazil", "Mexico");
        const error = match.updateMatch();
        const received = error.message;
        const expected = "The match has not started yet or has already finished";

        expect(received).toEqual(expected);
    })
})