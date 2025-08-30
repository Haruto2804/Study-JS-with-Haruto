// Yêu cầu: Tạo form đăng nhập đơn giản
// Tạo một form html gồm:
// - Input nhập username
// - Input nhập password
// - Button "Đăng nhập"
// Khi người dùng nhấn nút “Đăng nhập”:
// - Lấy giá trị từ hai ô nhập liệu
// - So sánh với username/password đã định nghĩa sẵn trong JavaScript (hardcode)
// username: baosenpai2005@gmail.com
// password: 123456

// Nếu đúng:
// - Hiện thông báo "Đăng nhập thành công!" bằng alert()
// - Redirect tới trang html (success.html)
// Nếu sai:
// - Hiện alert("Tài khoản hoặc mật khẩu sai")
// - Đổi màu viền ô input thành đỏ (dùng .style.borderColor)
console.log("Lab 4");
// lấy phần tử HTML
const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const myBtn = document.getElementById("button");

// tạo sự kiện cho nút Submit

myBtn.addEventListener("click", () => {
    const username = usernameElement.value;
    const password = passwordElement.value
    if(username === "baosenpai2005@gmail.com" && password === "123456") {
        alert("Đăng nhập thành công!");
        window.location.href = "welcome.html"; // cú pháp redirect
    }else {
        alert("Tài khoản hoặc mật khẩu sai");
        usernameElement.style.borderColor = "red";
        passwordElement.style.borderColor = "red";
    }
})