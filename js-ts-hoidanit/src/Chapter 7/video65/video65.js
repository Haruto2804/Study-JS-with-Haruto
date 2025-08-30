// console.log("Video 65");
// LƯU Ý: KHÔNG NÊN DÙNG CALLBACK, NÊN NÉ LUÔN! TRÁNH TÌNH TRẠNG NHIỀU CALLBACK LỒNG VÀO NHAU DẪN ĐẾN TÌNH TRẠNG CALLBACK HELL


// Trong JavaScript, một CallBack là một hàm được truyền vào như một đối số cho một hàm khác, 
// và sẽ được gọi lại (callback) sau khi hàm kia thực hiện xong công việc của nó.
// - Callback thường được dùng trong các tác vụ bất đồng bộ (asynchronous) như:
// + Đọc file
// + Gọi API
// + Chờ đợi sự kiện

// Callback Hell, hay còn gọi là Pyramid of Doom, là một thuật ngữ mô tả tình trạng 
// mã JavaScript trở nên khó đọc và khó bảo trì do sử dụng quá nhiều các callback lồng nhau (nested callbacks): khó bảo trì, khó
// bắt lỗi, khó kiểm soát luồng dữ liệu, gây mệt mỏi cho lập trình viên khi bảo trì
// Tình trạng này thường xảy ra khi bạn cần thực hiện nhiều tác vụ bất đồng bộ (asynchronous tasks) một cách tuần tự, 
// nơi kết quả của một tác vụ lại là đầu vào cho tác vụ tiếp theo.


// ví dụ:
const dunNuoc = (callback) => {
    console.log("Đang đun nước...");
    setTimeout(()=> {
        console.log("Nước đã sôi")
    },2000)
    setTimeout(() => {
        console.log("Đang pha cà phê...")
    },4000);

    setTimeout(() => {
        callback(); // sử dụng callback như một đối số truyền vào hàm khác, giúp code dễ đọc hơn, nhưng không khuyến khích dùng
    }, 6000);
}
const phaCaPhe = () => { 
    console.log("Cà phê đã sẵn sàng!");
}
dunNuoc(phaCaPhe);

// Không nên khuyến khích sử dụng callback cho các tác vụ bất đồng bộ phức tạp hoặc tuần tự. Trong các trường hợp đó, bạn nên ưu tiên 
// sử dụng Promises hoặc async/await vì chúng giúp mã dễ đọc và dễ bảo trì hơn, tránh được tình trạng Callback Hell