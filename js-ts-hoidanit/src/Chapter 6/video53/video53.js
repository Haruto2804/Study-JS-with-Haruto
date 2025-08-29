console.log("Video 53!!");
const myBtnElement = document.getElementById("myBtn");
const myBackBtnElement = document.getElementById("backBtn");
const myTitleElement = document.getElementById("title");

// thay đổi màu bằng element.style.color
myBtnElement.addEventListener("click", () => {
    myTitleElement.style.color = "yellow";
    myTitleElement.style.backgroundColor = "black";
    // ta có thể thêm class bằng element.classList.add(<tên class>) - nếu muốn đặt tên class có 2 chữ trở lên thì không được dùng
    // dấu cách như: "Learn JS with Haruto" mà phải dùng như này "Learn","JS","with","Haruto"
    myTitleElement.classList.add("Learn","JS","with","Haruto");
})

// trả về như cũ
myBackBtnElement.addEventListener("click", () => {
    myTitleElement.style.color = "black";
    myTitleElement.style.backgroundColor = "unset"; // unset để không chỉnh màu gì cả
    myTitleElement.classList.remove("Learn","JS","with","Haruto"); // remove class
})