/*
Math object
- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor() 
- Math.random() 
- Math.min() 
- Math.max() 
*/

// console.log(Math.PI);
// console.log(Math.round(1.5)); //2
// console.log(Math.abs(-4));
// console.log(Math.ceil(2.4));
// console.log(Math.floor(2.7));
// console.log(Math.random() * 100);

var random = Math.floor(Math.random() * 100);
// var bonus = ["10 coin", "20 coin", "30 coin", "40 coin"];
// console.log(bonus[random]);
if (random < 5) {
  console.log("ye");
}
console.log(Math.min(-1, 2, 90, 34, 65));
console.log(Math.max(-1, 2, 90, 34, 65));

//Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
