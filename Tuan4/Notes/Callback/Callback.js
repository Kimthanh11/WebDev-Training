//Callback?
//  là hàm (function) được truyền qua đối số khi gọi hàm khác

function myFunction(param) {
  if (typeof param === "function") {
    param(123);
  }
}

function myCallback(value) {
  console.log("Value: ", value);
}
myFunction(myCallback);

// challenge
function sumCb(a, b) {
  return a + b;
}

function caculate(a, b, cb) {
  return cb(a, b);
}

// Expected results
console.log(caculate(1, 2, sumCb)); // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

// Array.prototype.map2 = function (callback) {
//   var output = [];
//   var arrayLength = this.length;
//   for (var i = 0; i < arrayLength; i++) {
//     var result = callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };

var courses = ["Javascript", "PHP", "Ruby"];
// var htmls = courses.map(function (course) {
//   return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(""));

// var htmls = courses.map2(function (course) {
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls);

//challenge
// Array.prototype.myMap = function (cb) {
//   var output = [];
//   for (var i = 0; i < this.length; i++) {
//     var result = cb(this[i], i);
//     output.push(result);
//   }
//   return output;
// };

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

//forEach, find, filter, some, every, reduce
// Empty element
var courses1 = ["Java", "SQL"];
courses1.length = 10;
// or
// var courses1 = new Array(10);
// courses.push("Java", "SQL");
for (var index in courses1) {
  console.log(courses1[index]);
}

// forEach
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    } // co nam trong chinh ko (ko nam trong prototype)
  }
};
// for in duyet qua luon ca phuog thuc va thuoc tinh tu dinh nghia
var courses = ["Javascript", "PHP", "Ruby"];
courses.forEach2(function (course, index, array) {
  console.log(course, index, array);
});

//filter
Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};
var courses2 = [
  {
    name: "Javascript",
    coin: 680,
  },
  {
    name: "SQL",
    coin: 0,
  },
  {
    name: "Java",
    coin: 800,
  },
];

var filterCourses = courses2.filter2(function (course, index, array) {
  return course.coin > 700;
});

console.log(filterCourses);
// keyword: value type and reference type

//some
Array.prototype.some2 = function (cb) {
  var output = false;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (cb(this[index], index, this)) {
        output = true;
      }
    }
  }
  return output;
};
var courses3 = [
  {
    name: "Javascript",
    coint: 680,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 860,
    isFinish: true,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: true,
  },
];
var result = courses3.some2(function (course, index, array) {
  return course.isFinish;
});

console.log(result);

//every: true /false
Array.prototype.every2 = function (cb) {
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      if (!cb(this[i], i, this)) {
        return false;
      }
    }
  }
  return true;
};
var result = courses3.every2(function (course, index, array) {
  return course.isFinish === true;
});
console.log(result);
