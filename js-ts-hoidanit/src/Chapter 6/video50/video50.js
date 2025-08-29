console.log("Video 50")
// <button></button> : tạo một nút có thể bấm được


// để truy cập phần tử myButton ta làm cách sau:
const myBtn = document.getElementById("myButton");
console.log(myBtn);

// tạo một function để xử lí sự kiện click chuột
function handleClickBtn () {
    console.log("You click a button!");
}

// nhược điểm của cách làm này là ta đang viết logic code JS trong HTML, điều này dẫn đến nếu dự án lớn thì khó bảo trì, do đó ta cần một cách khác
// Ở video tiếp theo ta sẽ có cách để khắc phú điều này, hãy tiếp tục đọc!