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
        // futur win check fct
        // display the tie message if no one wins and board is full
    }
};


function checkEmpty(){
    // check if the value the player selected is empty in the array
    // if empty, place the player.marker in the spot, if not empty, ask the player to chose another spot
};

function checkWinCon(){
    const boardState = GameBoard.getBoard();
    // win cons : same marker on 3 spaces in a row
    // array number : 012, 345, 678, 036, 147, 258, 246, 048
};
