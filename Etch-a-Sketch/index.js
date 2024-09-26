const colorsArray = [
  "#FF5733", // Vibrant Orange
  "#33FF57", // Bright Green
  "#3357FF", // Bright Blue
  "#FF33A6", // Hot Pink
  "#FFFF33", // Yellow
  "#33FFF6", // Aqua
  "#FF8333", // Light Orange
  "#8D33FF", // Purple
  "#FF3380", // Pink
  "#33FF8D", // Mint Green
];

let gridSize = 16 * 16;

const container = document.querySelector(".container");
const btn = document.querySelector(".btn-top");

function createGrid(gridSize, newPixel) {
  container.innerHTML = ""; // Clear previous grid
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
  }

  const gridItems = document.querySelectorAll(".grid-item"); // Moved inside the function

  // Set the width and height of the grid items if newPixel is provided
  if (newPixel) {
    gridItems.forEach((gridItem) => {
      gridItem.style.width = newPixel + "px";
      gridItem.style.height = newPixel + "px";
    });
  }

  // Add event listeners for hover effect
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseenter", () => {
      let randomColor = Math.floor(Math.random() * colorsArray.length);
      gridItem.style.backgroundColor = colorsArray[randomColor];
    });
  });
}

// Initial grid creation
createGrid(gridSize);

// Button click event to prompt for grid size and recreate grid
btn.addEventListener("click", () => {
  let useInp = prompt("Number of squares per side for the new grid:");
  let newSize = parseInt(useInp);

  if (!isNaN(newSize) && newSize >= 1 && newSize < 100) {
    gridSize = newSize * newSize; // Update gridSize based on user input
    createGrid(gridSize, newSize); // Pass the new size to set grid item dimensions
  } else {
    alert("Please enter a valid number between 1 and 99.");
  }
});
