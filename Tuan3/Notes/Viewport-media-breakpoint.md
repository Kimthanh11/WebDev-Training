# Thẻ meta viewport

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
- width=device-width:  vừa vặn kích thước màn hình
- inital-scale: đúng tỉ lê của website
- minimum scale: độ thu nhỏ tối thiểu
- maximum scale: độ zoom tối đa
- user-scalable: ngăn người dùng zoom
-> ko nên dùng minimum, max, user

# Media query

- chuỗi truy vấn chọn kích thước màn hình cụ thể
- cú pháp: @media not|only mediatype and (mediafeature and|or|not mediafeature) {
  CSS-CODE
  }

1. Keywords

- only
- and
- or

2. Mediatypes

- print
- screen: màn hình đt, máy tính bảng, tv
- speech: màn hình nói
- all - default : giá trị mặc định
- trường hợp muốn css

3. Mediafeature

- min-width
- max-width
- chọn kích thước dể css, với kích thước nào là màn hình, điện thoại, ipad

max-width: 1024 -> nhò hón hoặc bằng 1024 thì apply
min-width: 1024 -> lớn hơn hoặc bằng thì apply

4. Polyfill

- để hỗ trợ những trình duyệt không hỗ trợ mediaquery (IE9)
- link respond thêm thẻ script respond cdnjs
- hoặc dùng conditional comment
<!-- [if IE lte 9]>
<script src="">
<![endif] -->

# Media query px, em, rem

dùng em

# Cách sử dụng

 <!-- PC  -->

    <link rel="stylesheet" media="(min-width: 1024px)" href="./style_1.css" />

<!-- Mobile -->

    <link rel="stylesheet" media="(max-width:740px)" href="./style_2.css" />

-> Hạn chế dùng vì sinh ra nhiều connection

# Breakpoints

- Những điểm/vị trí mà bố cục website sẽ thay đổi - thích ứng để tạo nên giao diện responsive
- media query breakpoints: PC, tablets, mobile
  Mobile <740
  Tablet >= 740 and < 1024
  PC >=1024
- Chuyển qua em default 16px = 1em
