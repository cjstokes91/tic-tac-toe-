//*---constants---*// 
const colors = {
  '1': 'O',
  '-1': 'X',
  'null': 'white'
}

const players = {
  '1': 'Player 1',
  '-1': 'Player 2'
}

const winnnigCombos = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];


//**---state variables---*//
  let gameBoard; 
  let whoseTurn;  
  let winner; 
  // let currMove = [];


//*---cached element references---*/
var squares = document.querySelectorAll('td div');
var message = document.querySelector('h1');


// let message = document.querySelector('h1');


//*event-listeners--//
document.querySelector('table').addEventListener('click', function(event){handleMove(event)}); 
document.querySelector('button').addEventListener('click', init);

//*---funtions---*// 
 init(); 

function handleMove(event) { 
  const squarePicked = event.target.id
  // change inner html to either x or o
  if(!winner && !gameBoard[squarePicked]) {
    gameBoard[squarePicked] = whoseTurn; 
    winnerCheck(); 
    changeTurn(); 
    render(); 
  }
}

function winnerCheck() { 
  winnnigCombos.forEach(function(combo) { 
    if (Math.abs(gameBoard[combo[0]] + gameBoard[combo[1]] + gameBoard[combo[2]]) === 3) {
      winner = whoseTurn;
      console.log(Math.abs(gameBoard[combo[0]] + gameBoard[combo[1]] + gameBoard[combo[2]]), winner);
    } else if(gameBoard.includes(!null)){
      winner = 'T';
    }
  });
};

function render() { 
  // render empty board 

  event.target.innerText = colors[whoseTurn]; 

  gameBoard.forEach((elem, idx) => {
    if(elem === '1') {
      squares[idx].innerText = 'X'; 
    } else if (elem === '-1') {
      squares[idx].innerText = 'O';
    } else {
      squares[idx].innerText = 'Its a tie'; 

    }
  })
if(winner !== null && (winner == 1 || -1) ) { 
    message.innerHTML =`Congrats ${players[winner]} you win!`; 
  } else if(winner === 'T'); {
    // return 'its a tie!!'; 
  }
} 

  function changeTurn(){ 
  whoseTurn *= -1; 
  
  // check to see whos turn 

  
}
function init() { 
gameBoard = [null, null, null, null, null, null, null, null, null]; 
whoseTurn = 1; 
winner = null; 
// render(); 
}



// Game Start
// init(); 