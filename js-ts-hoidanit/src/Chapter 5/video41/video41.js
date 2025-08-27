console.log("Video 41");
// cú pháp:
const ages = [10,20,30,40,34,2];
// mảng ban đầu
console.log("Before filter:");
ages.forEach((item,index) => {
    console.log("Item =",item," and index =",index);
})
// lọc tuổi
let ageFilter = ages.filter((item,index)=> {
    return item > 18;// lọc ra các tuổi lớn hơn 18
})
// mảng sau khi lọc tuổi
console.log("After filter:");
ageFilter.forEach((item,index) => {
    console.log("Item =",item," and index =",index);
})