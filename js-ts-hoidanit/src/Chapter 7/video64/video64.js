console.log("Video 64");
const doSomething = () => {
    const a = 10;
    const b = 0;
    if(b===0) {
        throw new Error ("Thực hiện chia cho 0")
    } 
    console.log("Kết quả:",a/b);
    return a/b;
}
try {
    doSomething();
} catch(error) {
    console.log("Có lỗi xảy ra!",error);
} finally {
    console.log("Run final");
}
// Khối try: Đây là khối chứa đoạn mã mà bạn muốn theo dõi. Nếu bất kỳ lỗi nào xảy ra trong khối này (ví dụ: một hàm không tồn tại, 
// một biến chưa được khai báo, v.v.), quá trình thực thi 
// sẽ ngay lập tức dừng lại và chuyển sang khối catch. Trong ví dụ, doSomething là hàm có thể gây ra lỗi.

// Khối catch: Khối này sẽ chỉ được thực thi nếu có lỗi xảy ra trong khối try. Nó nhận một đối số (ở đây là error), 
// chứa thông tin chương trình sẽ in ra dòng "Có lỗi xảy ra!" khi có lỗi chi tiết về lỗi đó. 
// Mục đích của khối này là để bạn "bắt" lỗi và xử lý nó một cách có kiểm soát, 
// thay vì để chương trình bị dừng đột ngột. Trong hình, chươ

// Khối finally: Khối này luôn luôn được thực thi, bất kể có lỗi 
// xảy ra hay không. Nó được sử dụng cho các tác vụ dọn dẹp, chẳng hạn như đóng kết nối file, 
// kết nối mạng, hoặc giải phóng tài nguyên. Dù doSomething có lỗi hay không, dòng "Run final" sẽ luôn được in ra.