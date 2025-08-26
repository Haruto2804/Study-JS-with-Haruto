console.log("Video32");
// global scope
let globalVar = "Tôi là biến toàn cục";
function show() {
    console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); // Truy cập được

// function scope
function sayHi() {
    let name1 = "hoidanit"; // name1 chỉ hoạt động trong hàm sayHi
    console.log("Hi " + name1);
    if (true) { // phạm vi khối, phạm vi nhỏ nhất
        let x = 10;
        const y = 20;
        console.log(x, y); // ✅ Truy cập được
    }

    console.log(x); // không truy cập được
}

sayHi();
console.log(name1); // ❌ Lỗi: name is not defined, vì name1 chỉ hoạt động trong hàm sayHi nên name1 sẽ không còn khi thoát khỏi hàm sayHi