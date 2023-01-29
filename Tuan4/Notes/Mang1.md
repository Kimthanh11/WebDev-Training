# Mảng

## Tạo mảng

- Cách tạo
- Sử dụng cách nào? Tại sao?
- Kiểm tra data type

##Truy xuất mảng

- Độ dài mảng
- Láy phần tử theo index

```javascript
var languages = ["JS", "PHP", "Ruby", null, undefined, function () {}, {}, 123];
console.log(languges);

var languages1 = new Array(
  "JS",
  "PHP",
  "Ruby",
  null,
  undefined,
  function () {},
  {},
  123
); // tạo instance thời gian thực hiện lâu hơn
console.log(Array.isArray(new Array(1, 2)));

console.log(languages.length);
console.log(languages[0]);
```

## Làm việc với array

1. toString
2. join
3. pop
4. split
5. shift
6. unshift
7. splicing
8. concat
9. slicing

```javascript
var languages = ["JS", "PHP", "Ruby"];
var languages2 = ["JS", "PHP"];
console.log(languages.toString());
console.log(languages.join());
console.log(languages.pop()); // "JS"
console.log(languages.push("Dart")); //"JS", "PHP", "Ruby","Dart"
console.log(language.shift()); //'php','ruby'
console.log(language.unshift("Dart")); //"Dart", "JS", "PHP", "Ruby"
languages.splice(1, 1); // at index 1 remove 1 elements 'JS', 'Ruby'
languages.splice(1, 0, "Dart"); // 'js', 'dart', 'php','ruby'
languages2.concat(languages); //'js', 'php','js','php','ruby'
console.log(languages.slice(1, 2)); //copy mang 'php'
```
