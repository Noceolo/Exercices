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




const GameController = (function() {
  
  function createPlayers() {
    let playerName1 = document.getElementById("playerInput1").value;
    let playerName2 = document.getElementById("playerInput2").value;
    
    const player1 = createPlayer(playerName1 || "Player 1", "X", 0); // Default name if empty
    const player2 = createPlayer(playerName2 || "Player 2", "O", 0);
    
    return { player1, player2 };
  };
  
  
  const { player1, player2 } = createPlayers();
    

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
        alert(`${activePlayer.name} wins the game !`,
                    `${player1.name} :` , player1.score ,"  vs " , `${player2.name} : `,player2.score);
        resetBoardDisplay()
        return
      }else
      alert(`${activePlayer.name} wins this round !`);
      resetBoardDisplay()
      alert(`${player1.name} :` , player1.score ,"  vs " , `${player2.name} : `,player2.score);
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





