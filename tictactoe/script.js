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


function checkEmpty(){
    // check if the value the player selected is empty in the array
    // if empty, place the player.marker in the spot, if not empty, ask the player to chose another spot
};

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
    // getPlayer, know wich player is playing
    // getPlayerChoice, get wich space he wants to fill, by number, remove 1 from it bc arrays starts at 0
};

function placeMarker(){
    // replace the array content by the player marker at the number he choses -1
}

function playerTurn(player){
    getPlayerChoice();
    checkEmpty();
    placeMarker();
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
