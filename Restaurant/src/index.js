import "./style.css"; // Adjust the path to your CSS file accordingly
import createHomeContent from "./home";
console.log("JavaScript is running!");

document.addEventListener("DOMContentLoaded", () => {
  const mainDiv = document.querySelector(".main");
  const homeContent = createHomeContent();
  mainDiv.appendChild(homeContent);
});
