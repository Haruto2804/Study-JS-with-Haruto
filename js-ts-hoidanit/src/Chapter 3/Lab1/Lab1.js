/* Đề bài: Tạo các biến sau với const hoặc let (chọn phù hợp):
fullName: tên đầy đủ (string)
birthYear: năm sinh (number)
isStudent: true/false'
- Tính tuổi hiện tại dựa trên birthYear.
Gợi ý: tính năm hiện tại, sử dụng:
const today = new Date ();
const currentYear = today.getFullYear();

- In ra console với format:
Tên: [Fullname]
Tuổi: [calculated Age]

Sinh viên: true/false
============= Các phương thức của biến thời gian===============
today.getMonth()	Trả về tháng hiện tại (từ 0 đến 11). Lưu ý: Tháng 0 là tháng 1, tháng 1 là tháng 2, v.v...	7
today.getDate()	Trả về ngày trong tháng (từ 1 đến 31).	25
today.getDay()	Trả về ngày trong tuần (từ 0 đến 6). Lưu ý: 0 là Chủ Nhật, 1 là Thứ Hai, v.v...	1 (vì hôm nay là Thứ Hai)
today.getTime()	Trả về số mili giây đã trôi qua kể từ ngày 1 tháng 1 năm 1970.	1756191985000
*/
console.log("BAI THUC HANH LAB 1!");
// tính toán các biến
const birthYear = 2005;
const name = "Haruto";
const today = new Date();
const currentYear = today.getFullYear();
const calculated = currentYear - birthYear;
// tạo console
console.log(`Tên: ${name}
Tuổi: ${calculated}
Sinh viên: isStudent`);