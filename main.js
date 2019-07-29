var game = {
    '1': 'X',
    '-1': 'O',
    '0': 'white',
}
var win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2], 
];

let board;
let turn;
let winner;

let boxes = document.querySelectorAll('.box');
playGame();

function handleClick(evt){
    var idx = parseInt(evt.target.id)
    board[idx] = turn;
    turn *= -1;
    render();
}

function playGame(){
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    for(var i = 0; i < boxes.length, i++;) {
        boxes[i].innerText = '';
        boxes[i].addEventListener('click', handleClick)
    }
    render();
}
function render(){
    board.forEach(function(sq, idx){
        boxes[idx].style.background = game[sq];
    });
}