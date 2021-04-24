import Board from '../classes/Board';
import Match from '../classes/Match';
import * as matchList from '../data.json';

describe('Class Board tests', () => {
    it('Board constructor', () => {
        const scoreBoard = new Board();

        expect(scoreBoard.matchList).toEqual(matchList.default);
    });
})