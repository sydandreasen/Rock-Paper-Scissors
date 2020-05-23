let userScore = 0;
let opponentScore = 0;

let rockTotal = 0;
let rockWins = 0;
let rockLosses = 0;
let rockDraws = 0;

let paperTotal = 0;
let paperWins = 0;
let paperLosses = 0;
let paperDraws = 0;

let scissorsTotal = 0;
let scissorsWins = 0;
let scissorsLosses = 0;
let scissorsDraws = 0;

const userScoreDisplay = document.getElementById("you-score");
const opponentScoreDisplay = document.getElementById("opponent-score");

const scoreboard = document.querySelector(".scoreboard");
const message = document.querySelector(".message");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const rock_wins = document.getElementById("rock-wins");
const rock_losses = document.getElementById("rock-losses");
const rock_draws = document.getElementById("rock-draws");
const rock_success = document.getElementById("rock-success");

const paper_wins = document.getElementById("paper-wins");
const paper_losses = document.getElementById("paper-losses");
const paper_draws = document.getElementById("paper-draws");
const paper_success = document.getElementById("paper-success");

const scissor_wins = document.getElementById("scissors-wins");
const scissor_losses = document.getElementById("scissors-losses");
const scissor_draws = document.getElementById("scissors-draws");
const scissor_success = document.getElementById("scissors-success");

main();

function main()
{
    rock.addEventListener('click', function() {
        play(1);
        rotate(rock);
    });

    paper.addEventListener('click', function() {
        play(2);
        rotate(paper);
    });

    scissors.addEventListener('click', function() {
        play(3);
        rotate(scissors);
    });
}

function play(choice)
{
    against = Math.floor(Math.random() * 3) + 1;

    if (choice - against == 0)
    {
        // draw
        message.innerHTML = "Draw. Play Again.";
        if (choice == 1)
        {
            rock.classList.add('draw-border');
            undoGlow("rock", "draw-border");
            rockTotal++;
            rockDraws++;
            rock_draws.innerHTML = rockDraws;
        }
        else if (choice == 2)
        {
            paper.classList.add('draw-border');
            undoGlow("paper", "draw-border");
            paperTotal++;
            paperDraws++;
            paper_draws.innerHTML = paperDraws;
        }
        else if (choice == 3)
        {
            scissors.classList.add('draw-border');
            undoGlow("scissors", "draw-border");
            scissorsTotal++;
            scissorsDraws++;
            scissor_draws.innerHTML = scissorsDraws;
        }
    }
    else if (choice == 1 && against == 2)
    {
        // rock against paper, lose
        message.innerHTML = "You lose. Paper covers rock.";
        opponentScore++;
        opponentScoreDisplay.innerHTML = opponentScore; 
        rock.classList.add('lose-border');
        undoGlow("rock", "lose-border");
        rockTotal++;
        rockLosses++;
        rock_losses.innerHTML = rockLosses;
    }
    else if (choice == 1 && against == 3)
    {
        // rock against scissors, win
        message.innerHTML = "You win. Rock crushes scissors.";
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        rock.classList.add('win-border');
        undoGlow("rock", "win-border");
        rockTotal++;
        rockWins++;
        rock_wins.innerHTML = rockWins;
    }
    else if (choice == 2 && against == 1)
    {
        // paper against rock, win
        message.innerHTML = "You win. Paper covers rock.";
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        paper.classList.add('win-border');
        undoGlow("paper", "win-border");
        paperTotal++;
        paperWins++;
        paper_wins.innerHTML = paperWins;
    }
    else if (choice == 2 && against == 3)
    {
        // paper against scissors, lose
        message.innerHTML = "You lose. Scissor cuts paper.";
        opponentScore++;
        opponentScoreDisplay.innerHTML = opponentScore;
        paper.classList.add('lose-border');
        undoGlow("paper", "lose-border");
        paperTotal++;
        paperLosses++;
        paper_losses.innerHTML = paperLosses;
    }
    else if (choice == 3 && against == 1)
    {
        // scissors against rock, lose
        message.innerHTML = "You lose. Rock crushes scissors.";
        opponentScore++;
        opponentScoreDisplay.innerHTML = opponentScore;
        scissors.classList.add('lose-border');
        undoGlow("scissors", "lose-border");
        scissorsTotal++;
        scissorsLosses++;
        scissor_losses.innerHTML = scissorsLosses;
    }
    else if (choice == 3 && against == 2)
    {
        // scissors against paper, win
        message.innerHTML = "You win. Scissor cuts paper.";
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        scissors.classList.add('win-border');
        undoGlow("scissors", "win-border");
        scissorsTotal++;
        scissorsWins++;
        scissor_wins.innerHTML = scissorsWins;
    }

    if (rockTotal > 0)
    {
        rock_success.innerHTML = Math.round(rockWins * 100 / rockTotal);
        Math.round(rockWins * 100 / rockTotal) >= 33 ? 
            document.getElementById("rock-thumb").style.transform = "rotate(0deg)" : 
            document.getElementById("rock-thumb").style.transform = "rotate(180deg)";
    }
    if (paperTotal > 0)
    {
        paper_success.innerHTML = Math.round(paperWins * 100 / paperTotal);
        Math.round(paperWins * 100 / paperTotal) >= 33 ? 
            document.getElementById("paper-thumb").style.transform = "rotate(0deg)" : 
            document.getElementById("paper-thumb").style.transform = "rotate(180deg)";
    }
    if (scissorsTotal > 0)
    {
        scissor_success.innerHTML = Math.round(scissorsWins * 100 / scissorsTotal);
        Math.round(scissorsWins * 100 / scissorsTotal) >= 33 ? 
            document.getElementById("scissors-thumb").style.transform = "rotate(0deg)" : 
            document.getElementById("scissors-thumb").style.transform = "rotate(180deg)";
    }

    function undoGlow(choice, classRemove)
    {
        setTimeout(function () {document.getElementById(choice).classList.remove(classRemove);}, 300);
    }
}

function rotate(choice, angle)
{
    choice.style.transform += "rotate(360deg)";
}