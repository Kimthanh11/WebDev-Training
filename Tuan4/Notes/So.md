1.  Tạo giá trị Number

- Các cách tạo
- Dùng cách nào? Tại sao?
- Kiểm tra data type

2.  Làm việc với Number

- To string -> thành chuỗi
- To fixed -> làm tròn số

```javascript
var age = 18;
var PI = 3.14;

var otherNumber = new Number(9);
var result = 20 / 1;
console.log(isNaN(result)); // false

console.log(age.toString());

console.log(PI.toFixed());
console.log(PI.toFixed(3));
```

- NaN một số không hợp lệ, nhưng type là number
