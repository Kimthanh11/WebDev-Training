/*
LOOP
1. for
2. for/in loop by key
3. for/of loop by value
4. while
5. do/while
*/

// For loop
for (var i = 1; i <= 1000; i++) {
  console.log(i);
}

// ------------------------------------------------------

//Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
// Làm bài
function getRandNumbers(min, max, length) {
  var array = [];
  for (var count = 0; count < length; count++) {
    array[count] = Math.random() * (max - min) + min;
  }
  return array;
}

/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 *
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 *
 * => Treo trình duyệt!!!
 */

// ------------------------------------------------------

//Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
function getTotal(arr) {
  var sum = 0;
  var arrLength = arr.length;
  for (var i = 0; i < arrLength; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
// ------------------------------------------------------

//Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.

//Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

//Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
  function getPrice() {
    return this.price();
  },
];
function getTotal(orders) {
  var length = orders.length;
  var sum = 0;
  for (let i = 0; i < length; i++) {
    sum = sum + orders[i].price;
  }
  return sum;
}

// Expected results:
getTotal(orders); // Output: 8700000
// ------------------------------------------------------

//For/in loop
var myInfo = {
  name: "Son",
  age: 18,
  address: "vn",
};
for (var key in myInfo) {
  console.log(key);
}

var myString = "JAVASCRIPT";
for (var key in myString) {
  console.log(myString[key]);
}

// ------------------------------------------------------

//Challenge
function run(object) {
  var array = [];
  var i = 0;
  for (var key in object) {
    array[i] = "Thuộc tính " + key + " có giá trị " + object[key];
    i++;
  }
  return array;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

// ------------------------------------------------------

//For/of loop
var language = ["Javascript", "PHP", "Ruby"];
for (var value of language) {
  console.log(value);
}

var myInfo = {
  name: "Son",
  age: 18,
  address: "vn",
};

for (var value of Object.values(myInfo)) {
  console.log(value);
}
// ------------------------------------------------------

//while loop
var i = 0;
while (i <= 1000) {
  console.log(i);
  i++;
}

// ------------------------------------------------------

//do/while loop
var i = 0;
var isSuccess = false;
do {
  i++;
  console.log("Nap the lan " + i);

  //success
  if (false) {
    isSuccess = true;
  }
} while (!isSuccess && i < 3);

// ------------------------------------------------------

//break & continue in loop
for (var i = 0; i < 10; i++) {
  console.log(i);
  if (i >= 5) {
    break;
  }
}
for (var i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// ------------------------------------------------------

//nested loop
var myArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (var i = 0; i < myArray.length; i++) {
  for (var j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}

// ------------------------------------------------------

//More examples
for (var i = 10; i > 0; i--) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// ------------------------------------------------------
//iterator
var array = ["a", "b", "c", "a", "b", "c"];
console.log([...new Set(array)]);

//example
function loop(start, end, cb) {
  if (start <= end) {
    cb(start);
    return loop(start + 1, end, cb);
  }
}
loop(0, array.length - 1, function (index) {
  console.log("index: ", index);
});

//1. Xac dinh diem dung
//2. Logic handle => tao ra diem dung
function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}
countDown(3);

// function giaiThua(num) {
//   var output = 1;
//   for (var i = num; i > 0; i--) {
//     output = output * i;
//   }
//   return output;
// }

function giaiThua(num) {
  if (num > 0) {
    return num * giaiThua(num - 1);
  }
  return 1;
}

console.log(giaiThua(6));
