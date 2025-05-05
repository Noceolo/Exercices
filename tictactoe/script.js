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
 

 
 // score keeper


 // updating the display
const GameController = (function() {
    // i'm still confused about IIFE
    const player1 = createPlayer("Mark", "X", 0);
    const player2 = createPlayer("Megan", "O", 0);
    const boardState = GameBoard.getBoard();
    let activePlayer = player1;


    function resetBoard(){
      boardState.fill("");
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

    function checkWinner(player){
      if (player.score === 3){
        console.log(`${activePlayer.name} wins the game !`)
        return
      };
    };
    
    function playTurn(){
      const choice = getPlayerChoice();
      if (choice === undefined) return;
      if (checkEmpty(choice)){
        placeMarker(choice,activePlayer.marker);
      }else {
      console.log("that space is already taken")
      playTurn();
      return;
      }

      if (checkWinCon()){
        console.log(`${activePlayer.name} wins this round !`);
        activePlayer.score += 1
        resetBoard();
        console.log(`${player1.name} :` , player1.score ,"  vs " , `${player2.name} : `,player2.score);
        return;
      };

      if (checkWinner(activePlayer)){
        console.log(`${activePlayer.name} wins the game !`);
      };

      if (checkFullBoard()){
        console.log("It's a tie");
        resetBoard();
        return
      };

      switchPlayer();
      playTurn();
    };

    function StartGame(){
      console.log("1 | 2 | 3 \n4 | 5 | 6\n7 | 8 | 9");
      playTurn();
    }
    return { StartGame };
})();





