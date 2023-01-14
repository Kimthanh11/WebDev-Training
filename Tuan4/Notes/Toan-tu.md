# Toán tử

1. Toán tử số học

\+ -->cộng
\- --> trừ

\*--> nhân

\*\* Lũy thừa
/ chia
% chia lấy số dư
++ tăng 1
-- giảm 1

2. Toán tử gán

   x\*= -> x\*=y -> x = x \* y

3. Toán tử so sánh

   == --> Bằng
   != --> Không bằng
   /> --> Lớn hơn
   /< --> Nhỏ hơn
   />= --> Lớn hơn bằng
   /<= --> Nhỏ hơn bằng

4. Toán tử logic

- && - And
- !! - Or
- ! - Not

```javascript
if (a > 0 && b > 0 && c > 0) {
  console.log("Dung");
}
```

# Toán tử ++ và --

Đây là 2 toán tử nghe qua thì rất dễ hiểu, nhưng để hiểu nguyên lý về cách hoạt động của nó chúng ta sẽ phải mất thêm một chút thời gian đó. Để hoàn thành bài học về 2 toán tử này, chúng ta sẽ cùng trải qua một số bài học sau nhé.

## Toán tử ++

Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1. Có 2 cách để sử dụng toán tử ++ là:

Dùng làm hậu tố: variable++ (toán tử nằm sau biến)
Dùng làm tiền tố: ++variable (toán tử nằm trước biến)

### #1 Sử dụng ++ làm hậu tố

Ở đây, chúng ta sẽ xét ví dụ sử dụng toán tử ++ làm hậu tố trước (vì trong thực tế, chúng ta thường dùng kiểu hậu tố nhiều hơn):

```javascript
var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3
```

Sau mỗi khi sử dụng toán tử ++, giá trị của biến number được tăng lên 1. Có vẻ khá dễ dàng để hiểu cách hoạt động của nó phải không?

Tuy nhiên, hãy xem xét thêm ví dụ sau:

```javascript
var number = 1;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3
```

👉 Toán tử ++ khi dùng là hậu tố sẽ tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng.

### #2 Sử dụng ++ làm tiền tố

Ở ví dụ này, chúng ta sử dụng ++ làm tiền tố. Tuy nhiên, kết quả trông sẽ không khác gì khi dùng ++ làm hậu tố:

```javascript
var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3
```

Nhưng khi xem xét kỹ hơn, các bạn sẽ nhìn ra điểm khác:

```javascript
var number = 1;

console.log(++number); // 2
console.log(number); // 2

console.log(++number); // 3
console.log(number); // 3
```

👉 Toán tử ++ khi dùng là tiền tố sẽ tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng.

## Toán tử - -

Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1.

## Tổng kết

- x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
- ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
- x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
- --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
  Trong video sau, chúng ta sẽ phân tích một cách chi tiết để hiểu nguyên lý của cách hoạt động trên.

# Toán tử chuỗi

```javascript
var firstName = "Son";
var lastName = "Dang";

var name='Thanh';
var name += 'Le';
console.log(firstName + " " + lastName);
```

# Kiểu dữ liệu Boolean

true, false

6 kiểu giá trị sẽ convert qua boolean thành false:

- 0
- false
- '' - ""
- undefined
- NaN
- null

# If else

if () {

} else {

}

# Kiểu dữ liệu trong Js

## Primitive data

```javascript
//Number type
var a = 1;
var b = 1.5;

//String type
var fullName = 'Son "Dang " ';

//Boolean
var isSuccess = true;

// Undefined type
var age;

// Null
var isNull = null; //nothing

//Symbol
var id = Symbol("id"); //unique
```

## Complex data

```javascript
//Function
var myFunction = function () {
  alert("Hi.Xin chao cac ban!");
};

//Object
var myObject = {
  name: "Son",
  age: 19,
  address: "frankfurt",
  myFunction: function () {},
};

//Application
var myArray = ["Javascript", "PHP", "Ruby"];
```

# typeof

-trả về type của một biến

- luôn trả về string

# Truthy và Falsy là gì?

## Truthy - to bool is true

Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.

Các giá trị 1, ['BMW'], { name: 'Miu' } và 'hi' được đề cập trong ví dụ dưới đây là Truthy vì khi chuyển sang Boolean ta nhận được giá trị true.

Ví dụ:

```javascript
console.log(Boolean(1)); // true
console.log(Boolean(["BMW"])); // true
console.log(Boolean({ name: "Miu" })); // true

console.log(!!"hi"); // true
```

!! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành "khẳng định". Trong Javascript thì đây là một "tip" để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.

Ví dụ:

```javascript
console.log(!!1); // true
console.log(!!"f8"); // true
console.log(!!["Mercedes"]); // true
```

Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.

## Falsy - to bool is false

Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.

Trong Javascript có 6 giá trị sau được coi là Falsy:

- false
- 0 (số không)
- '' or "" (chuỗi rỗng)
- null
- undefined
- NaN
  Ví dụ:

```javascript
console.log(!!false); // false
console.log(!!0); // false
console.log(!!""); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
```

Chú ý!
Nội dung đã đề cập phía trên đã đầy đủ khi nói về Truthy và Falsy trong Javascript. Tuy nhiên mình vẫn cần nhấn mạnh lại với các bạn rằng:

Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:

- '0' (một chuỗi chứa số không)
- ' ' (một chuỗi chứa dấu cách)
- 'false' (một chuỗi chứa từ khóa false)
- [] (một array trống)
- {} (một object trống)
- function(){} (một hàm "trống")
  Một số người chuyển từ ngôn ngữ khác sang rất có thể sẽ bị nhầm [] (mảng "rỗng") là falsy, bởi vì trong ngôn ngữ họ đã học trước đó [] là falsy.

Với những người hiểu nhầm [] là falsy sẽ gặp trường hợp khó hiểu sau:

Ví dụ:

```javascript
var cars = []; // Dù là mảng "rỗng" vẫn là truthy

if (!cars) {
  // Họ sẽ thắc mắc: "Tại sao lại không lọt vào đây?"
}
```

Vì [] là truthy nên !cars sẽ trả về false. Câu lệnh if sẽ nhận được kết quả của mệnh đề so sánh là false, vì vậy đoạn mã trong if trên sẽ không được lọt vào.

## Ngoại lệ? - document.all

Trong Javascript (phía trình duyệt) sẽ có sẵn một đối tượng document, và khi bạn thử !!document.all sẽ trả về false. Chẳng lẽ document.all cũng là falsy hay sao?

Bản thân mình cũng thắc mắc điều này nên mình đã search Google "Why document.all is falsy?" và mình đã tìm được câu trả lời tại đây.

Tóm tắt câu trả lời:

document.all là một ngoại lệ chính thức duy nhất theo đặc tả ECMA (phiên bản 5). Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là true. Tuy nhiên, document.all là một ngoại lệ.

Cụ thể như sau:

document.all chuyển sang boolean sẽ là false
document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
Khi typeof document.all sẽ trả về "undefined"
ECMA là đặc tả chi tiết kỹ thuật mà các ngôn ngữ theo đặc tả này phải tuân theo. Javascript là một ngôn ngữ tuân thủ đặc tả kỹ thuật ECMA.
