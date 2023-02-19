// 1. Element
// 2. Attribute
// 3. Text
//innerHTML
var boxElement = document.querySelector(".box");
console.log(boxElement);
boxElement.innerHTML = "<h1 title='Headding'>sdgd</h1>";
console.log(document.querySelector("h1").innerText);
console.log(boxElement.innerHTML);

//outerHTML
var rectangle = document.querySelector(".rectangle");
console.log(rectangle.outerHTML);
rectangle.outerHTML = "<span>Test</span>";
console.log(rectangle.innerHTML); // value not in dom any more

//challenge
var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

function render(courses) {
  var innerHTML = "";
  var courses1 = courses.map(function (course) {
    return `<li> ${course} </li>`;
  });

  console.log(courses1);
  innerHTML = courses1.join("");
  var ul = document.querySelector("ul");
  ul.innerHTML = innerHTML;
}

render(courses);
