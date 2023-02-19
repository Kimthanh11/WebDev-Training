var boxElement = document.querySelector(".box");
console.log(boxElement.classList);

// add
boxElement.classList.add("red");
console.log(boxElement.classList);
// contains
console.log(boxElement.classList.contains("red"));
// remove
boxElement.classList.remove("red");
// toggle
setInterval(() => {
  boxElement.classList.toggle("red");
}, 1000);
