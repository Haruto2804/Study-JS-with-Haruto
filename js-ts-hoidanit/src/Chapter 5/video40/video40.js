console.log("Video 40");
// ta dùng map để tạo một mảng mới và biến đổi các phần tử trong mảng mà không làm thay đổi mảng ban đầu
const scores = [10, 5, 2, 4, 3];
console.log("Before:");
//ta dùng for each để read data
scores.forEach((value, index) => {
    console.log("Value =", value, " and index =", index);
})
//ta dùng map để modify data mà không làm thay đổi mảng ban đầu -> giúp đỡ lỗi
const scoresX2 = scores.map((elements, index) => {
    return elements - 1;
})
console.log("Ater use map:");
scoresX2.forEach((elements, index) => {
    console.log("Value =", elements, " and index =", index);
})
// ta có thể dùng cách code này, nhưng chỉ phù hợp với người đã làm quen với JS (không khuyến khích dùng!)
console.log("Cách khác: ");
const scoreX3 = scores.map((value, index) => value * 3);
scoreX3.forEach((value, index) => {
    console.log("value =", value, " and index =", index);
})
