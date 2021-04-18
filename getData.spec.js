const getData = require('./getData');

describe('Fetching the data', () => {
    it('Obtain the data from the default TXT file', done => {
        getData.getData().then(result => {
            let received = result;
            let expected = [
                {
                    id: 1,
                    homeTeam: 'Mexico',
                    awayTeam: 'Canada',
                    homeScore: 0,
                    awayScore: 5
                },
                {
                    id: 2,
                    homeTeam: 'Spain',
                    awayTeam: 'Brazil',
                    homeScore: 10,
                    awayScore: 2
                },
                {
                    id: 3,
                    homeTeam: 'Germany',
                    awayTeam: 'France',
                    homeScore: 2,
                    awayScore: 2
                },
                {
                    id: 4,
                    homeTeam: 'Uruguay',
                    awayTeam: 'Italy',
                    homeScore: 6,
                    awayScore: 6
                },
                {
                    id: 5,
                    homeTeam: 'Argentina',
                    awayTeam: 'Australia',
                    homeScore: 3,
                    awayScore: 1
                }
            ];
            expect(received).toEqual(expected);
            done();
        })
    })

    it('Obtain the data from a specific TXT file', done => {
        getData.getData('./lessData.txt').then(result => {
            let received = result;
            let expected = [
                {
                    id: 1,
                    homeTeam: 'Mexico',
                    awayTeam: 'Canada',
                    homeScore: 0,
                    awayScore: 5
                },
                {
                    id: 2,
                    homeTeam: 'Spain',
                    awayTeam: 'Brazil',
                    homeScore: 10,
                    awayScore: 2
                }
            ];
            expect(received).toEqual(expected);
            done();
        })
    })

    it('Throw a file not found error', done => {
        getData.getData('./nonExistingFile.txt').then(result => {
            let received = result;
            let expected = new Error("The file was not found");
            expect(received).toEqual(expected);
            done();
        })
    })
})