// Code your JavaScript / jQuery solution here
var turn =  0

$(document).ready(function(){
    attachListeners()
})

 function attachListeners(){
    $("td").click(function() {
    doTurn(this)
    });
 }


function doTurn(square){
   updateState(square) ;
    turn = turn + 1
 if (checkWinner()){
   //  board === ""
   reset()
 }else if (turn ===  9){
   setMessage("Tie game.")
    reset()
 }

// if else statment( checking if the one or not).. No ternnary
 
}

function player(){
   return turn % 2 === 0 ? "X" :"O" 
//    modulo operator (%)
//  X or O is called token in here
}

function updateState(square){
       var token = player()
 $(square).append(token);
}

function checkWinner(){
   WIN_COMBINATIONS= [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2],

 ]
//   Creat empty Object.
   board = [] 
     document.querySelectorAll("td").forEach(function(square){
     board.push(square.textContent)
 })

//  Iterate through win combination. [.each] with each make you i specefically return a token (E.G return X is it wins or O if O wins),
var winner = false

WIN_COMBINATIONS.forEach(function(win_combination) {
   win_index_1 = win_combination[0] 
   win_index_2 = win_combination[1]
   win_index_3 = win_combination[2]

   position_1 = board[win_index_1]
   position_2 = board[win_index_2]
   position_3 = board[win_index_3]
   

   if (position_1 === position_2 && position_2 === position_3 && position_1 !== ""){
      setMessage(`Player ${ position_1 } Won!`)
      return winner = true
    }
   }
)

return winner

// Check each against what token are on the board...
// Logic of tic-tac toe of CLI> 

}

function setMessage(string){
   document.getElementById("message").innerHTML = string

}


function reset(){
   $("td").empty()
   turn = 0
}