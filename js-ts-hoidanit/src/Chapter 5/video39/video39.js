console.log("Video 39");
// Vòng lặp for truyền thống
console.log("======FOR======");
const myClass = ["Haruto", "Gia Bảo", "Sinestrea", "Haru", "bla bla"];
for (let i = 0; i < myClass.length; i++) {
    console.log("i=", i, " and value is", myClass[i]);
}
// Vòng lặp For-Each (Thường dùng cho Object)
// cú pháp:
console.log("======FOR EACH======");
myClass.forEach(function (value, index) {
    console.log("value =", value, " and index =", index);
})