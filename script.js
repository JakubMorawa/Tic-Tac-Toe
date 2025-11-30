let board =[[0,0,0],
        [0,0,0],
        [0,0,0],];

const winning_lines = [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],

        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],

        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]],
    ];

let turn = 1;
let gameOn = true;

function tictactoe(button) {
    if (gameOn) {
        if (button.innerHTML == ''){
            position = parseInt(button.id)-1;
            if(board[Math.floor(position/3)][position%3] == 0){ 
    
                board[Math.floor(position/3)][position%3] = turn;
    
                if(turn == 1){
                    button.innerHTML = "X";
                }else{
                    button.innerHTML = "O";
                }
                if(turn == 1){
                    turn = 2;
                }else{
                    turn = 1;
                }
            }
        }
        let ifwin = checkWin();
        let result = document.getElementById("result");
        if ( ifwin == 1){
            result.innerText = "X WINS!!!";
            gameOn = false;
        }
    
        if ( ifwin == 2){
            result.innerText = "O WINS!!!"
            gameOn = false;
        }

        if ( ifwin == 3){
            result.innerText = "TIE!!!"
            gameOn = false;
        }
    }
}

function checkWin(){
    for(let i = 0; i<winning_lines.length; i++){
        let oCross = 0;
        let xCross = 0;
        for(let j = 0; j<3; j++){
            if (board[winning_lines[i][j][0]][winning_lines[i][j][1]] == 1){
                xCross +=1;
            }else if (board[winning_lines[i][j][0]][winning_lines[i][j][1]] == 2){
                oCross +=1;
            }
        }
        if(xCross == 3){
            return 1;
        }else if(oCross == 3){
            return 2;
        }
    }

    let nonzeros = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(board[i][j] != 0){
                nonzeros+=1;
            }
        }
    }
    if (nonzeros == 9){
        return 3;
    }
    return 0;
}    


function restart(){
    board =[[0,0,0],
        [0,0,0],
        [0,0,0],];

    for(let i = 1; i<=9;i++){
        buttonByIndex = document.getElementById(i.toString());
        buttonByIndex.innerText = "";
        let result = document.getElementById("result");
        result.innerText = "";
    }
    gameOn= true;
}