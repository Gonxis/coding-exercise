import Board from '../classes/Board';
import Match from '../classes/Match';

describe('Class Board tests', () => {
    it('Board constructor', () => {
        const scoreBoard = new Board();
        expect(scoreBoard.constructorProp).toBe("something");
    });
})