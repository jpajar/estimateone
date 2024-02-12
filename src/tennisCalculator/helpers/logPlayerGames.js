/**
 * Logs player game wins and losses
 * @function
 * @param {Array} matches - Array of matches for the tournament
 * @param ${String} reqPlayer - Player which user is querying for games won and lost during tournament
 */

export const logPlayerGames = (matches, reqPlayer) => {
  const playerRecord = {
    wins: 0,
    losses: 0
  }
  //loop through matches
  for (const match of matches) {
    //if player participated in them atch
    if (match.matchPlayers.find(playerObj => reqPlayer === playerObj.player)) {
      //record wins and losses for that match
      playerRecord.wins += match.gameScores[`${reqPlayer}_win`]
      playerRecord.losses += match.gameScores[`${reqPlayer}_loss`]
    }
  }
  console.log(`${playerRecord.wins} ${playerRecord.losses}`)
}
