console.log("Video 49");
// BÀI NÀY GIÚP CHÚNG TA HỌC CÁCH LẤY HTML VỚI DOM, QUA VIDEO TIẾP THEO TA SẼ HỌC ĐƯỢC THÊM CÁCH THAO TÁC TIẾP.

// 1. document.getElementById(id) giúp truy cập vào 1 phần tử HTML vì id là duy nhất nên luôn trả về một phần tử duy nhất
console.log("Trường hợp 1:");
const element = document.getElementById("username");
console.log(element); // trả về phần tử duy nhất

// nếu không tìm thấy sẽ trả về null
const element1 = document.getElementById("username1");
console.log(element1);// trả về null

// 2. document.querySelector chỉ trả về phần tử duy nhất khớp với bộ chọn .Haruto
console.log("Trường hợp 2:");
const findHaruto = document.querySelector(".Haruto");
console.log(findHaruto); // trả về phần tử đầu tiên khớp với bộ chọn .Haruto

//3. document.querySelectorAll trả về tất cả các phần tử khớp với bộ chọn .Haruto và sẽ trả về dưới dạng NodeList
console.log("Trường hợp 3:");
// trong file HTML có 2 phần tử khớp với .Haruto
const findHarutoAll = document.querySelectorAll (".Haruto");
// document.querySelecterAll trả về một NodeList nên ta có thể duyệt NodeList này bằng forEach:
findHarutoAll.forEach((item,value)=> {
    console.log(item); // in ra tất cả các phần tử trong NodeList của findHarutoAll, ta có 2 phần tử khớp với bộ chọn .Haruto
})