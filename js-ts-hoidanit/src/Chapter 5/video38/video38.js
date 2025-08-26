console.log("Video 38");
// để truy cập phàn từ trong mảng thì ta sử dụng cú pháp: array[index]
// Lưu ý: Chỉ số (index) bắt đầu từ số 0
let colors = ["red", "green", "blue"];
console.log(colors);
console.log(colors[1]); // [1] là green
// nếu truy cập phần từ không tồn tại
console.log(colors[10]); // undefined

// ta có thể thay đổi các phần tử của mảng
console.log("ta có thể thay đổi các phần tử của mảng");
colors[0] = "yellow";
console.log("Before:", colors);
// thêm xóa phần tử:
// thêm vào cuối mảng với push()
colors.push("black");
// thêm vào đầu mảng với unshift()
colors.unshift(null);
console.log("Mảng sau khi thêm đầu và cuối,", colors);
// Xóa phần tử cuối mảng với pop()
colors.pop();
// Xóa phần tử đầu mảng với shift()
colors.shift();
console.log("Mảng sau khi xóa đầu và cuối", colors);