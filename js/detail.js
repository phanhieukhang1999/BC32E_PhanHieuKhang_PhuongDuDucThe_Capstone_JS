function layDanhSachProductApi() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=5',
        method: 'GET'
    });
    //Xử lý thành công
    promise.then(function (result) {
        console.log(result.data);
        //lấy dữ liệu dạng mảng từ server gán cho mảng product vừa tạo
        arrProduct = result.data;
        //kết quả trả ra object có vị trí "1" trong chuỗi Product
        //product: id, name, price,img, description
        console.log(arrProduct);
        
    })
    //xử lý thất bại
    promise.catch(function (err) {
        console.log(err.data)
    });
}
//gọi hàm khi vừa load trang web
window.onload = function () {
    layDanhSachProductApi();
}
