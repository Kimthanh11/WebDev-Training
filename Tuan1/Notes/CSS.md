# Sử dụng CSS trong HTML

Có 3 cách sử dụng CSS trong HTML:

- Internal: sử dụng thẻ style
- External: tạo một file bên ngoài hoặc dùng file trên mạng, sử dụng thẻ link để link đến file đó
- Inline: sử dụng attribute style trong thẻ mở

# ID và class

- id: viết tắt identify, chỉ xuất hiện một lần để phân biệt các thẻ có nội dung giống nhau, select sử dụng #
- class: sử dụng một thuộc tính css cho các đối tượng khác nhau, select sử dụng .

# Sử dụng CSS selector class

- Ví dụ 1: Lựa chọn qua 1 class
- Ví dụ 2: Lựa chọn qua nhiều class
  .p1-normal.p2-red {
  color:
  red;
  }
- Ví dụ 3: CSS cho các thẻ con
  .parent .children-1 {
  color:
  red;
  }

# Độ ưu tiên trong css

1. Internal, External: ai gọi sau thì được ưu tiên
2. Inline 1000
3. #id 100
4. .class 10
5. tag 1
6. equal specificity: mới hơn thì được ưu tiên
7. universal selector and inherited: \* mọi thẻ đều thụ hưởng giống hệt nhau, thụ hưởng thì các thẻ cha

- Thuộc tính important: hơn cả inline

# Sử dụng biến trong css

- đặt biến để có thể dễ dàng đổi màu theme cho trang web
- có thể dùng biến local

# Các đơn vị trong css

1. Absolute units

- px: độ phân giải cao thì 1px chứa nhiều điểm ảnh hơn

2. Relative units

- %: Thuộc tính width, height với đơn vị % sẽ phụ thuộc vào kích thước width, height của thẻ mà nó phụ thuộc, mặc định là thẻ cha trực tiếp
  Hãy nhớ, thuộc tính width và height, khi đặt theo % sẽ tỉ lệ vào thẻ mà nó phụ thuộc, mặc định là thẻ cha trực tiếp của nó. Vì vậy, thẻ cha của nó phải có kích thước cho width hoặc height thì thẻ con đặt theo % mới có tác dụng.

Với chiều rộng thì các thẻ như body, div sẽ mặc định có width: 100%. Vì vậy, ở bài #1 các bạn mà comment thuộc tính width của .box1 lại, bạn sẽ thấy nó chiếm 100% chiều rộng.
Với chiều cao, mặc định các thẻ có height: auto, chiều cao sẽ tự động thay đổi khi nội dung bên trong nó tăng lên. Nếu thẻ cha có height: auto và thẻ con của nó height: 50% thì sẽ không có tác dụng, khi ấy thẻ con vẫn có height: auto.

- rem: phụ thuộc vào thuộc tính ở thẻ html
  Khi bạn CSS cho một thẻ là font-size: 1rem, thì giá trị 1rem này sẽ phụ thuộc vào giá trị font-size được đặt cho thẻ html, mặc định tại trình duyệt thì font-size: 16px, vì vậy mặc định font-size: 1rem sẽ bằng 16px, 2rem sẽ bằng 32px.

Khi các bạn đặt font-size với giá trị khác cho thẻ html thì giá trị của rem cũng sẽ thay đổi theo tương tự. Hãy mở tab TRÌNH DUYỆT và thử thay đổi file style.css để khám phá cách hoạt động của rem bạn nhé.

- em: phụ thuộc vào thẻ gấn nhất chứa nó
- thường sử dụng rem
- vw: view width độ rộng trình duyệt
- vh: view height độ cao trình duyệt

# Sử dụng hàm css

- var: đặt biến css
- linear-gradient
- rgb: (0,0,0): đen, (255,255,255): trắng
- calc: dùng để tính toán

# Sử dụng pseudo-classes

:root lớp giả tham chiếu đến phần tử gốc, thẻ html
:hover lớp giả khi di chuột qua
:active lớp giả khi bấm vào
:first-child lớp giả để select thẻ con đầu tiên trong tập hợp con
:last-child lớp giả để select thẻ con cuối cùng trong tập hợp con

# Sử dụng pseudo-elements

element giả
::before
::after
::first-letter: chữ đầu viết
::first-line: dòng đầu tiên
::selection: khi select elements
