var arrSanPham = [];
let id = 7;
function layThongTinSanPhamApi() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + id,
        method: 'GET'
    });
    //Xử lý thành công
    promise.then(function (result) {
        console.log(result.data.content);
        var arrSanPham = result.data.content;
        var html = '';
        document.querySelector('#name').innerHTML = arrSanPham.name;
        document.querySelector('#description').innerHTML = arrSanPham.description;
        document.querySelector('#price').innerHTML = arrSanPham.price + '$';
        document.querySelector('#quantity').value = Number(arrSanPham.quantity);
        document.querySelector('#image').src = arrSanPham.image;
        var sizeArray = arrSanPham.size;
        //tạo nút Size
        for (index = 0; index < sizeArray.length; index++) {
            html += `
            <button id="btnSize" style="display:flex; align-items:center;justify-content:center;"
            onclick="pickSize()" >
                <span>${sizeArray[index]}</span>
            </button>
            `;
        }

        //thay đổi màu sắc khi click chọn size
        pickSize = () => {
        }

        //thay đổi số lượng trên giỏ hàng
        buyProduct = () => {
            document.querySelector('#qtyBuy').innerHTML = "("+ document.querySelector('#quantity').value + ")";
        }

        //tạo chức năng nút cộng trừ số lượng
        document.querySelector('#upQty').onclick = () => {
            document.querySelector('#quantity').value = Number(document.querySelector('#quantity').value) + 1;
        }
        document.querySelector('#downQty').onclick = () => {
            document.querySelector('#quantity').value = Number(document.querySelector('#quantity').value) - 1;
        }

        document.querySelector('#btnSize').innerHTML = html;
        var relatedProduct = arrSanPham.relatedProducts;
        var relatePro = '';
        //tạo related product 
        for (index = 0; index < relatedProduct.length; index++) {
            relatePro += `
            <div class="cell col-lg-4 col-md-6 col-sm-12 mt-5">
                <div class="card-top">
                    <img id="image" src="${relatedProduct[index].image}" alt="" width="220" height="180" />
                    <p id="name">${relatedProduct[index].name}</p>
                    <p id="shortDescription">${relatedProduct[index].shortDescription}</p>
                </div>
                <div class="card-bottom" style="display:flex">
                    <div class="cell-left">
                        <a href="#">
                            <button>
                                <span>
                                    Buy now
                                </span>
                            </button>
                        </a>
                    </div>
                    <div class="cell-right">
                        <span id="price">${relatedProduct[index].price}</span>
                    </div>
                </div>
            </div>
            `
        }
        document.querySelector('.line1').innerHTML = relatePro;
    })
    //xử lý thất bại
    promise.catch(function (err) {
        console.log(err.data)
    });
}
//Tạo hàm gán thông tin sản phẩm vào giao diện
function renderSanPham(idSanPham) {
    var sanPham = new content();
    console.log(sanPham);
    document.querySelector('#name').innerHTML = sanPham.name;
    document.querySelector('#description').innerHTML = sanPham.description;
    document.querySelector('#price').innerHTML = sanPham.price;
    document.querySelector('#quantity').innerHTML = sanPham.quantity;
    document.querySelector('#size').innerHTML = sanPham.size;
    document.querySelector('#image').innerHTML = sanPham.image;
}
//gọi hàm khi vừa load trang web
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log('params', myParam);
    layThongTinSanPhamApi();
}
