console.log("Video 30");
function greeting() {
    console.log("Hello World!");
}
for (let i = 0; i <= 10; i++) {
    greeting();
}
// Trong JS chúng ta không cần xác định kiểu dữ liệu trả về cho mà hàm mà chỉ cần dùng
// từ khóa function, ta cũng truyền tham số mà không cần phải (int a, int b) mà chỉ cần truyền biến thôi,  ta có hàm tính tổng như sau:
function sum(a, b) {
    return a + b;
}
console.log("Tong la:", sum(5, 5));
// ta cũng có thể + chuỗi dễ dàng
console.log("Log:", sum("LearnJS", " with Haruto"));