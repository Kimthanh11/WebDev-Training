//if
var date = 2;
if (date === 2) {
  console.log("Hom nay la thu 2");
}
if (date === 3) {
  console.log("Hom nay la thu 3");
}
if (date === 4) {
  console.log("Hom nay la thu 4");
}

// if else
if (date === 2) {
  console.log("Hom nay la thu 2");
} else if (date > 0) {
  console.log("Hom nay la thu 3");
} else if (date === 4) {
  console.log("Hom nay la thu 4");
} else {
  console.log("Khong biet");
}

//Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:

//Khi a chia hết cho 3 thì return về 1
//Khi a chia hết cho 5 thì return về 2
//Khi a chia hết cho 15 thì return về 3
function run(a) {
  //
  if (a % 15 == 0) {
    return 3;
  } else if (a % 5 == 0) {
    return 2;
  } else if (a % 3 == 0) {
    return 1;
  }
}

// Kỳ vọng
console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3

//switch when know the value before, more than 3 cases -> switch, else if else
switch (date) {
  case 2:
    console.log("Hom nay la thu 2");
    break;
  case 3: // ===
    console.log("Hom nay la thu 3");
    break;
  case 4:
    console.log("Hom nay la thu 4");
    break;
  case 5:
    console.log("Hom nay la thu 5");
    break;
  default:
    console.log("Khong biet");
    break;
}

switch (date) {
  case 2:
  case 3:
  case 4:
    console.log("Hom nay la thu 4");
    break;
  case 5:
    console.log("Hom nay la thu 5");
    break;
  default:
    console.log("Khong biet");
    break;
}

//ternary operator
var course = {
  name: "Javascript",
  coin: 250,
};

// if (course.coin > 0) {
//   console.log(`${course.coin} Coins`);
// } else {
//   console.log("Free");
// }

var result = course.coin > 0 ? `${course.coin} Coins` : "Free";
console.log(result);

var a = 1;
var b = 2;
var c = a > 0 ? a : b;
console.log(c);

//Để vượt qua thử thách này bạn cần tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.

// Làm bài

var getCanVoteMessage = function (age) {
  return age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
};

// Kỳ vọng
console.log(getCanVoteMessage(18)); // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)); // 'Bạn chưa được bỏ phiếu'
