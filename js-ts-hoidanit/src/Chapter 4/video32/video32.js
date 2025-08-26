console.log("Video32");
const sum = (a, b, c) => {
    console.log("run after"); // vẫn hoạt động
    if (typeof a != 'number') { // kiểm tra biến a có phải là number hay không, nếu không phải number thì thực hiện khối lệnh này!
        console.log("run empty return");
        return; // return 0 tương đương với void
    }
    return a + b + c; // khối lệnh chạy tới đây là dừng 
    console.log("run after") // dòng này sẽ không chạy
}
console.log(sum(1, 2, 3));