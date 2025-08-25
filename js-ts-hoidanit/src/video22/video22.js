console.log("Video22");
// TEMPLATE STRING

// Dấu backtick (` `) => nút bên trái số 1

// Ví dụ ta có:
const age = 20;
const name = "Haruto";

// Ta thực hiện nối chuỗi bằng cách truyền thống:
console.log("Cách cơ bản: My name is " + name + " and my age is " + age);
//-> việc dùng dấu + các dấu "", '' sẽ gây bất tiện khi đọc code do đó ta sẽ thay thế dùng template string

// ta làm cách template như sau:
console.log(`Sử dụng Template String: My name is ${name} and my age is ${age} `);
// gán biến vào chuỗi dùng ${<tên biến>}
// việc dùng dấu backtick (``) sẽ dễ dùng và gần với ngôn ngữ tự nhiên hơn

// Về việc xuống dòng
// Đối với Template String trong dấu backtick việc xuống dòng vô cùng đơn giản, chỉ cần Enter xuống dòng thì string sẽ xuống dòng, không cần \n một cách truyền thống nữa
// Ví dụ:
console.log(`My name is Haruto
and myAge is 20`)
