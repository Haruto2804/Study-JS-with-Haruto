console.log ('Video 44');
// KHAI BÁO
const person1 = {
    name: "Haruto",
    score: 9.0,
    country: "Japan"
}
const person2 = {
    name: "Gia Bảo",
    score: 7.0,
    country: "VietNam"
}
const person3 = {
    name: "Sinestrea",
    score: 9.0,
    country: "AOV"
}

//==============================================================================================================
// FOR IN
// cú pháp for in
// ta dùng For in để lấy ra key hoặc nội dung key hoặc cả 2 của 1 đối tượng
// nếu dùng for in cho mảng(Array) thì kết quả lấy ra sẽ là index của Mảng
for(let key in person3) {
    console.log(key,":",person3[key]);
}
// ta có thể dùng cách khác và cho ra kết quả tương tự for in.
for (let [key, value] of Object.entries(person3)) { // cách code này trả key và value, nhưng điều này không khuyến khích vì phải mượn phương thức từ JS nên dùng cách trước
    console.log(key,value)
}

//==============================================================================================================
//FOR OF
// ta dùng for of để lấy ra các phần tử của mảng:
// Ví dụ ta có mảng về trái cây:
const fruits = ["Banana","Orange","PineApple","Apple"];
// duyệt Mảng dùng for of
console.log("Cách dùng For-Of:");
for(let key of fruits) {
    console.log(key);
}

// ta cũng có thể dùng for Each thay cho For of
console.log("Cách dùng For-Each:");
fruits.forEach((item,value)=> {
    console.log(item);
})

// nếu cố chấp muốn dùng For Of cho đối tượng ta có thể làm như sau
for(let value of Object.values(person3)) { // cách code này trả về value
    console.log(value);
}
// ngoài ra ta còn có cách code khác
for (let value of Object.entries(person3)) { // cách code này trả key và value
    console.log(value)
}