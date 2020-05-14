let userScore = 0;
let opponentScore = 0;

const userScoreDisplay = document.getElementById("you-score");
const opponentScoreDisplay = document.getElementById("opponent-score");

const scoreboard = document.querySelector(".scoreboard");
const message = document.querySelector(".message");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

main();

function main()
{
    rock.addEventListener('click', function() {
        play(1);
    });

    paper.addEventListener('click', function() {
        play(2);
    });

    scissors.addEventListener('click', function() {
        play(3);
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
        }
        else if (choice == 2)
        {
            paper.classList.add('draw-border');
            undoGlow("paper", "draw-border");
        }
        else if (choice == 3)
        {
            scissors.classList.add('draw-border');
            undoGlow("scissors", "draw-border");
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
    }
    else if (choice == 1 && against == 3)
    {
        // rock against scissors, win
        message.innerHTML = "You win. Rock crushes scissors.";
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        rock.classList.add('win-border');
        undoGlow("rock", "win-border");
    }
    else if (choice == 2 && against == 1)
    {
        // paper against rock, win
        message.innerHTML = "You win. Paper covers rock.";
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        paper.classList.add('win-border');
        undoGlow("paper", "win-border");
    }
    else if (choice == 2 && against == 3)
    {
        // paper against scissors, lose
        message.innerHTML = "You lose. Scissor cuts paper.";
        opponentScore++;
        opponentScoreDisplay.innerHTML = opponentScore;
        paper.classList.add('lose-border');
        undoGlow("paper", "lose-border");
    }
    else if (choice == 3 && against == 1)
    {
        // scissors against rock, lose
        message.innerHTML = "You lose. Rock crushes scissors.";
        opponentScore++;
        opponentScoreDisplay.innerHTML = opponentScore;
        scissors.classList.add('lose-border');
        undoGlow("scissors", "lose-border");
    }
    else if (choice == 3 && against == 2)
    {
        // scissors against paper, win
        message.innerHTML = "You win. Scissor cuts paper.";
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        scissors.classList.add('win-border');
        undoGlow("scissors", "win-border");
    }

    function undoGlow(choice, classRemove)
    {
        setTimeout(function () {document.getElementById(choice).classList.remove(classRemove);}, 500);
    }
}