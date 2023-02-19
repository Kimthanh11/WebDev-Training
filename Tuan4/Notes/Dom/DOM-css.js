// DOM style

var boxElement = document.querySelector(".box");
console.log(boxElement.style);
// boxElement.style.width = "100px";
// boxElement.style.height = "100px";
// boxElement.style.backgroundColor = "red";

// css inline
Object.assign(boxElement.style, {
  width: "200px",
  height: "100px",
  backgroundColor: "green",
});

//Challenge
var divElement = document.querySelector(".red");
divElement.style.backgroundColor = "#f00";
var pElement = document.querySelector("p");
pElement.style.color = "#f05123";
