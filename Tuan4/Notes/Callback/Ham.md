# Hàm

## Hàm là gì?

- Một khối mã
- Làm một việc cụ thể

## Loại hàm

- Built-in
- Tự định nghĩa

## Tính chất

- Không thực thi khi định nghĩa
- Sẽ thực thi khi được gọi
- Có thể nhận tham số
- Có thể trả về 1 giá trị

## Đặt tên hàm

tên: a-z A-Z 0-9 \_ $

```javascript
function showDialog() {
  alert("Hi xin chao cac ban!");
}
showDialong();
```

```javascript
function showMessage(message) {
  console.log(message);
}

showMessage("Hi anh em F8!");
```

- message là tham số (parameter)
- 'Hi anh em F8!' là đối số (argument)

# Tham số trong hàm

1. Tham số

- Định nghĩa
- Kiểu dữ liệu
- Tính private: chỉ sử dụng được trong function
- 1 tham số
- Nhiều tham số

```javascript
function writeLog(message) {
  console.log(message);
}

writeLog("Test message");
```

2. Truyền tham số

- 1 tham số
- nhiều tham số

3. Arguments

- Đối tượng arguments
- Giới thiệu vòng for

```javascript
function writeLog() {
  console.log(arguments);
}

writeLog("Log1", "lOG2");

function writeLog1() {
  var myString = "";
  for (var param of arguments) {
    //console.log(param);
    myString += `${param} - `;
  }
  console.log(myString);

  writeLog1("Log1", "lOG2");
}
```

# Return trong hàm

```javascript
var isConfirm = confirm("Message?");

console.log(isConfirm);
```

```javascript
function cong(a, b) {
  return a + b;
  //return a.toString() + b.toString();
  console.log("122"); // không chạy vì đứng sau return
}
var result = cong(2, 6);
console.log(result);
```

# Một số điều cần biết về function

1. Khi function đặt trùng tên

```javascript
function showMessage() {
  console.log("Message1");
}

function showMessage() {
  console.log("Message2");
}
showMessage();
```

-> Function khai báo sau ghi đè 2. Khai báo biến trong hàm

```javascript
function showMessage() {
  var fullName = "Thanh Le";
  console.log(fullName);
}
console.log(fullName); //lỗi
```

-> Biến khai báo trong hàm chỉ sử dụng đucowj trong hàm có tính private

3. Định nghĩa hàm trong hàm

```javascript
function showMessage() {
  function showMessage2() {
    console.log("Message1");
  }
  showMessage2();
}
showMessage();
```

# Các loại function

1. Declaration function

```javascript
function showMessage() {}
```

2. Expression function

```javascript
var showMessage2 = function () {
  console.log("Expression function");
};

setTimeout(function autoLogin() {});

var myObject = {
  myFunction: function testName() {},
};
```

3. Arrow function
