/**
 * Adds match points, games and sets won by each player
 * @function
 * @param {object} matchesObj - Object containing the 'game' / match information (scores, player names, etc)
 * @param {boolean} isPlayer1 - Boolean to determine which player won the game
 */

export const addGame = (matchesObj, isPlayer1 = true) => {
  // reset points due to new game
  matchesObj.playerPoint1 = 0
  matchesObj.playerPoint2 = 0
  // add game to correct player
  isPlayer1 ? matchesObj.playerGames1++ : matchesObj.playerGames2++
  // determine if player 1 has 6 game wins
  if (matchesObj.playerGames1 === 6) {
    // record current wins for players
    matchesObj.gameScores[`${matchesObj.matchPlayers[0].player}_win`] += matchesObj.playerGames1
    matchesObj.gameScores[`${matchesObj.matchPlayers[1].player}_win`] += matchesObj.playerGames2
    // reset games due to new set
    matchesObj.playerGames1 = 0
    matchesObj.playerGames2 = 0
    // add set win to player 1
    matchesObj.playerSet1++
    // determine if player 1 has won the match
    if (matchesObj.playerSet1 === 2) {
      // record the winners and losers of the match
      matchesObj.matchWinner = matchesObj.matchPlayers[0].player
      matchesObj.matchLoser = matchesObj.matchPlayers[1].player
      // record losses for each player (other player's win = players loss)
      //{gameScores.player1_loss}
      matchesObj.gameScores[`${matchesObj.matchPlayers[0].player}_loss`] += matchesObj.gameScores[`${matchesObj.matchPlayers[1].player}_win`]
      matchesObj.gameScores[`${matchesObj.matchPlayers[1].player}_loss`] += matchesObj.gameScores[`${matchesObj.matchPlayers[0].player}_win`]
    }
  }
  // determine if it was player 2 that won the game
  else if (matchesObj.playerGames2 === 6) {
    // record current wins for players
    matchesObj.gameScores[`${matchesObj.matchPlayers[0].player}_win`] += matchesObj.playerGames1
    matchesObj.gameScores[`${matchesObj.matchPlayers[1].player}_win`] += matchesObj.playerGames2
    // reset games in preperation for new set
    matchesObj.playerGames2 = 0
    matchesObj.playerGames1 = 0
    // add set win to player 2
    matchesObj.playerSet2++
    // determine if player 2 has won the match
    if (matchesObj.playerSet2 === 2) {
      // record the winner and losers of the match
      matchesObj.matchWinner = matchesObj.matchPlayers[1].player
      matchesObj.matchLoser = matchesObj.matchPlayers[0].player
      // record losses for each player (other player's win = players loss)
      matchesObj.gameScores[`${matchesObj.matchPlayers[0].player}_loss`] += matchesObj.gameScores[`${matchesObj.matchPlayers[1].player}_win`]
      matchesObj.gameScores[`${matchesObj.matchPlayers[1].player}_loss`] += matchesObj.gameScores[`${matchesObj.matchPlayers[0].player}_win`]
    }
  }
}
