console.log("Video21");
// Comment code dùng Ctrl + /, Comment code nhiều dòng code bằng /* */

//console
console.log("Info"); // in thông tin bình thường, trắng
console.error("Oops my mistake!!"); // in lỗi, đỏ
console.warn("test warning");// in cảnh báo, vàng
// Error: Lỗi buộc phải fix, Warn: cảnh báo, nhưng vẫn chạy được, nếu fix đc thì càng tốt
// Lưu ý:
// Không nên + chuỗi dễ sai
let name = "Haruto";
let age = 20;
//có 2 cách:
//cách 1:
console.log("Name:" + name + ", Age: " + age);
// cach 2:
console.log("Name:", name, ", Age: ", age);
// Không cần phải thêm dấu cách vì console.log đã tự động thêm dấu cách rồi

// in 2 biến một lúc
console.log(name, age);

// tô màu cho console.log(), bằng %c
console.log("%cCảnh báo", "color: red; font-weight: bold;");
