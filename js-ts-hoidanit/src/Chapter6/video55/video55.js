console.log("Video 55");
const myBtnElement = document.getElementById("submit");
const input = document.getElementById("input");
const prevNameElement = document.getElementById("prev");
// Lấy liệu người dùng từ local Storage 
const prevName = localStorage.getItem("name");
// nếu có dữ liệu thì in ra, không thì thôi
if(prevName) {
    prevNameElement.innerText = `${prevName}`;
}

// tạo sự kiện cho nút submit
myBtnElement.addEventListener("click", ()=> {
    // Lưu dữ liệu người dùng vào local Storage
    localStorage.setItem("name",input.value);
    document.getElementById("current").innerHTML = `<strong>${input.value}</strong>`
})

// local Storage ta có 4 phương thức
//localStorage.setItem(key,value) : lưu dữ liệu, value phải là chuỗi
//localStorage.getItem(key)       : lấy dữ liệu theo key
//localStorage.removeItem(key)    : Xóa dữ liệu theo key
//localStorage.clear(key)         : xóa toàn bộ dữ liệu đã lưu trong Local Storage