console.log("Video 43");
// khai báo Object sinh viên:
const sv1 = {
    name1: "Gia Bảo",
    age: 20
}
console.log("Thông tin sinh viên 1 ban đầu: ",sv1);
// get data bằng cách dùng dấu <tên object>.<tên thuộc tính cần truy xuất>
console.log("Tên sinh viên 1: ",sv1.name1)
//ta có thể thêm data:
sv1.tinhTrangHonNhan = "Độc thân";
console.log("Thông tin sinh viên 1 sau khi thêm data: ",sv1);
// ta có thể thay đổi dữ liệu của Object:
sv1.age = 2000;
console.log("Thông tin sinh viên 1 sau khi sửa data: ",sv1);
// ta có thể xóa data bằng cách dùng cú pháp delete <tên object>.<phần tử muốn xóa>
delete sv1.tinhTrangHonNhan;
console.log("Thông tin sinh viên 1 sau khi xóa: ",sv1);

// ngoài cách truy xuất bằng dấu . ta có thể dùng cách này
console.log("Cách truy xuất khác ngoài dấu .");
console.log("Tên sinh viên:",sv1["name1"]);
