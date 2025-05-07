function createPlayer(name, marker, score){
    return { name, marker, score };
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


 //still need to build :
 // all the display part
 // updating the display

function updateBoard(){
  
};




const GameController = (function() {
  // i'm still confused about IIFE
  const player1 = createPlayer("Mark", "X", 0);
  const player2 = createPlayer("Megan", "O", 0);

  const boardState = GameBoard.getBoard();

  const gameCell = document.querySelectorAll('div.boardSpace');
  gameCell.forEach((cell) => {
    cell.addEventListener('click', getEventTarget);
  });
  let activePlayer = player1;
  
  
  
  function resetBoard(){
    boardState.fill("");
  }
  
  
  function resetBoardDisplay() {
    resetBoard(); 
    const gameCells = document.querySelectorAll('div.boardSpace');
    gameCells.forEach(cell => {
      cell.textContent = '';
    });
  }
  function checkEmpty(playerChoice){
    if (boardState[playerChoice] === ""){
      return true;
    }else return false;
  };
  
  
  function placeMarker(playerChoice, marker){
    boardState[playerChoice] = marker
    console.log(boardState);
  };
  
  
  function switchPlayer(){
    if (activePlayer === player1){
      activePlayer = player2
    }else {
      activePlayer = player1
    };
  };
  
  function checkFullBoard(){
    const fullBoard = !boardState.some(cell => cell === "");
    
    if (fullBoard === true){
      return true;
    };
  };
  
  function checkWinCon(){
    const winCons = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6], [0,4,8]];
    
    for (let combo of winCons){
      
      const first = combo[0]
      const second = combo[1]
      const third = combo[2]
      if (boardState[first] === boardState[second] && boardState[second] === boardState[third] && boardState[first] !== "")
        return true;
    };
  };

  function getEventTarget(event){
    const cell = event.currentTarget
    const index = cell.dataset.index
  
    if (checkEmpty(index)){
      placeMarker(index, activePlayer.marker);
  
      cell.textContent = activePlayer.marker;
    }else {
      alert('This space is already taken');
    };
  
    if (checkWinCon()){
      activePlayer.score += 1
      if (activePlayer.score >= 3){
        console.log(`${activePlayer.name} wins the game !`,
                    `${player1.name} :` , player1.score ,"  vs " , `${player2.name} : `,player2.score);
        resetBoardDisplay()
        return
      }else
      console.log(`${activePlayer.name} wins this round !`);
      resetBoardDisplay()
      console.log(`${player1.name} :` , player1.score ,"  vs " , `${player2.name} : `,player2.score);
      return;
    };
  
    if (checkFullBoard()){
      console.log("It's a tie");
      resetBoardDisplay()
      return
    };
    switchPlayer();
  
  };
  
})();





