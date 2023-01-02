# Tạo đối tượng Grid

1. Tạo class

- grid: full-width, chiếm hết chiều ngang đối tượng chứa (cha)
- wide: chiều ngang tối đa 1200px

2. Đặt lại chiều rộng các thiết bị

# Tạo đối tượng Row

Row nghĩa là hàng, được sử dụng để chứa các Columns. Row giúp định hướng các Columns theo chiều ngang. Row sử dụng margin với giá trị âm sang 2 phía trái/phải để "bù trừ" cho khoảng padding trái/phải của Columns (Column padding trái/phải để tạo ra rãnh ngăn - hay còn gọi là gutters).
Vai trò

1. Chứa các columns, giúp các columns nằm theo chiều ngang
2. Tổng chiều ngang columns vượt quá kích thước row, cho columns xuống hàng
3. Loại bỏ khoảng thừa do gutters tạo ra ở 2 phía

# Tạo đối tượng column

Vai trò

- Chứa các thành phần của website
  Column sử dụng padding trái/phải để tạo nên gutters - rãnh ngăn cách giữa các column trong Grid layout. Column luôn luôn là con trực tiếp của Row.

Column được sử dụng với class "col", đi kèm theo đó là một số class "c-_" "m-_" và "l-\*":

- c-_: nghĩa là column, prefix class này có tác dụng trên mobile. _ từ 0 tới 12. Trong đó 0 được sử dụng để ẩn column, 1 - 12 tương ứng với độ rộng chúng ta muốn sử dụng cho column (trên cơ sở 12 columns trong Grid system)
- m-\*: nghĩa là medium, prefix class này có tác dụng trên Tablet.
- l-\*: nghĩa là large, prefix class này có tác dụng trên PC.
