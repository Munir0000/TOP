let choices = ["Rock", "Paper", "Scissor"];

const acceptUserInput = () => {
  let userInput = prompt("Choose: Rock, Paper, or Scissor").trim();
  return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
};

const computersChoice = () => {
  let computerInput = Math.floor(Math.random() * choices.length);
  return choices[computerInput];
};

const Play = () => {
  let computerResponse = computersChoice();
  let userResponse = acceptUserInput();

  if (computerResponse === userResponse) {
    return `It's a tie! Both chose ${userResponse}.`;
  }
  if (computerResponse === "Scissor" && userResponse === "Paper") {
    return "Computer chose Scissor, You chose Paper: You Lose!";
  } else if (computerResponse === "Paper" && userResponse === "Scissor") {
    return "Computer chose Paper, You chose Scissor: You Win!";
  }

  if (computerResponse === "Rock" && userResponse === "Scissor") {
    return "Computer chose Rock, You chose Scissor: You Lose!";
  } else if (computerResponse === "Scissor" && userResponse === "Rock") {
    return "Computer chose Scissor, You chose Rock: You Win!";
  }

  if (computerResponse === "Paper" && userResponse === "Rock") {
    return "Computer chose Paper, You chose Rock: You Lose!";
  } else if (computerResponse === "Rock" && userResponse === "Paper") {
    return "Computer chose Rock, You chose Paper: You Win!";
  }
};

alert(Play());
