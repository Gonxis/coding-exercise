const Match = require('./Match');
const game1 = new Match("team 1", "team 2");

module.exports = class Match {
    constructor(constructorProp) {
        this.constructorProp = constructorProp;
    }
}