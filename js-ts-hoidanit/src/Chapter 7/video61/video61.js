console.log("Video 61");

//Đồng Bộ (Synchronous):
// đây là xử lí đồng bộ, chạy từ tuần tự từ trên xuống dưới
console.log("1");
console.log("2");
console.log("3");

// ta có hàm setTImeout: chạy khối lệnh sau một khoảng thời gian (mili giây), 1 giây = 1000 mili giây
// Trường hợp bất đồng bộ
console.log("============")
console.log("4");
setTimeout(()=> {
    console.log("5"); // dù in ra 2 được viết trước khi in ra 3 nhưng ta đang xét thời gian 2 giây sau mới in ra 2 nên:
},2000)
console.log("6"); // kết quả chạy là 4 6 5


// - Ưu điểm
// + Hiệu suất: Lập trình bất đồng bộ cho phép các tác vụ không phụ thuộc nhau chạy song song. 
//              Điều này đặc biệt hữu ích khi xử lý các tác vụ tốn thời gian như gọi API, đọc/ghi tệp, hoặc truy vấn cơ sở dữ liệu. 
//              Thay vì chờ một tác vụ hoàn thành, chương trình có thể bắt đầu xử lý các tác vụ khác, giúp tối ưu hóa việc sử 
//              dụng tài nguyên của CPU và cải thiện tốc độ chung của ứng dụng.

// + Tăng trải nghiệm người dùng: Trong các ứng dụng có giao diện, lập trình bất đồng bộ giúp UI (giao diện người dùng) 
//                                không bị "đóng băng" trong khi chương trình đang thực hiện các tác vụ nặng. 
//                                Người dùng vẫn có thể tương tác với ứng dụng một 
//                                cách trôi chảy, mang lại trải nghiệm tốt hơn.

// - Nhược điểm:
// + Độ phức tạp: Việc xử lý các tác vụ phụ thuộc nhau trong lập trình bất đồng bộ có thể trở nên phức tạp. 
//   Bạn cần phải quản lý thứ tự thực thi của các tác vụ để đảm bảo rằng một tác vụ chỉ bắt đầu khi tác vụ mà nó phụ thuộc 
//   đã hoàn thành. 
//   Điều này thường yêu cầu sử dụng các cơ chế như Promises, async/await, hoặc callbacks, có thể dẫn đến hiện tượng "Callback Hell" nếu không được quản lý tốt.

// + Khó gỡ lỗi: Việc theo dõi luồng thực thi của các tác vụ song song có thể khó hơn so với lập trình đồng bộ. 
//   Khi xảy ra lỗi, việc xác định nguyên nhân và vị trí chính xác có thể mất nhiều thời gian hơn.

//==> Tóm lại, lập trình bất đồng bộ mang lại lợi ích lớn về hiệu suất và trải nghiệm người dùng nhưng đòi hỏi người lập trình phải 
//    có kỹ năng quản lý và xử lý các tác vụ phụ thuộc một cách cẩn thận để tránh các vấn đề về độ phức tạp và gỡ lỗi.