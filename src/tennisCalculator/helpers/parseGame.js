import { addGame } from './addGame.js'
/**
 * Returns Array of matches which store players, sets, match winner and loser, games won and lost by players. Invokes addGame to perform calculation on points and gaems.
 * Uses Array returned by readFile
 * @function
 * @param {Array} tournamentMatches - Array of text read by readFile
 * @returns {Array} matches - Array containing matches, players, set wins, match winner and loser, games won and lost.
 */
export const parseGames = tournamentMatches => {
  const matches = []
  let matchObj
  // loop through each line in parsed text file
  for (const e of tournamentMatches) {
    const str = e.toLowerCase()
    // Match: 01
    if (str.includes('match')) {
      // Get match ID
      const match = str.split(' ')
      // 01
      if (matchObj) {
        // record current matchObj
        matches.push(matchObj)
      }
      // clean matchObj / instantiate matchObj
      matchObj = {
        match_id: match[1],
        playerPoint1: 0,
        playerPoint2: 0,
        matchPlayers: [],
        gameScores: {},
        games: 0,
        playerGames1: 0,
        playerGames2: 0,
        playerSet1: 0,
        playerSet2: 0,
        matchWinner: '',
        matchLoser: ''
      }
    }
    // Person A vs Person B
    else if (str.includes('vs')) {
      const players = str.split('vs')
      for (const player of players) {
        matchObj.matchPlayers.push({ player: player.trim() })
      }
      matchObj.gameScores[`${matchObj.matchPlayers[0].player}_win`] = 0
      matchObj.gameScores[`${matchObj.matchPlayers[1].player}_win`] = 0
      matchObj.gameScores[`${matchObj.matchPlayers[0].player}_loss`] = 0
      matchObj.gameScores[`${matchObj.matchPlayers[1].player}_loss`] = 0
    }
    // match point
    else if (!matchObj.matchWinner) {
      const point = Number(str)
      switch (point) {
        case 0:
          matchObj.playerPoint1++
          break
        case 1:
          matchObj.playerPoint2++
          break
        default:
          break
      }
      // player 1 win
      if (matchObj.playerPoint1 >= 4 && matchObj.playerPoint1 >= matchObj.playerPoint2 + 2) {
        addGame(matchObj)
      }
      // player 2 win
      else if (matchObj.playerPoint2 >= 4 && matchObj.playerPoint2 >= matchObj.playerPoint1 + 2) {
        addGame(matchObj, false)
      }
    }
  }
  // push last match
  matches.push(matchObj)
  return matches
}
