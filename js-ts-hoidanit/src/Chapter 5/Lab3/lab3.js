console.log("Lab3");

// Hãy tạo một mảng products chứa danh sách 5 sản phẩm, mỗi sản phẩm là một object
// có các thuộc tính:

// - name (tên sản phẩm)
// - price (giá sản phẩm)
// - inStock (true/false – còn hàng hay không)

// Ví dụ:
// {
// name: "T-shirt",
// price: 200,
// inStock: true
// }
// Hãy thực hiện:
// 1. In ra tên của sản phẩm đầu tiên.
// 2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
// 5. Dùng forEach( ) để in ra tất cả tên sản phẩm.
// 6. Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.
// 7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true).
// 8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên.

// ta dùng for Each để duyệt danh sách sản phẩm, tạo 1 hàm để thực hiện chức năng này, để tái sử dụng code, ta có thể dùng console.log(danhSachSanPham) để dùng
const inSanPham = () => {
danhSachSanPham.forEach (product=> {
    // code điều kiện cho inStock
    const tinhTrang = product.inStock ? "Còn hàng" : "Hết hàng";
    console.log(`Tên sản phẩm: ${product.name}
Giá sản phẩm: ${product.price}
Tình trạng hàng hóa:`,tinhTrang);
})
}
let sanPham1 = {
    name: "Điện thoại",
    price: 5000000,
    inStock: true
}
let sanPham2 = {
    name: "Laptop",
    price: 25000000,
    inStock: false
}
let sanPham3 = {
    name: "Bút bi",
    price: 5000,
    inStock: true
}
let sanPham4 = {
    name: "Gấu bông",
    price: 100000,
    inStock: false
}
let sanPham5 = {
    name: "Nồi cơm điện",
    price: 300000,
    inStock: true
}
const danhSachSanPham = [sanPham1,sanPham2,sanPham3,sanPham4,sanPham5];
console.log("Original: ",danhSachSanPham);
// câu 1:
console.log("1/Tên của sản phẩm đầu tiên là:",sanPham1.name);
console.log("===============================================");

// câu 2:
// Thay đổi giá sản phẩm thứ hai thành 150
//===========
// nếu ta dùng cách 1 thì mảng chứa sản phẩm ban đầu vô hình chung cũng sẽ bị sửa đổi
// Cách 1: Không an toàn:
// sanPham2.price = 150;
// console.log("2/Danh sách sản phẩm sau khi làm câu 2:")
// inSanPham();
//===========
// Do đó ta có thể dùng cách này để đảm bảo an toàn
//Cách 2: Đảm bảo an toàn
const product2 = [sanPham1, {
    name: sanPham2.name,
    price: 150,
    inStock: sanPham2.inStock
},sanPham3,sanPham4,sanPham5]
console.log("2/Danh sách sản phẩm sau khi làm câu 2:");
console.log(product2);


// câu 3:
console.log("===============================================");
console.log("3/Danh sách sản phẩm sau khi làm câu 3:");

// Cách 1: tạo một sản phẩm mới rồi thêm vào danh sách
// const sanPham6= {
//     name: "Tivi",
//     price: 5500000,
//     inStock: false
// }
// danhSachSanPham.push(sanPham6); // đẩy (thêm) sản phẩm mới vào cuối mảng
// inSanPham();

//Cách 2: Đẩy trực tiếp vào danh sách
danhSachSanPham.push({
    name:"Tivi",
    price: 5500000,
    inStock: false
});
console.log(danhSachSanPham);
// câu 4:
console.log("===============================================");
danhSachSanPham.pop(); // xóa sản phẩm cuối
console.log("4/Danh sách sản phẩm sau khi làm câu 4:");
inSanPham();

// câu 5:
console.log("===============================================");
console.log("5/ Tên các sản phẩm sau khi làm câu 5:");
danhSachSanPham.forEach((item,index) => {
    console.log(index+1+". "+ item.name);
})

// câu 6
console.log("===============================================");
console.log("6/ Giá các sản phẩm sau khi làm câu 6:"); 
const danhSachGiaSP = danhSachSanPham.map((item,index)=> {
    return item.price;
})
// duyệt
console.log(danhSachGiaSP);

// câu 7
console.log("===============================================");
console.log("6/ Danh sách các sản phẩm còn hàng sau khi làm câu 7:"); 
const danhSachConHang = danhSachSanPham.filter ((item,index)=> {
    return item.inStock === true;
})
console.log(danhSachConHang);

// câu 8
console.log("===============================================");
console.log("6/ Các thuộc tính của sản phẩm đầu tiên sau khi làm câu 8:");
for(let key in sanPham1) {
    console.log(key,":",sanPham1[key]);
} 