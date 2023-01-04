# BEM

- Là tiêu chuẩn đặt tên class khi viết CSS

# Ý nghĩa

- Viết tắt của Block Element Modifier
- Block: khối
- Element: Thành phần trong khối
- Modifier: Bổ sung ý nghĩa cho 'Block' hoặc 'Element'

# Tại sao phải dùng BEM

- Mỗi người đặt một kiểu
- Members đặt class trùng nahu, CSS đè lên nhau

# Cú pháp

- .block
- .blok\_\_element
- .block--modifier
- .block\_\_element--modifier

# Tính ứng dụng của BEM

- Xây dựng layout website
- Xây dựng thành phần trên website

# Ưu điểm

- Tính rõ ràng
- Tái sử dụng dễ dàng
- Giúp cả team làm việc với nhau dễ dàng
- Tính module, không lo CSS của class này ảnh hưởng lên CSS của class kia

# Nhược điểm

- Tên class dài
- một số người cho là xấu

# Khi nào dùng BEM phù hợp?

- Dự án nhiều members
- Dự án lớn, số lượng page nhiều hoặc số lượng các thành phần trên giao diện nhiều

# Block lồng block

### Block con là thành phần dùng chung

- Là thành phần dùng chung của toàn dự án thì coi là block mới do theo quy tắc đóng gói, element đó chỉ thuộc cha

### Block con chứa nhiều elemnt

- coi như block mới
  [!nested-block](./bem.png)
