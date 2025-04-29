const GameBoard = (function() {
    const board = ["", "", "", "", "", "", "", "", ""];
  
    function getBoard() {
      return board;
    }
  
    return {
      getBoard
    };
  })();


function createPlayer(name, marker){
    return { name, marker };
};

function checkFullBoard(){
    GameBoard.getBoard()
    let fullBoard = board.find(emptySpace);

    function emptySpace(value, index, array){
        return value === "";
    };
    
};