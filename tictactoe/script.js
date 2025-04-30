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
    const winCons = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6], [0,4,8]];
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
      const boardState = GameBoard.getBoard();

      if (boardState[playerChoice] === ""){
        return true;
      }else return false;
  };

function placeMarker(playerChoice, marker){
    const boardState = GameBoard.getBoard();
    boardState[playerChoice] = marker
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
