/**
 * Logs match winner, set scores
 * @function
 * @param {Array} matches - Array of matches for the tournament
 * @param {String} matchId - Match ID which user is querying for results
 */
export const logScores = (matches, matchId) => {
  // from list of matches, find the match which user has requested
  const reqMatch = matches.find(match => matchId === match.match_id)
  //    Person A defeated Person B
  // 2 sets to 0
  console.log(`${reqMatch.matchWinner} defeated ${reqMatch.matchLoser}`)
  // determine which set wins is larger
  reqMatch.playerSet1 > reqMatch.playerSet2
    ? console.log(`${reqMatch.playerSet1} sets to ${reqMatch.playerSet2}`)
    : console.log(`${reqMatch.playerSet2} sets to ${reqMatch.playerSet1}`)
}
