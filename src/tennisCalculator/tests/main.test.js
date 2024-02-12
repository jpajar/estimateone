import { readFile } from '../helpers/readFile.js';
import { main } from '../main.js';
import { parseGames } from '../helpers/parseGame.js';
import { logScores } from '../helpers/logScores.js'
import { logPlayerGames } from '../helpers/logPlayerGames.js'
import { expect, jest } from '@jest/globals';
jest.mock('../helpers/readFile.js');
jest.mock('../helpers/parseGame.js');
jest.mock('../helpers/logScores.js');
jest.mock('../helpers/logPlayerGames.js');
afterEach(async () => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
});
describe('run main', () => {
    it('should invoke logPlayerGames and logScores, return truthy', () => {
        const filename = 'test.txt'
        const scoreMatch = '123'
        const playerGames = 'Test Person'

        readFile.mockImplementation(() => {
            return ['test'];
        });
        parseGames.mockImplementation(() => {
            return ['test match'];
        });
        logScores.mockImplementation(() => {
            return;
        });
        logPlayerGames.mockImplementation(() => {
            return;
        });
        expect(main(filename, scoreMatch, playerGames)).toBeTruthy();
        expect(readFile).toHaveBeenCalledTimes(1);
        expect(readFile).toHaveBeenCalledWith('test.txt');
        expect(parseGames).toHaveBeenCalledTimes(1);
        expect(parseGames).toHaveBeenCalledWith(['test']);
        expect(logScores).toHaveBeenCalledTimes(1);
        expect(logScores).toHaveBeenCalledWith(['test match'], '123');
        expect(logPlayerGames).toHaveBeenCalledTimes(1);
        expect(logPlayerGames).toHaveBeenCalledWith(['test match'], 'test person');
    })

    it('should log error, return false', () => {
        const filename = 'test.txt'
        const scoreMatch = '123'
        const playerGames = 'Test Person'
        readFile.mockImplementation(() => {
            throw new Error('Test Error');
        });
        expect(main(filename, scoreMatch, playerGames)).toBeFalsy()
        expect(readFile).toHaveBeenCalledTimes(1);
        expect(readFile).toHaveBeenCalledWith('test.txt');
        expect(readFile).toThrow('Test Error');
        expect(parseGames).toHaveBeenCalledTimes(0);
        expect(logScores).toHaveBeenCalledTimes(0);
        expect(logPlayerGames).toHaveBeenCalledTimes(0);
    })
})