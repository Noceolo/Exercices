function createPlayer(name, marker, score){
  return { name, marker, score };
};

const GameBoard = (function() {
  const board = ["", "", "", "", "", "", "", "", ""];

  function getBoard() {
      return board;
  }

  function resetBoard(){
      board.fill("");
      return board;
  }

  return {
    getBoard,
    resetBoard
  };
})();




const GameController = (function () {
  let player1;
  let player2;
  let activePlayer;
  let boardState;
  let gameActive = false;


  const gameCells = document.querySelectorAll('div.boardSpace');
  const messageDisplay = document.getElementById('message');
  const scoreDisplay = document.getElementById('score');
  const resetButton = document.getElementById('reset-button');
  const playerForm = document.getElementById('player-form');


  function init(){
       
      gameCells.forEach((cell) => {
          cell.addEventListener('click', getEventTarget);
        });

      if (resetButton){
          resetButton.addEventListener('click', startGame);
      }

      if (playerForm){
          playerForm.addEventListener('submit', function(e) {
              e.preventDefault();
              playerCreation();
          });
      };
  };

  function playerCreation(){
      
      let playerName1 = document.getElementById("playerInput1").value;
      let playerName2 = document.getElementById("playerInput2").value;
  
      player1 = createPlayer(playerName1 || "Player 1", "X", 0); 
      player2 = createPlayer(playerName2 || "Player 2", "O", 0);
      
      startGame();
  }

  function startGame(){
      boardState = GameBoard.getBoard();
      activePlayer = player1;
      gameActive = true;

      updateScoreDisplay();
      updateMessageDisplay(`${activePlayer.name}'s turn (${activePlayer.marker})`);
      resetBoardDisplay();
  };


  function getEventTarget(event) {
      if (!gameActive) return;
      
      const cell = event.currentTarget;
      const index = cell.dataset.index;
      
      if (checkEmpty(index)) {
        
        placeMarker(index, activePlayer.marker);
        
        
        updateCellDisplay(cell, activePlayer.marker);
        
       
        if (checkWinCon()) {
          handleWin();
        } else if (checkFullBoard()) {
          handleDraw();
        } else {
          switchPlayer();
          updateMessageDisplay(`${activePlayer.name}'s turn (${activePlayer.marker})`);
        }
      }
    }

  function checkEmpty(index){
      return boardState[index] === '';
   };

  function placeMarker(index, marker){
      boardState[index] = marker;
  };

  function updateCellDisplay(cell, marker){
      cell.textContent = marker
      cell.classList.add(marker === 'X' ? "x-marker" : "o-marker");
  };

  function switchPlayer(){
      activePlayer = activePlayer === player1 ? player2 : player1;
  };

  function checkFullBoard(){
      return !boardState.some(cell => cell === "");
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
      return false;
  };


  function handleWin(){
      
      gameActive = false;
      activePlayer.score += 1;

      updateScoreDisplay();
      updateMessageDisplay(`${activePlayer.name} wins !`);
      
      
      

      if (activePlayer.score >= 3){
          updateMessageDisplay(`${activePlayer.name} wins the game !`);
      }else {
          setTimeout(startGame, 1500);
      }

  };

  function handleDraw(){
      gameActive = false;
      updateMessageDisplay("It's a tie");
      setTimeout(startGame, 1500);
  };

  function resetBoardDisplay(){
      GameBoard.resetBoard();

      gameCells.forEach(cell => {
          cell.textContent = "";
          cell.classList.remove('x-marker', 'o-marker');
      });

      
  };

  function updateMessageDisplay(message){
      if(messageDisplay){
          messageDisplay.textContent = message;
      }else {
          console.log(message);
      };
  };

  function updateScoreDisplay() {
      if (scoreDisplay && player1 && player2) {
        scoreDisplay.textContent = `${player1.name}: ${player1.score} vs ${player2.name}: ${player2.score}`;
      }
    }
      
  
  return {
      init,
      startGame,
      resetBoardDisplay,
      playerCreation
  };

})();

document.addEventListener('DOMContentLoaded', GameController.init);