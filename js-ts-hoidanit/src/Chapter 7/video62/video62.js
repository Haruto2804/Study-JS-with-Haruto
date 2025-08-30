console.log("Video 62");
// PROMISE
// 3 trạng thái của Promise:
// pending  : chưa có kết quả - đang xử lí
// fulfilled: thành công      - trả về kết quả (resolve)
// rejected : thất bại        - trả về lỗi (reject)
// sử dụng promise:
// .then, .catch



// Ví dụ:
console.log("1. Bắt đầu");
// tạo một Promise để giả lập một tác vụ mất thời gian(Ví dụ: tải dữ liệu từ sever)
const myPromise  = new Promise ((resovle,reject)  => {
    console.log("2. Tác vụ trong Promise bắt đầu chạy (chạy ngay lập tức)");
    //setTimeout là một hàm bất đồng bộ, nó sẽ không dừng chương trình ở đây
    setTimeout(()=> {
        //return báo hiệu khi hoàn thành xong
        resovle("4. Tác vụ hoàn thành!")
    },2000)
})

// .then đăng kí một hành động sẽ làm khi Promise hoàn thành xong
myPromise.then((message) => { // message sẽ hứng giá trị resolve trả về của promise trong trường hợp này là "4. Tác vụ hoàn thành!";
    console.log(message)
})
console.log("3. Kết thúc kịch bản chính!");

/*
OUTPUT:
1. Bắt đầu
2. Tác vụ trong Promise bắt đầu (chạy ngay lập tức)
3. Kết thúc kịch bản chính
4. Tác vụ hoàn thành
*/

