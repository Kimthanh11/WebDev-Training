- Add the script vao phan cuoi body de lien ket file main.js
<script src="main.js"></script>

# Khái niệm biến và cách sử dụng

## Biến là gì?

Trong quá trình xây dựng website hoặc các ứng dụng với Javascript chúng ta sẽ cần phải làm việc với các dạng thông tin dữ liệu khác nhau. Ví dụ:

- Phần mềm kế toán - Chúng ta sẽ làm việc với những con số
- Website bán hàng - Làm việc với dữ liệu thông tin sản phẩm, đơn hàng và giỏ hàng
- Ứng dụng Chat - Dữ liệu là những đoạn chat, tin nhắn, thông tin người chat
  Biến được sử dụng để lưu trữ các thông tin trên trong quá trình ứng dụng Javascript hoạt động

## Khai báo biến

Để khai báo biến ta sẽ bắt đầu bằng từ khóa var (var là viết tắt của từ variable - nghĩa là biến). Khai báo biến có cú pháp như sau:

```javascript
var [dấu cách] [tên biến];
```

Theo cú pháp trên, mình sẽ định nghĩa một biến có tên là fullName với dự định để lưu tên đầy đủ của mình vào đó.

```javascript
var fullName;
```

Tiếp theo, ta có thể lưu thông tin vào biến fullName này:

```javascript
var fullName; // khai báo biến

fullName = "Sơn Đặng"; // gán giá trị
```

Các bạn chú ý có dấu nháy đơn '' bao ngoài chữ Sơn Đặng. Đó là cách để thể hiện dữ liệu dạng chuỗi (văn bản) trong Javascript.

Khi đoạn mã trên được chạy (thực thi) Javascript sẽ tạo biến với tên fullName và gán giá trị 'Sơn Đặng' cho biến này. Một vùng nhớ trong RAM của máy tính sẽ được sử dụng để phục vụ việc lưu trữ những giá trị của biến khi chương trình được thực thi.

Chuỗi 'Sơn Đặng' đã được lưu vào vùng nhớ tương ứng với biến fullName. Ta có thể truy cập tới chuỗi này qua tên biến:

```javascript
var fullName;

fullName = "Sơn Đặng";

alert(fullName); // hiển thị giá trị của biến
```

Để đơn giản và ngắn gọn, ta có thể kết hợp việc khai báo biến và gán giá trị cho biến thành một dòng:

```javascript
var fullName = "Sơn Đặng"; // khai báo và gán giá trị

alert(fullName);
```

Ta cũng có thể khai báo nhiều biến trong cùng một dòng cách nhau bởi dấu , như sau:

```javascript
var fullName = "Sơn Đặng",
  age = 18,
  workAt = "F8";
```

Trông có vẻ ngắn gọn, tuy nhiên mình khuyên các bạn không nên dùng cách này. Khi cần khai báo nhiều biến hơn thì cách này trở nên rất khó đọc.

Ta nên khai báo biến trên mỗi dòng khác nhau để dễ đọc hơn (nên dùng cách này):

```javascript
var fullName = "Sơn Đặng";
var age = 18;
var workAt = "F8";
```

Một số cách khai báo biến trên nhiều dòng khác như sau:

```javascript
var fullName = "Sơn Đặng",
  age = 18,
  workAt = "F8";
```

Thậm chí có cả phong cách sau:

```javascript
var fullName = "Sơn Đặng",
  age = 18,
  workAt = "F8";
```

Về mặt kỹ thuật thì tất cả các cách đều tương tự nhau. Vì vậy dùng cách nào là tùy theo sở thích của bạn.

Khi gán giá trị dạng số cho biến chúng ta không sử dụng dấu nháy đơn '' bao bọc bên ngoài. Như ví dụ trên thì age = 18 ta sẽ viết luôn là số 18 và không sử dụng dấu nháy.

## Quy tắc đặt tên

- Tên biến có thể bao gồm chữ cái, số, dấu gạch dưới ( \_ ) và kí tự đô la ( $ )
- Tên biến không thể bắt đầu bằng số, phải bắt đầu bằng một chữ cái hoặc dấu gạch dưới hoặc dấu đô la
- Tên biến phân biệt chữ hoa và chữ thường. Vì vậy tenbien và TenBien là 2 biến khác nhau
- Tên biến không được (không thể) đặt trùng với các từ khóa của Javascript
- Từ khóa là những từ được Javascript sử dụng để tạo nên những quy chuẩn về mặt chức năng và cú pháp trong Javascript. Ví dụ: Để khai báo một biến ta sẽ sử dụng từ khóa var. Vì vậy ta không thể đặt tên biến là "var"

Ví dụ cho tên biến hợp lệ

```javascript
var address; // tên biến sử dụng chữ cái

var first_name; // kết hợp chữ cái và gạch dưới

var $last_name; // dấu đô la, gạch dưới và chữ cái

var f8; // chữ cái và số, số đứng sau chữ cái
```

Ví dụ cho tên biến không hợp lệ

```javascript
var java-script; // bao gồm dấu gạch ngang

var 8f; // bắt đầu với chữ số

var var = 'Biến'; // sử dụng trùng từ khóa `var`
```

Các chữ cái không phải tiếng Lating vẫn có thể được sử dụng làm tên biến (không sử dụng cách này):

```javascript
var ດ້ານວິຊາການ = "..."; // tiếng Pháp
var ਤਕਨੀਕੀ = "..."; // tiếng Lào
```

Trong thực tế chúng ta sẽ sử dụng tiếng Anh để đặt tên biến vì đó là quy ước chung Quốc Tế.

## Gán giá trị cho biến

Các bạn hãy tưởng tượng biến như một chiếc hộp và giá trị gán cho biến như là đồ vật được bỏ vào hộp. Vì vậy ta có thể đặt bất cứ giá trị gì vào hộp và ta cũng có thể thay thế chúng nếu muốn:

```javascript
var fullName; // tạo chiếc hộp

fullName = "Sơn Đặng"; // cho đồ vật vào hộp

fullName = "Nguyễn Văn A"; // thay thế đồ vật khác

alert(fullName); // Nguyễn Văn A
```

Khi giá trị của biến được thay đổi, giá trị cũ sẽ bị xóa khỏi biến.

Ta cũng có thể sao chép giá trị từ biến này sang biến khác:

```javascript
var currentCourse = "Javascript";

var newCourse;

// copy giá trị 'Javascript' từ biến
// 'currentCourse' sang biến 'newCourse'
newCourse = currentCourse;

// bây giờ, biến 'newCourse' và 'currentCourse'
// đều có giá trị là 'Javascript'

alert(currentCourse); // Javascript

alert(newCourse); // Javascript
```

Có thể bạn chưa biết có những ngôn ngữ lập trình như Scala, Erlang không cho phép thay đổi giá trị của biến đã định nghĩa. Ta bắt buộc phải tạo biến mới khi cần lưu giá trị và không thể gán lại giá trị cho biến cũ.

## Đặt tên biến như nào cho đúng?

Đặt tên biến hợp lệ theo quy tắc của Javascript là việc đơn giản, tuy nhiên trong thực tế đặt tên biến không chỉ dừng lại ở việc đặt cho hợp lệ mà ta còn phải quan tâm tới các yếu tố khác như:

- Tên biến phải có ý nghĩa cụ thể, phải rõ ràng và thể hiện được nó đang lưu trữ cái gì.
- Sử dụng tiếng Anh để đặt tên biến, sử dụng các từ có thể đọc lên được như userName, phoneNumber, verifyEmail, ..
- Tránh đặt tên biến ngắn như a, b, p trừ khi bạn chỉ đang làm ví dụ hoặc bạn thật sự hiểu trường hợp đó có thể đặt tên như vậy.
- Tránh đặt tên biến chung chung kiểu như data, value. Vì khi nhìn vào không thể hiểu data là data của cái gì, value là value của cái gì. Chỉ sử dụng tên dạng này khi đang trong ngữ cảnh cụ thể giúp bổ nghĩa cho những từ chung chung đó.
  Đặt tên biến chung chung (trường hợp nên tránh)
  Ví dụ:

```javascript
var data = "..."; // không biết data là data của cái gì
var value = "..."; // không biết value là value của cái gì

// var documentData = '...' ; Nên đặt rõ ràng ra như này
// var documentValue = '...'; và như này
```

Đặt tên biến chung chung (trường hợp nên dùng)
Ví dụ:

```javascript
function Document() {
  var data = "...";
  // hoặc
  var value = "...";

  // var documentValue = '...'; Đặt như này sẽ bị lặp lại chữ "document" không cần thiết
}
```

Bạn chưa cần quan tâm function là gì vì ta sẽ học nó ở những bài sau. Trong trường hợp này biến data hoặc value nằm trong Document. Vì vậy Document đã giúp lập trình viên khi nhìn vào hiểu được data, value là thuộc về Document. Trong trường hợp này thì tên biến giúp đơn giản hóa và vẫn truyền đạt được đầy đủ ý nghĩa.

## Có thể bạn chưa biết

- Đặt tên biến là một trong những kỹ năng quan trọng và phức tạp nhất trong lập trình. Nhìn lướt qua các tên biến có thể biết code nào được viết bởi người mới và người đã có nhiều kinh nghiệm.

- Trong thực tế nhiều khi chúng ta phải làm việc trên code đã có sẵn thay vì viết hoàn toàn mới. Có khi bạn sẽ làm việc trên code cũ của người khác và ngược lại. Vì vậy đặt tên biến rõ ràng, dễ hiểu, truyền đạt đúng mục đích sử dụng là quan trọng hơn cả.

- Chỉ sau vài tháng bạn có thể quên đi đoạn mã do chính tay mình viết. Để chính bạn hiểu bạn đã từng code cái gì trong quá khứ thì việc đặt tên biến tuân thủ các nguyên tắc trên là vô cùng quan trọng.

- Khi phải lựa chọn giữa performance (hiệu năng) và clean code (code sạch) người ta thường lựa chọn clean code. Việc đánh đổi này là cần thiết để giúp code dễ hiểu, dễ bảo trì và nâng cấp về sau. Và đặt tên biến chính là một trong những yếu tố giúp code của bạn trở nên clear hơn.

# Comment trong javascript

1. Mục đích sử dụng

- Ghi chú
  Hầu hết các ngôn ngữ lập trình đều có cú pháp dành cho việc comment code. Trình biên dịch sẽ bỏ qua những dòng và khối comment trong code của bạn. Vì vậy comment mang mục đích để lập trình viên có thể chú thích code mà không ảnh hưởng tới việc thực thi của ngôn ngữ lập trình.
- Vô hiệu hóa mã

2. Loại comments

- Comment 1 dòng
- Comment 2 dòng

3. Sử dụng phím tắt

- Windows: Ctrl + /

## Cú pháp

### Comment trên một dòng

Chúng ta sẽ sử dụng 2 dấu gạch chéo // trước comment. Cú pháp như sau:

```javascript
// [Nội dung comment]
```

Áp dụng:

```javascript
// Hàm alert sẽ bật lên hộp thoại
// trên trình duyệt
alert("Học lập trình tại F8");
```

Hoặc sử dụng ở phía sau dòng code:

```javascript
var userName = "sondn"; // Gán 'sondn' cho userName
```

### Comment nhiều dòng - một khối

Cú pháp:

```javascript
/*[Nội dung comment] */

// hoặc

/*
[Nội dung comment]
*/
```

Áp dụng:

```javascript
/*
Ở bài trước chúng ta đã học về biến
Và hôm nay chúng ta học về comment
*/

var fullName;
var age;
```

Bất cứ nội dung gì nằm giữa ký tự /_ và _/ sẽ là comment.

## Sử dụng khi nào?

Chúng ta sử dụng comment với 2 mục đích chính:

### Mục đích chú thích code

Chúng ta sẽ chú thích trên các đoạn code để hướng dẫn cách sử dụng, mô tả cách hoạt động hoặc giải thích tại sao ta lại làm như vậy. Việc làm này thường áp dụng đối với những đoạn code phức tạp, với những code đơn giản thì không cần sử dụng comment. Hãy áp dụng nguyên tắc đặt tên biến đã học để code của bạn viết ra sẽ tự giải thích luôn ý nghĩa của chính nó.

Đây là ví dụ cho việc comment để mô tả cách sử dụng:

/\*
Example:

```javascript
var checked = true;

<Checkbox
checked={checked}
onChange={event => doSomething(event.target.checked)}

> Label for Box
> </Checkbox> > \*/

function Checkbox() {
...
}
```

Việc lạm dụng comment, sử dụng không đúng lúc, không đúng chỗ sẽ gây dư thừa không cần thiết, làm mã của bạn trở nên khó nhìn và gây phản tác dụng. Vì vậy hãy cân nhắc sự cần thiết mỗi khi có ý định sử dụng comment trong mã của bạn.

Ví dụ dưới đây mô tả việc sử dụng comment chưa hiệu quả:

```javascript
// Khai báo biến
var email;
var password;

// Lấy giá trị người dùng nhập vào email input
emaill = event.target.value;

// Lấy giá trị người dùng nhập vào password input
password = event.target.value;
```

Comment như trên trở nên dư thừa không cần thiết vì đã là lập trình viên Javascript thì ai cũng sẽ hiểu đoạn code như vậy để làm gì.

Ngoại lệ khi bạn là người mới học, việc sử dụng comment như trên là cần thiết để giúp bạn ghi nhớ chức năng, nhiệm vụ của từng đoạn code. Khi bạn đã hiểu và ghi nhớ được những kiến thức đó - Hãy ngừng comment như vậy!

### Mục đích Vô hiệu hóa đoạn code

Bản chất là trình biên dịch code sẽ bỏ qua những comment (không thực thi chúng). Vì vậy khi một đoạn code được comment lại thì đoạn code đó sẽ không chạy. Đôi khi bạn sẽ muốn tạm bỏ đi một đoạn code nào đó trong ứng dụng của bạn, đó chính là lúc bạn có thể sử dụng comment.

Ví dụ:

```javascript
var email = "email@domain.com";
var address = "Hà Nội, Việt Nam";

alert(email); // alert này sẽ chạy
// alert(address); // alert này không chạy
```

# Thuật ngữ built-in là gì?

Là những hàm js đã xây dựng sẵn

1. Alert
2. Console

   In ra ở tab console trên trình duyệt

   ```javascript
   console.log("Hello");
   ```

3. Confirm

Lấy giá trị người dùng có nút Cancel hoặc OK

```javascript
confirm("Xac nhan ban du tuoi");
```

4. Prompt

Lay giá trị người dùng từ input

```javascript
prompt("Ban may tuoi?");
```

5. Set timeout

- Tham số là function và giờ, hết giờ thì khôgn tthực hieernj nữa

```javascript
setTimeout(function () {
  alert("tHONG BAO");
}, 1000);
```

6. Set interval

- Tham số giống settime out nhưng chạy liên tục khôgn dừng

```javascript
setInterval(function () {
  alert("tHONG BAO");
}, 1000);
```
