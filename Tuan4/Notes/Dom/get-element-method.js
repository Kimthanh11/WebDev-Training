// Get element: ID, class, tag, CSS selector, HTML collection

//id
var headingNode = document.getElementById("heading");
console.log(headingNode);

//class
var headingNode1 = document.getElementsByClassName("heading");
console.log(headingNode1);
//tag
var headingNode2 = document.getElementsByTagName("h1");
console.log(headingNode2);
//css selector
//var headingNode3 = document.querySelector("html .box .heading-2");
var headingNode3 = document.querySelector(".box .heading-2:nth-child(1)");
console.log(headingNode3);

var headingNode4 = document.querySelectorAll(".box .heading-2:nth-child(1)");
console.log(headingNode4);

//HTML collection
console.log(document.forms["form-1"]);
console.log(document.anchors);

//Select element con
var form = document.querySelector(".form");
var formchildren = document.querySelectorAll("form");
console.log(formchildren);

//document.write
document.write("Hello");
