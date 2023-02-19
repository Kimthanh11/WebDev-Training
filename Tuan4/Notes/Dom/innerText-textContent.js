// innerText, textContent
var headingElement = document.querySelector(".heading");
console.log(headingElement.innerText);
console.log(headingElement.textContent);
headingElement.innerText = "New heading";
//getter
// text in HTML
//setter
// set text for HTML
//innerText: trả lại những gì nhìn thấy trên browser từ element node
//textcontent: trả lại những gì take note trong file, trả tất cả nội dung cả javascript và style... từ element node
// thẻ tag là một element node

// set text vào innerText và textContent: chỉ hiểu là đoạn text dù có là tag
headingElement.textContent = "<i>fsjhs</i>";

// innerText tự thêm thẻ br khi cách dòng
headingElement.innnerText = `

New heading

`;

//textContent trả về như những gì nhìn thấy
headingElement.textContent = `

New heading

`;
