let choices = ["Rock", "Paper", "Scissor"];

const acceptUserInput = () => {
  let userInput = prompt("Choose: Rock, Paper, or Scissor").trim();
  return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
};

const computersChoice = () => {
  let computerInput = Math.floor(Math.random() * choices.length);
  return choices[computerInput];
};

let userCountWin = 0;
let computerWinCount = 0;

const play = () => {
  let computerResponse = computersChoice();
  let userResponse = acceptUserInput();

  if (computerResponse === userResponse) {
    alert(`It's a tie! Both chose ${userResponse}`);
    return null;
  }

  let userWins = false;

  if (computerResponse === "Scissor" && userResponse === "Paper") {
    alert("Computer chose Scissor, You chose Paper: You Lose!");
  } else if (computerResponse === "Paper" && userResponse === "Scissor") {
    alert("Computer chose Paper, You chose Scissor: You Win!");
    userWins = true;
  }

  if (computerResponse === "Rock" && userResponse === "Scissor") {
    alert("Computer chose Rock, You chose Scissor: You Lose!");
  } else if (computerResponse === "Scissor" && userResponse === "Rock") {
    alert("Computer chose Scissor, You chose Rock: You Win!");
    userWins = true;
  }

  if (computerResponse === "Paper" && userResponse === "Rock") {
    alert("Computer chose Paper, You chose Rock: You Lose!");
  } else if (computerResponse === "Rock" && userResponse === "Paper") {
    alert("Computer chose Rock, You chose Paper: You Win!");
    userWins = true;
  }

  return userWins;
};

const decideWinner = () => {
  if (userCountWin > computerWinCount) {
    alert(
      `Congratulations! You have won!
        Your Score: ${userCountWin}
        Computer's Score: ${computerWinCount}`
    );
  } else if (computerWinCount > userCountWin) {
    alert(
      `You Lose! Play Again
        Your Score: ${userCountWin}
        Computer's Score: ${computerWinCount}`
    );
  } else {
    alert(
      `No winner, it's a tie. Play Again.
        Your Score: ${userCountWin}
        Computer's Score: ${computerWinCount}`
    );
  }
};

function playRound() {
  for (let i = 0; i < 5; i++) {
    alert(`Round: ${i + 1}`);
    let winResult = play();
    if (winResult === true) {
      userCountWin++;
    } else if (winResult === false) {
      computerWinCount++;
    }

    if (i === 4) {
      decideWinner();
    }
  }
}

playRound();
