//What information we need from player
/*
1.PlayerIndentity i.e 1 or 2
2. gameId,
3. secret password
4. squareKey
5. rowId
6. colId
7. squarefeild string Id
*/

function verification(playerinfo, gameData) {
  // console.log("Inside verification", playerinfo, gameData);
  if (gameData.has(playerinfo.gameId) == true) {
    // console.log("Verification gameId exists");
    // Identify the player1/2 with password given to them
    // console.log(
    //   "How to access the game password",
    //   gameData.get(playerinfo.gameId)[playerinfo.player]["password"]
    // );
    if (
      gameData.get(playerinfo.gameId)[playerinfo.player]["password"] ==
      playerinfo.password
    ) {
      //create the data to send to player2
      // console.log("Verification of player with password", "success");
      return true;
    }
  }
}

module.exports.verification = verification;

// function updatePlayerMove(gameData, updateMoveObj) {}
