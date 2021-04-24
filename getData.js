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
        const resultString = await fs.readFile(filename, 'utf-8');
        const resultList = resultString.split('\n');
        let matches = [];
        for (let i = 0; i < resultList.length - 1; i++) {
            matches.push(convertData(resultList[i], i + 1));
        }
        return matches;
    } catch(e) {
        console.log(e)
        return new Error(`An error occured during getting the data from ${filename}: ${e}`);
    }
}

const writeInFile = (json, filename = file) => {
    try {
        const line = `${json.homeTeam} - ${json.awayTeam}: ${json.homeScore} - ${json.awayScore}\n`
        fs.appendFile(filename, line)
    } catch(e) {
        return new Error("Error while writing into the file");
    }
}

module.exports = {
    getData,
    writeInFile,
}