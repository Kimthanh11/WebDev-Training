// Event listenter
// 1. Xu ly nhieu viec khi 1 event xay ra
// 2. Lang nghe / Huy bo lang nghe
var buttonElement = document.getElementById("btn");
// dom
btn.onclick = function () {
  console.log("Viec 1");
  console.log("Viec 2");
  alert("Viec 3");
};

setTimeout(function () {
  btn.onclick = function () {};
}, 3000);

// event listener
function viec1() {
  console.log(viec1);
}
btn.addEventListener("click", viec1);
setTimeout(function () {
  btn.removeEventListener("click", viec1);
}, 3000);
