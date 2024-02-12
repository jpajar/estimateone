import { expect, jest } from '@jest/globals'
import * as AddGame from '../helpers/addGame.js';
import { parseGames } from '../helpers/parseGame.js'
let addGameSpy;
beforeEach(async () => {
    addGameSpy = jest.spyOn(AddGame, 'addGame');
});

afterEach(async () => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    addGameSpy.mockRestore();
});

describe('run parseGame', () => {
    it('should invoke addGame and return list of Match scores', () => {
        //example tournament result from read txt file
        const tournamentResult = ['Match: 01', 'Player A vs Player B', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

        expect(parseGames(tournamentResult)).toStrictEqual([{
            match_id: '01',
            playerPoint1: 0,
            playerPoint2: 0,
            matchPlayers: [{ player: 'player a' }, { player: 'player b' }],
            gameScores: { 'player a_loss': 0, 'player a_win': 12, 'player b_loss': 12, 'player b_win': 0 },
            games: 0,
            playerGames1: 0,
            playerGames2: 0,
            playerSet1: 2,
            playerSet2: 0,
            matchWinner: 'player a',
            matchLoser: 'player b'
        }]);
        //12 game wins for Player A
        expect(addGameSpy).toHaveBeenCalledTimes(12);
    })
})