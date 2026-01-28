const score = {
  wins: 0,
  losses: 0,
  ties: 0
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  document.querySelector('.js-scoreboard').innerHTML =
    `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;

  document.querySelector('.js-score').innerHTML = 'Result: ';
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {

    if (computerMove === 'rock') {
      result = 'Tie';
    }
    else if (computerMove === 'paper') {
      result = 'You lose';
    }
    else if (computerMove === 'scissor') {
      result = 'You win';
    }

  } else if (playerMove === 'paper') {

    if (computerMove === 'rock') {
      result = 'You win';
    }
    else if (computerMove === 'paper') {
      result = 'Tie';
    }
    else if (computerMove === 'scissor') {
      result = 'You lose';
    }

  } else if (playerMove === 'scissor') {

    if (computerMove === 'rock') {
      result = 'You lose';
    }
    else if (computerMove === 'paper') {
      result = 'You win';
    }
    else if (computerMove === 'scissor') {
      result = 'Tie';
    }
  }

  if (result === "You win") score.wins++;
  else if (result === "You lose") score.losses++;
  else score.ties++;

  document.querySelector('.js-score').innerHTML =
    `You ${playerMove} , compute ${computerMove}`;

  document.querySelector('.js-result').innerHTML = 
    `Result : ${result}`;
  document.querySelector('.js-scoreboard').innerHTML =
    `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else {
    computerMove = 'scissor';
  }
  return computerMove;
}