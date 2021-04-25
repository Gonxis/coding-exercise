const file = './data.txt';
const jsonFile = './matches.json';

const fs = require('fs').promises;
const fsSync = require('fs');

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

const getJSONFileData = async (filename = jsonFile) =>  {
    try {
        const resultString = await fs.readFile(filename, 'utf-8');
        return resultString;
    } catch(e) {
        console.log(e)
        return new Error(`An error occured during getting the data from ${filename}: ${e}`);
    }
}

const getJSONFileDataSync = (filename = jsonFile) =>  {
    try {
        const resultString = fsSync.readFileSync(filename, 'utf-8');
        return JSON.parse(resultString);
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

const writeInJSONFile = async (json, filename = jsonFile) => {
    try {
        let data = await fs.readFile(filename);

        let result = JSON.parse(data);
        let obj = result.filter(match => match.id !== json.id);
        obj.push(json);

        await fs.writeFile(filename, JSON.stringify(obj, null, 4))
    } catch(e) {
        console.log(e)
        return new Error("Error while writing into the file");
    }
}

const writeInJSONFileSync = (json, filename = jsonFile) => {
    try {
        let data = getJSONFileDataSync();

        let result = data;
        let obj = result.filter(match => match.id !== json.id);        
        obj.push({...json});

        fsSync.writeFileSync(filename, JSON.stringify(obj, null, 4))
    } catch(e) {
        console.log(e)
        return new Error("Error while writing into the file");
    }
}

module.exports = {
    getData,
    writeInFile,
    writeInJSONFile,
    getJSONFileData,
    getJSONFileDataSync,
    writeInJSONFileSync
}