$(document).ready(function () {

    
    var time = 5;
    var currentLevel = 5;
    let score = 0;
    let isPlaying;
    let uscore = 0;
    let sscore = 0;
    var userValue = null;

    $('.rock').on('click', function () {
        debugger;
        userValue = 'rock';
        $('.rock').css({ "width": "50px", "border": "2px solid orange", "border-radius": "50px" });
        $('.paper').css({ "width": "50px", "border": "1px solid transparent", "border-radius": "50px" });
        $('.scissor').css({ "width": "50px", "border": "1px solid transparent", "border-radius": "50px" });
        init();
    });
    
    $('.paper').on('click', function () {
        debugger;
        userValue = 'paper';
        $('.rock').css({ "width": "50px", "border": "1px solid transparent", "border-radius": "50px" });
        $('.paper').css({ "width": "50px", "border": "2px solid orange", "border-radius": "50px" });
        $('.scissor').css({ "width": "50px", "border": "1px solid transparent", "border-radius": "50px" });
        init();
    });

    $('.scissor').on('click', function () {
        debugger;
        userValue = 'scissor';
        $('.rock').css({ "width": "50px", "border": "1px solid transparent", "border-radius": "50px" })
        $('.paper').css({ "width": "50px", "border": "1px solid transparent", "border-radius": "50px" })
        $('.scissor').css({ "width": "50px", "border": "2px solid orange", "border-radius": "50px" })
        init();
    });

    
    // DOM Elements
    const userscore = document.querySelector('.userScore');
    const systemscore = document.querySelector('.systemScore');
    const systemvalue = document.querySelector('.systemValue');
    const systemvalueimage = document.querySelector('.systemValueImage');
    const resultText = document.querySelector('.resultText');
    const seconds = document.querySelector('#seconds');

    const choices = [
      'rock',
      'paper',
      'scissor'
    ];

   
    function init() {
        debugger;
        computerchoice(choices);
        startMatch();
        showScore();
        timer();
    }

    function timer() {
        debugger;
        if (time > 1){
            time = time - 1;
            seconds.innerHTML = time;
            $('body').css("background-image", "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://static.wixstatic.com/media/2f93da_0ea710572915421282f5440c89bf46d7~mv2_d_4963_2792_s_4_2.jpg')")
        }
        else {
            if (uscore > sscore)
            {
                resultText.innerHTML = 'Congratulations you have won !!!';
                $('body').css("background-image", "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://4.bp.blogspot.com/-0zLhtBgw1Ko/Wei9yhsWL-I/AAAAAAAAFrw/g1q6KnW0ZO0o6WoR1vtdiKiNWxhwehIhQCLcBGAs/s1600/fireworks.gif')");

            }
            else
            {
                resultText.innerHTML = 'Better luck next time !!!';
                $('body').css("background-image", "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://media.giphy.com/media/11xVhnKOKtAj5e/giphy.gif')")
            }
            uscore = 0;
            sscore = 0;
            seconds.innerHTML = 5;
            time = 5;
        }
    }

    function showScore() {
        debugger;
        userscore.innerHTML = uscore;
        systemscore.innerHTML = sscore;
    }
    
    function computerchoice(choices) {
        debugger;
        const randIndex = Math.floor(Math.random() * choices.length);
        systemvalue.innerHTML = choices[randIndex];
        if (systemvalue.innerHTML === 'rock')
            $('.systemValueImage').prop('src', 'rocks.PNG');
        else if(systemvalue.innerHTML === 'paper')
            $('.systemValueImage').prop('src', 'papers.PNG');
        else
            $('.systemValueImage').prop('src', 'scissorss.PNG');
     }

    function startMatch() {
        debugger;
        if (userValue === systemvalue.innerHTML) {
            debugger;
            resultText.innerHTML = 'Both neutralize each other';
            // do nothing
        }
        else {
            if (systemvalue.innerHTML === 'rock') {
                debugger;
                if (userValue === 'scissor') {
                    sscore = sscore + 1;
                    uscore = uscore + 0;
                    resultText.innerHTML = 'Rock breaks the Scissor. You lose !!!';
                }
                else {
                    sscore = sscore + 0;
                    uscore = uscore + 1;
                    resultText.innerHTML = 'Paper covers the rock. You win !!!';
                }
            }
            else if (systemvalue.innerHTML === 'paper') {
                debugger;
                if (userValue === 'rock') {
                    sscore = sscore + 1;
                    uscore = uscore + 0;
                    resultText.innerHTML = 'Paper covers the rock. You lose !!!';
                }
                else {
                    sscore = sscore + 0;
                    uscore = uscore + 1;
                    resultText.innerHTML = 'Scissor cuts the paper. You win !!!';
                }
            }
            else {
                debugger;
                if (userValue === 'paper') {
                    sscore = sscore + 1;
                    uscore = uscore + 0;
                    resultText.innerHTML = 'Scissor cuts the paper. You lose !!!';
                }
                else {
                    sscore = sscore + 0;
                    uscore = uscore + 1;
                    resultText.innerHTML = 'Stone breaks the Scissor. You win !!!';
                }
            }
        }
    }
});
