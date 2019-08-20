// 5 parts 



//anonymous function 

window.onload = function () {

    //1. Initial states 
    debugger;
    var num;

    var box;

    var ctx;

    var turn = 0;

    var filled;

    var symbol;

    var winner;

    var gameOver = false;

    filled = [false, false, false, false, false, false, false, false, false];

    symbol = ['', '', '', '', '', '', '', '', ''];

    winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    var choices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var userSelections = [];

    //2. NewGame - event + function 

    //Create a new game click event

    var n = document.getElementById("new");

    n.addEventListener("click", newGame);



    //newGame function

    function newGame() {

        document.location.reload();

    }



    //3. Canvas click + retrieving the box's number 

    //canvas click event 

    document.getElementById("tic").addEventListener("click", function (e) {
        debugger;
        boxClick(e.target.id);
    });



    function boxClick(numId) {
        debugger;
        box = document.getElementById(numId);

        ctx = box.getContext("2d");



        switch (numId) {

            case "canvas1": num = 1;

                break;

            case "canvas2": num = 2;

                break;

            case "canvas3": num = 3;

                break;

            case "canvas4": num = 4;

                break;

            case "canvas5": num = 5;

                break;

            case "canvas6": num = 6;

                break;

            case "canvas7": num = 7;

                break;

            case "canvas8": num = 8;

                break;

            case "canvas9": num = 9;

                break;

        }

        userSelections.push(num);
        //Drawing the shapes on the canvases 

        if (filled[num - 1] == false) {

            if (gameOver == false) {

                    ctx.beginPath();

                    ctx.moveTo(15, 15);

                    ctx.lineTo(85, 85);

                    ctx.moveTo(85, 15);

                    ctx.lineTo(15, 85);

                    ctx.strokeStyle = "dodgerblue";

                    ctx.stroke();

                    ctx.closePath();

                    symbol[num - 1] = 'X';
                    filled[num - 1] = true;
                    turn = turn + 1;

                    for (var j = 0; j < winner.length; j++) {

                        if ((symbol[winner[j][0]] == 'X') && (symbol[winner[j][1]] == 'X') && (symbol[winner[j][2]] == 'X')) {
                            document.getElementById("result").innerText = "Congratulations you have won!";
                            gameOver = true;
                            break;
                        }
                    }

                   
                    var sValue = systemMove();
                    userSelections.push(sValue);
                    var box1 = document.getElementById('canvas'+sValue);

                    var ctx1 = box1.getContext("2d");

                    if (filled[sValue-1] == false) {
                        if (gameOver == false) {
                                ctx1.beginPath();

                                ctx1.arc(50, 50, 35, 0, 2 * Math.PI, false);

                                ctx1.strokeStyle = "dodgerblue";

                                ctx1.stroke();

                                ctx1.closePath();

                                symbol[sValue - 1] = 'O';
                            }
                        }
                turn = turn + 1;

                
                filled[sValue - 1] = true;


                //5. Winner check 

                //var s = symbol[num - 1];

                for (var j = 0; j < winner.length; j++) {
                    if ((symbol[winner[j][0]] == 'O') && (symbol[winner[j][1]] == 'O') && (symbol[winner[j][2]] == 'O')) {
                            document.getElementById("result").innerText = "Better Luck next time!";
                            gameOver = true;
                            break;
                    }
                }



                //draw condition 

                // turn > 0 gameOver == false

                if (turn >=8 && gameOver != true) {

                    document.getElementById("result").innerText = "GAME OVER! IT WAS A DRAW!";

                }

            }

            else {

                alert("Game is over. Please click on the New Game button to start again.");

            }

        }

        else {

            alert("This box was already filled. Please click on another one.")

        }

    }

    function systemMove() {
        debugger;
        const randIndex = Math.floor(Math.random() * choices.length);
        var systemChoice = choices[randIndex];
        var flag = false;
        var arrayLength = userSelections.length;
        for (var i = 0; i < arrayLength; i++) {
            if (systemChoice === userSelections[i]) {
                flag = true;
                break;
            }
            else {
                continue;
            }
        }
        if (flag === true) {
            return systemMove();
        }
        else {
            return systemChoice;
        }
    }
}
