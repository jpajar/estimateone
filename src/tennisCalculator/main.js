
import { readFile } from './helpers/readFile.js'
import { parseGames } from './helpers/parseGame.js'
import { logScores } from './helpers/logScores.js'
import { logPlayerGames } from './helpers/logPlayerGames.js'
import { getArgs } from './helpers/get-args.js'

const fileName = getArgs('fileName');
const scoreMatch = getArgs('scoreMatch');
const playerGames = getArgs('playerGames');

/**
 * Invokes sub functions to perform logic required to server user query on tournament
 * @function main
 * @param {String} fileName - Name of file to be read
 * @param {String} scoreMatch - ID of match user wants to query (optional)
 * @param {String} playerGames - Player which user wants to query (optional)
 */
export const main = (fileName, scoreMatch = false, playerGames = false) => {
  try {
    console.log(fileName);
    // load tournament txt file
    const games = readFile(fileName)
    // parse tournament match scores
    const result = parseGames(games)
    // if userinput matchID
    if (scoreMatch) {
      logScores(result, scoreMatch)
    }
    // if userinput player name
    if (playerGames) {
      logPlayerGames(result, playerGames.toLowerCase())
    }
    console.log('END')
    return true;
  }
  catch (e) {
    console.log('Something went wrong: ', e)
    return false;
  }
}

//check if process is running via CLI
if (process.argv.includes(`--fileName`)) {
  main(fileName, scoreMatch, playerGames)
}