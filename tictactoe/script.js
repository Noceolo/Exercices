function createPlayer(name, marker){
    return { name, marker };
};

const GameBoard = (function() {
    const board = ["", "", "", "", "", "", "", "", ""];
  
    function getBoard() {
      return board;
    }
  
    return {
      getBoard
    };
  })();


  
  function checkFullBoard(){
    const boardState = GameBoard.getBoard();
    const fullBoard = !boardState.some(cell => cell === "");
    
    if (fullBoard === true){
      // display the tie message if no one wins and board is full
    };
  };
  
  
  
  function checkWinCon(){
    const boardState = GameBoard.getBoard();
    // win cons : same marker on 3 spaces in a row

    // array number : 012, 345, 678, 036, 147, 258, 246, 048
  };
  
  
  function getPlayerChoice(){
    let playerChoice = prompt("1 | 2 | 3 \n4 | 5 | 6\n7 | 8 | 9\n choose a space");
    if(playerChoice === null || playerChoice === ""){
      console.log("maybe another time then");
    }else if(isNaN(playerChoice)){
      console.log("You need to pick a number");
      
    }else if (playerChoice <= 0 || playerChoice >= 10){
      console.log("You need to pick a space between 1 and 9 buddy");
    }else {
      return playerChoice = playerChoice - 1;
    };
  };

  function checkEmpty(playerChoice){
      // check if the value the player selected is empty in the array
      const boardState = GameBoard.getBoard();

      if (boardState[playerChoice] === ""){
        return true;
      }else return false;
  };

function placeMarker(playerChoice, marker){
    // replace the array content by the player marker at the number he choses -1
    const boardState = GameBoard.getBoard();
    boardState[playerChoice] = marker // will be replaced by player.marker
    console.log(boardState);


}

function playerTurn(player){
    const choice = getPlayerChoice();
    if (choice === undefined) return;
    if (checkEmpty(choice)){
      placeMarker(choice,player.marker);
    }else 
    console.log("that space is already taken")
}

const GameController = (function() {
    // i'm still confused about IIFE
    // playerTurn();
    // checkWinCon();
    // checkFullBoard();
    // switch active player;
})


const player1 = createPlayer("Mark", "X");
const player2 = createPlayer("Megan", "O");

console.log("1 | 2 | 3 \n4 | 5 | 6\n7 | 8 | 9");
