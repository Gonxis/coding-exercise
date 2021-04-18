const file = './data.txt';

const fs = require('fs').promises;

const formatData = (regex, list) => {
    return list
        .split(regex)
        .map(str => str.trim())

}

const convertData = (data, id) => {
    let match = formatData(':', data);
    let teams = formatData(/[–-]/ig, match[0]);
    let scores = formatData(/[–-]/ig, match[1])
        .map(num => num * 1);
    let convertedData = {
        id,
        homeTeam: teams[0],
        awayTeam: teams[1],
        homeScore: scores[0],
        awayScore: scores[1],
    }
    return convertedData;
}

const getData = async (filename = file) =>  {
    try {
        const resultString = await fs.readFile(filename, 'utf8');
        const resultList = resultString.split('\n');
        let matches = [];
        for (let i = 0; i < resultList.length; i++) {
            matches.push(convertData(resultList[i], i + 1));
        }
        return matches;
    } catch(e) {
        console.error(e);
    }
};

module.exports = {
    getData
}