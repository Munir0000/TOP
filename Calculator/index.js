const pads = document.querySelectorAll(".padsContainer .btn");
const screen = document.querySelector("span");
const btnclear = document.querySelector("#one");
let resultArray = [];

btnclear.addEventListener("click", () => {
  screen.textContent = "0";
  resultArray = [];
});

pads.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value) || value === ".") {
      screen.textContent =
        screen.textContent === "0" ? value : screen.textContent + value;
    }

    if (value === "+" || value === "−" || value === "×" || value === "÷") {
      resultArray.push(parseFloat(screen.textContent));
      resultArray.push(value);
      screen.textContent = "";
    }

    if (value === "=") {
      resultArray.push(parseFloat(screen.textContent));
      let result = resultArray.reduce((acc, cur, index, arr) => {
        if (typeof cur === "number") {
          return acc;
        } else if (cur === "+") {
          return acc + arr[index + 1];
        } else if (cur === "−") {
          return acc - arr[index + 1];
        } else if (cur === "×") {
          return acc * arr[index + 1];
        } else if (cur === "÷") {
          return acc / arr[index + 1];
        }
      }, resultArray[0]);

      screen.textContent = result;
      resultArray = [];
    }
  });
});
