console.log("Video 51");
const element = document.getElementById("myBtn");
console.log(element);
// xử lí sự kiện click
function clickHandled () {
    alert("Bạn vừa nhấn nút đấy!!!");
}
element.addEventListener("click",clickHandled);
