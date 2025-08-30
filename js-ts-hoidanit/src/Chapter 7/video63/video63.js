console.log('Video 63')
// Ở bài này ta sẽ tìm hiểu API là gì và cách lấy dữ liệu API thông qua Promise
// đầu tiên là phải lấy API về
// ta có fetch ("url API") để lấy dữ liệu về
const response = fetch ("http://localhost:8000/users");
// sau khi lấy response về, ta thử in ra:
console.log("Response sau khi lấy về:",response); // response sau khi lấy về sẽ ở dạng Promise với trạng thái pendding là đang chờ
// như vậy sau khi học ở bài học trước, ta dùng .then để lấy data từ response
response.then(res=> {
    console.log("Response sau khi dùng .then: ",res); 
    // nhưng kết quả trả về là một đối tượng response chứ không phải là dữ liệu ta cần lấy
    // mà là một đối tượng chứa tất cả thông tin về phản hồi từ máy chủ, bao gồm cả dữ liệu đó.
    // do đó ta cần chuyển đổi dạng data này thành dạng object để JS có thể đọc được
})
// để chuyển đổi thành data ta dùng .json

// ta thực hiện chuyển đổi ở đây
response
.then(res => res.json ())
.then((data)=> {
    console.log("Data sau khi lấy được:");
    console.log(data);
})