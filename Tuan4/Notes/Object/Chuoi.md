# Chuỗi trong javascript

## Tạo chuỗi

- các cách tạo chuỗi
- nên dùng cách nào? lí do?
- Kiểm tra data type

```javascript
var name = "ưef";
var fullName = new String("Son Dang");
```

-> DÙng cách một. Vì tạo với từ khóa string nên typeof name là string còn fullname là object.

## Một số case sử dụng backslash(\\)

```javascript
var fullName = "Son Dang la 'Sieu Nhan'. Day la dau \\";
```

## Xem độ dài chuỗi

```javascript
var fullName = "Son Dang la 'Sieu Nhan'. Day la dau \\";

console.log(fullName.length);
```

## Chú ý độ dài khi viết code

```javascript
var fullName = "Son Dang la 'Sieu Nhan'" + " Day la dau \\";

console.log(fullName);
```

- Số lượng kí tự trên 1 dòng chỉ tối đa 80 từ

## Template string ES6

```javascript
var firstName = "Son";
var lastName = "Dang";
consol.log("Toi la: ${firstName} ${lastName}");
```

# Làm việc với chuỗi

keyword = javascript string methods

```javascript
var myString = "hoc js tai f8";
//1.length
console.log(myString.length);
// 2. Find index
console.log(myString.indexOf("JS"));
console.log(myString.indexOf("JS", 6));
console.log(myString.lastIndexOf("JS"));

// 3.Cut string
console.log(myString.slice(0));
console.log(myString.slice(-3, -1));
// 4. Replace
console.log(myString.replace(/JS/g, "Javascript"));

// 5. Convert to upper case
console.log(myString.toUpperCase());

// 6. Convert to lower case
console.log(myString.toLowerCase());

// 7. Trim
console.log(myString.trim());
// 8. Split
var languages = "Java,Js, Ruby";
console.log(languages.splot(", "));
// 9. Get a character by index
const myString2 = "Son Dang";
console.log(myString2[10]);
```
