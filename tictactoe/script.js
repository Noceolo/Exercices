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
    const boardState = GameBoard.getBoard()
    const fullBoard = !boardState.some(cell => cell === "");

    if (fullBoard === true){
        // futur win check fct
        // display the tie message if no one wins and board is full
    }
};

