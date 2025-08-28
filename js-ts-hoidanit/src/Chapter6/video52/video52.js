console.log("Video 52");
const myBtnElement = document.getElementById("myBtn");
const myTitleElement = document.getElementById("title");
const myBackBtnElement = document.getElementById("backBtn");

// tạo sự kiện
myBtnElement.addEventListener("click", ()=> {
       // // innerText chỉ thay đổi được chuỗi string mà thôi
   // myTitleElement.innerText = "CHANGE TEXT WITH HARUTO"; 

   //nếu muốn định dạng phần tử HTML bằng các thẻ tag HTML, định dạng khác như in đậm in nghiêng ta dùng innerHTML
   myTitleElement.innerHTML = "<strong>Chào bạn đã đến</strong>, <em>với trang web của Haruto!!!</em>";
})

myBackBtnElement.addEventListener("click",()=> {
    //myTitleElement.innerText = "Video 52"; //
    myTitleElement.innerHTML = "<strong>VIDEO 52</strong>";
})
