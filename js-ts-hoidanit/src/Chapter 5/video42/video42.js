console.log("Video 42");
// GIới thiệu về Object
const scores = [10,2,5,3,8];
// khai báo biến trong Object theo cú pháp: 
// key: value
const sv1 = {
    name: "Bảo",
    age: 20,
    score: 10,
    address: {
        city: "TPHCM",
        country: "VietNam"
    }
}
const sv2 = {
    name: "Haruto",
    age: 1000,
    score: 2,
    address: {
        city: "Tokyo",
        country: "Japan"
    }
}
const sv3 = {
    name: "Sinestrea",
    age: 20,
    score: 10,
    address: {
        city: "AOV City",
        country: "Bình nguyên vô tận"
    }
}
const sinhVien = [sv1,sv2,sv3];
console.log("score >>",scores);
console.log("Danh sach sinh vien >>",sinhVien);