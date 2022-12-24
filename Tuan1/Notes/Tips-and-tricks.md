# Cách căn giữa trong css

- text-align: căn giữa text theo chiều ngang, có tính kế thừa, nếu có nhiều thẻ con thì nên dùng text-align
- line-height: căn giữa text theo chiều cao, line=height bằng width của thẻ cha
- Tra w3schools để biết có inherited không
- thẻ cha: display: flex; thẻ con: margin: auto hoặc thẻ cha: display: flex align-items căn giữa theo chiều dọc của thẻ cha
  - justify-content: center căn giữa các thẻ con hoặc space-aroung, space-between
- thẻ cha: position: relative, thẻ con: position: absolute; top: 50%; transform: translate(-50%, -50%); left: 50%
- nên làm cách nào để khi có chỉnh sửa size thì vẫn giữ được center

# Hiển thị ảnh dự phòng khi ảnh chính lỗi

- đặt ảnh dự phòng vào source code
- khi dùng thẻ image: thêm attribute onerror="this.src='source.jpg'"
- khi dùng div background: chèn thêm ảnh trog background-image
