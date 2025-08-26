console.log("Lab 2");
// 1.Tạo hàm tinhTrungBinh(toan, van, anh)
// - Hàm nhận vào 3 điểm số (sử dụng tham số).
// - Trả về điểm trung bình (sử dụng return).

// 2.Tạo hàm xepLoai(diemTB)
// Dựa vào điểm trung bình, xếp loại học sinh:
// Từ 9 → "Xuất sắc"
// Từ 8 và nhỏ hơn 9 → "Giỏi"
// Từ 6.5 và nhỏ hơn 8→ "Khá"
// Còn lại → "Trung bình"
// Dùng if / else if / else để thực hiện

// Output:
// Cho trước 3 biến:
// const toan = 9;
// const van = 8;
// const anh = 7;

// Gọi các hàm trên để tính điểm trung bình và in ra kết quả sau:
// Điểm trung bình: 8.0
// Xếp loại: Giỏi

//Câu 1:
// khai báo biến
const toan = 9;
const van = 8
const anh = 7;
// cách 1: Arrow Functiom
const dtb1 = (toan, anh, van) => {
    return (toan + anh + van) / 3;
}
//cách 2: Function truyền thống
function dtb2(toan, anh, van) {
    return (toan + anh + van) / 3;
}
// tôi sẽ dùng cách Arrow Function
const xepLoai = (diem) => {
    if (diem >= 9 && diem <= 10) {
        return "Xuất sắc!!!";
    } else if (diem >= 8 && diem < 9) {
        return "Giỏi!!!";
    } else if (diem >= 6.5 && diem < 8) {
        return "Khá!!!";
    } else {
        return "Trung bình!!!";
    }
}
console.log(`Điểm trung bình: ${dtb1(toan, van, anh)}
Xếp loại: ${xepLoai(dtb1(toan, van, anh))}`);
