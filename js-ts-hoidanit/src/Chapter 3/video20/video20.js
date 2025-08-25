console.log("Video 20");
// khai báo biến và sử dụng các toán tử
console.log("khai báo biến và sử dụng các toán tử")
let a = 5;
let b = 10, c = 15;
console.log(a + b);
console.log(a - b);
console.log(a * c);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a);

// nhân chia trước + - sau
const d = a * (b + c);
console.log(d);

// phân biệt giữa a++ a--, ++a --a

// phân biệt giữa == và ===, != và !==
console.log("phân biệt giữa == và ===, != và !==")
let e = 5, f = "5"; // e là number, f là string
console.log(e == f);// trả về là true bởi vì == chỉ so sánh giá trị chứ không so sánh datatype
console.log(e == - f) // trả về là false bởi vì === vừa so sánh giá trị vừa so sánh datatype, do e và f cùng giá trị nhưng khác datatype nên trả về false
// toán tử != và !== cũng tương tự!!