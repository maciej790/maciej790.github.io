const boxResultsH1 = document.querySelector(".result");
const computerIcon = document.querySelector(".Icon");
const allBtn = document.querySelectorAll("button");

const gameOptions = ["paper", "rock", "scissors"];

let userPoints = 0;
let computerPoints = 0;

const startGame = (e) => {
  e.preventDefault();

  const userChoose = e.target.className;
  const randomChoose = getRandomOption();

  compareResults(userChoose, randomChoose);
  showResults(randomChoose);
};

const getRandomOption = () => {
  const randomArrayElement = gameOptions[Math.floor(Math.random() * 3)];
  return randomArrayElement;
};

const compareResults = (userChoose, randomChoose) => {
  //for paper
  if (userChoose === "paper") {
    if (randomChoose === "scissors") {
      computerPoints++;
      console.log(`user: ${userChoose} computer: ${randomChoose} computer win`);
      return `user: ${userChoose} computer: ${randomChoose} computer win`;
    } else if (randomChoose === "rock") {
      userPoints++;
      console.log(`user: ${userChoose} computer: ${randomChoose} user win`);
      return `user: ${userChoose} computer: ${randomChoose} user win`;
    } else {
      console.log(`user: ${userChoose} computer: ${randomChoose} tie`);
      return `user: ${userChoose} computer: ${randomChoose} tie`;
    }
  }

  //for rock
  if (userChoose === "rock") {
    if (randomChoose === "paper") {
      computerPoints++;
      console.log(`user: ${userChoose} computer: ${randomChoose} computer win`);
      return `user: ${userChoose} computer: ${randomChoose} computer win`;
    } else if (randomChoose === "scissors") {
      userPoints++;
      console.log(`user: ${userChoose} computer: ${randomChoose} user win`);
      return `user: ${userChoose} computer: ${randomChoose} user win`;
    } else {
      console.log(`user: ${userChoose} computer: ${randomChoose} tie`);
      return `user: ${userChoose} computer: ${randomChoose} tie`;
    }
  }

  //for scisors
  if (userChoose === "scissors") {
    if (randomChoose === "rock") {
      computerPoints++;
      console.log(`user: ${userChoose} computer: ${randomChoose} computer win`);
      return `user: ${userChoose} computer: ${randomChoose} computer win`;
    } else if (randomChoose === "paper") {
      userPoints++;
      console.log(`user: ${userChoose} computer: ${randomChoose} user win`);
      return `user: ${userChoose} computer: ${randomChoose} user win`;
    } else {
      console.log(`user: ${userChoose} computer: ${randomChoose} tie`);
      return `user: ${userChoose} computer: ${randomChoose} tie`;
    }
  }
};

const showResults = (randomChoose) => {
  const resultIcon = `<i class="far fa-hand-${randomChoose} fa-3x">`;
  boxResultsH1.innerHTML = `${userPoints} : ${computerPoints}`;
  computerIcon.innerHTML = resultIcon;
};

allBtn.forEach((button) => {
  button.addEventListener("click", (e) => startGame(e));
});
