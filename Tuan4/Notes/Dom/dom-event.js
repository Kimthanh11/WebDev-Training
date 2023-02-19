// Dom events
// 1. Attribute events
// <div class="box" onclick="console.log(Math.random())">sd</div>
// 2. Assign event using the element node
var h1Element = document.querySelector("h1");
h1Element.onclick = function (e) {
  console.log(Math.random);
  console.log(e);
};

var h1Elements = document.querySelectorAll("h1");
for (var i = 0; i < h1Elements.length; ++i) {
  h1Elements.onclick = function (e) {
    // console.log(h1Elements[i]);
    console.log(e.target);
  };
}

// Input/select
var inputValue;
var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function (e) {
  console.log(e.target.value);
};

inputElement.oninput = function (e) {
  inputValue = e.target.value;
};

var checkBoxElement = document.querySelector('input[type="checkbox"]');
checkBoxElement.onchange = function (e) {
  console.log(e.target.checked);
};

var selectElement = document.querySelector("select");
selectElement.onchange = function (e) {
  console.log(e.target.value);
};
//key up/key down
inputElement.onkeyup = function (e) {
  console.log(e.target.value);
};

inputElement.onkeyup = function (e) {
  console.log(e.which);
  switch (e.which) {
    case 27:
      console.log("Exit");
      break;
  }
};

document.onkeydown = function (e) {
  switch (e.which) {
    case 27:
      console.log("Exit");
      break;
  }
};
