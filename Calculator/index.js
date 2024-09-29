const pads = document.querySelectorAll(".pads");
pads.forEach((pad, index) => {
  pad.textContent = index + 1;
});
