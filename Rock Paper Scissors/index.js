let choices = ["Rock", "Paper", "Scissor"];
let userCountWin = 0;
let computerWinCount = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let usinpu = button.textContent;
    playRound(usinpu);
  });
});

function playRound(usinpu) {
  let winResult = play(usinpu);

  if (winResult === true) {
    userCountWin++;
  } else if (winResult === false) {
    computerWinCount++;
  }

  if (userCountWin === 5 || computerWinCount === 5) {
    decideWinner();
    userCountWin = 0;
    computerWinCount = 0;
  }

  // Update the UI with current scores
  document.querySelector("#user").textContent = `Your Score: ${userCountWin}`;
  document.querySelector(
    "#comp"
  ).textContent = `Computer's Score: ${computerWinCount}`;
}

const play = (userResponse) => {
  let computerResponse = computersChoice();
  let userWins = false;

  if (computerResponse === userResponse) {
    alert(`It's a tie! Both chose ${userResponse}`);
    return null;
  }

  if (
    (computerResponse === "Scissor" && userResponse === "Paper") ||
    (computerResponse === "Rock" && userResponse === "Scissor") ||
    (computerResponse === "Paper" && userResponse === "Rock")
  ) {
    alert(
      `Computer chose ${computerResponse}, You chose ${userResponse}: You Lose!`
    );
    return false;
  } else {
    alert(
      `Computer chose ${computerResponse}, You chose ${userResponse}: You Win!`
    );
    return true;
  }
};

const computersChoice = () => {
  let computerInput = Math.floor(Math.random() * choices.length);
  return choices[computerInput];
};

const decideWinner = () => {
  let winner = document.querySelector("#winner");

  if (userCountWin > computerWinCount) {
    winner.textContent = winner.textContent + "You!";
  } else if (computerWinCount > userCountWin) {
    winner.textContent = winner.textContent + "Computer";
  } else {
    winner.textContent =
      winner.textContent + "No winner, it's a tie. Play Again";
  }
};
