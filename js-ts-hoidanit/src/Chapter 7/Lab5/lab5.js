console.log("Lab 5");
// #52. Bài Tập Lab 05
// Yêu cầu: xây dựng table users với data từ backend
// Bước 1: Bạn cần chạy backend
// npm run dev
// Kiểm tra backend đã hoạt động chưa:
// http://localhost:8000/
// Kiểm tra API đã hoạt động chưa:
// http://localhost:8000/users
// Bước 2: Thực hiện gọi API với fetch (lấy danh sách users)
// //sử dụng async await

// Bước 3: Sử dụng javascript render table
// Render động dữ liệu của table html dựa vào javascript và data của api
// Tham khảo template table html tại đây
// Gợi ý cách sử dụng javascript để chèn động nội dung cho table:
// const tbody = document.querySelector("#myTable tbody");
// tbody.innerHTML += `<tr><td>data 1</td><td>data 2</td></tr>`

// đầu tiên ta gọi API với fetch
const fecthData = async () => {
    const res = await fetch (" http://localhost:8000/users");
    const data = await res.json();
    console.log("Check data:",data);
    
    // insert data
    // B1: ta lấy phần tử table
    const tbody = document.querySelector("#users tbody");
    console.log("Tbody Element:",tbody)


    //B2: ta insert data bằng innerHTML
    // cách hardCode truyền động ta bằng thủ công:
    // tbody.innerHTML = `
    //         <tr>
    //             <td>Alfreds Futterkiste</td> 
    //             <td>Maria Anders</td>
    //             <td>Germany</td>
    //         </tr>
    // `

    // data sau khi trả về là một Object do đó để lặp Object ta dùng vòng lặp For-Each
    if(data && data.length) {
        data.forEach((user,index) => {
            // lưu ý: nếu ta ko có += thì dữ liệu sẽ bị ghi đè và chỉ in ra được phần tử cuối cùng
            // do đó ta cần += để nối chuỗi
            tbody.innerHTML += ` 
             <tr>
                <td>${user.id}</td> 
                <td>${user.name}</td>
                <td>${user.email}</td>
             </tr>
             `
        })

    }

    

}
fecthData();