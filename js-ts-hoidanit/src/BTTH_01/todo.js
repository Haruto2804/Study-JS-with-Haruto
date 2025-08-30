console.log("TODO");
// Bước 1: tạo mới todo
// Tạo file create.todo.html, với nội dung sau:
// form html để tạo mới todo, bao gồm:
// - Input để nhập todo
// - Button để submit
// Khi nhấn nút submit, sẽ cần xử lý:
// 1. Lấy dữ liệu (tên todo) tại input
// 2. Lưu todo vào localStorage theo định dạng object { id, name}
// Id của todo sẽ được random ngẫu nhiên (cần tham số này, để sau này xóa todo)
// Ví dụ: data todo khi lưu: { id: 1, name: “learn javascript”}
// LocalStorage sẽ lưu dưới định dạng array: localStorage.setItem(todo, data)
// [
// { id: 1, name: “learn javascript”},
// { id: 2, name: “learn typescript”}
// ...
// ]
// 3. Lưu todo thành công, redirect về file video70.html
// Bước 2: Hiển thị danh sách todo
// Hiển thị danh sách todo dưới dạng table, data lấy từ localStorage, tương tự :
// Id Name Action
// 1 Learn javascript Button Xóa
// 2 Learn typescript Button Xóa

// Bước 3: Xử lý hành động xóa todo
// Khi nhấn vào button xóa trong table, sẽ tiến hành xóa todo. Sử dụng JavaScript để:
// 1. Lấy id của todo cần xóa
// Gợi ý:
// //với html, gán data attribute
// <td><button class="delete-btn" data-id="1">Xóa</button></td>
// // với javascript gán sự kiện click cho tất cả nút có class "delete-btn"
// document.querySelectorAll('.delete-btn').forEach(function(button) {
// button.addEventListener('click', function() {
// const id = button.getAttribute('data-id');
// });
// });
// 2. Sử dụng hàm filter để xóa data localStorage
// 3. Xóa thành công, reload lại website để thấy kết quả




//tạo object để lấy dữ liệu todo list
// đầu tiên ta lấy phần tử HTML
const todoNameElement = document.getElementById("todoname");
const submitBtnElement = document.getElementById("submit");
const tbody = document.querySelector("#users tbody");
// xử lí sự kiện cho nút submit
submitBtnElement.addEventListener("click",()=> {
    // lấy dữ liệu tên todo tại input
    const todoName = todoNameElement.value;
    const idTodo = Math.floor(Math.random() *100000000000000); // hàm lấy id ngẫu nhiên, nhưng cách này phù hợp với úng dụng nhỏ dễ trùng lặp nên cần dùng cách khác, tham khảo trên mạng
    // để chuyển đổi data vào Local Storage ta cần lưu data(Object) dưới dạng JSON(chuỗi) do đó ta cần tạo object user trước
    
    // tạo OBJECT USER là data ta lấy được
    const todoData = {
        id: idTodo,
        todoName: todoName
    }
    // chuyển đổi OBJECT thành chuỗi JSON = JSON.stringyf()
    const todoJSON = JSON.stringify(todoData);
    // ta lưu chuỗi JSON data vừa chuyển đổi vào Local Storage
    localStorage.setItem("todoInfo",todoJSON);
    console.log("Đã lưu");
  //  window.location.href = "todoList.html";
    // insert data từ local Storage
    const JSONdata = localStorage.getItem("todoInfo");
    const todoInfo = JSON.parse (JSONdata);
    // insert data
    tbody.innerHTML = 
    `
         <tr>
                <td>${todoInfo.id}</td>
                <td>${todoInfo.name}</td>
                <td>Germany</td>
          </tr>
    `
})