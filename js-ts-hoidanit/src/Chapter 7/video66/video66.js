console.log("Video 66");
//ASYNC/AWAIT: cú pháp cho code sạch đẹp
//  sync/await là một cú pháp trong JavaScript giúp bạn viết code bất đồng bộ (asynchronous) một cách dễ đọc và dễ quản lý hơn,
//  giống như code đồng bộ (synchronous). Nó được xây dựng dựa trên Promises, nhưng thay vì sử dụng các chuỗi .then() dài dòng và dễ gây 
//  nhầm lẫn, nó cho phép bạn viết code theo thứ tự từ trên xuống dưới một cách trực quan hơn.

// ôn lại video trước, ta sẽ lấy dữ liệu từ API
// Cách 1: Dùng Promise
fetch("http://localhost:8000/users")
.then(res=> res.json()) 
.then(data => console.log("Fetch with Promise:",data));//** 


//Cách 2: Dùng Async/Await
const fetchData = async () => {
    const res = await fetch ("http://localhost:8000/users"); 
    const data = await res.json();
    console.log("Fetch with Async/Await:",data);

}
fetchData();
// rõ ràng ta thấy Cách 2 khi dùng, ta sẽ thấy code sạch hơn, dễ bảo trì hơn, nên khi đi làm thực tế sẽ dùng Async/Await này.

// Nhận xét: Trong ví dụ trên, code sử dụng async/await trông gọn gàng và dễ hiểu hơn hẳn. Nó giống như việc bạn đang "yêu cầu" 
// chương trình "đợi" cho tới khi fetch xong, rồi "đợi" cho tới khi res.json() xong, sau đó mới tiếp tục in dữ liệu.
// Tóm lại, async/await là một bước tiến lớn trong lập trình bất đồng bộ của JavaScript, 
// giúp bạn viết code sạch, đẹp và dễ bảo trì hơn rất nhiều.

// Quá trình phát triển:


// Quá trình này có thể được tóm tắt như sau:
// - Callbacks: Đây là phương pháp ban đầu để xử lý các tác vụ bất đồng bộ.
// Một callback là một hàm được truyền vào một hàm khác như một đối số và được gọi khi tác vụ hoàn thành.
// Tuy nhiên, khi có nhiều tác vụ bất đồng bộ phụ thuộc vào nhau, bạn sẽ rơi vào tình trạng "Callback Hell" (còn gọi là "Pyramid of Doom")
// một cấu trúc code lồng nhau rất sâu, khó đọc và khó bảo trì.

// - Promises: Ra đời để giải quyết vấn đề của Callback Hell.
// Một Promise đại diện cho kết quả cuối cùng của một tác vụ bất đồng bộ, 
// có thể là thành công (.then()) hoặc thất bại (.catch()). Bằng cách sử dụng Promise, 
// bạn có thể xâu chuỗi các hoạt động bất đồng bộ một cách tuyến tính và dễ đọc hơn, tránh được cấu trúc code lồng nhau phức tạp.

// - Async/Await: Là một cú pháp mới được giới thiệu vào ECMAScript 2017, xây dựng trên nền tảng của Promises. 
// Mục tiêu của nó là làm cho code bất đồng bộ trông và hoạt động giống như code đồng bộ.