const Match = require('./Match');
const game1 = new Match("team 1", "team 2");
const getData = require('../getData');
const allMatchesInAnObj = require('../data.json');

module.exports = class Board {
    constructor() {
        this.matchList = allMatchesInAnObj;
    }
}