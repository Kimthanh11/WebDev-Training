// Date object
var date = new Date();
console.log(date.toString());

var date1 = Date(); // string, not an object

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(day);
// src: Date. MDN

// Để vượt qua thử thách này, bạn hãy tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.
function getNextYear() {
  var date = new Date();
  return date.getFullYear() + 1;
}
