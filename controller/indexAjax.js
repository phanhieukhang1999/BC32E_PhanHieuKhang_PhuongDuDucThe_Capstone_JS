function layThongTinSanPham() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        //Đường dẫn backend cung cấp
        method: 'GET',
        ResponseType: JSON
    })
    //xử lý thành công
    promise.then(function (result) {
        console.log(result.data.content);
        renderSanPham(result.data.content);
    })
    //Xử lý thất bại
    promise.catch(function (err) {

    });
}

//Gọi hàm lấy dữ liêu từ server khi trang web vừa load xong
window.onload = function () {
    layThongTinSanPham();
}

function renderSanPham(arrProduct) {
    var html = '';
    for (var i = 0; i < arrProduct.length; i++) {
        var sp = arrProduct[i];
        html += `
        <div class="col-4">
        <div class="card">
          <img class="card-img-top" src="${sp.image}" alt="" />
          <div class="card-body">
            <h4 class="card-title">${sp.name}</h4>
            <p class="card-text">${sp.shortDescription}</p>
            
          </div>
          <div class="card-footer">
            <div class="card-left">
              <a href="#">
                <button class="btn-buy">
                  Buy now
                </button>
              </a>
            </div>
            <div class="card-right">
              <a href="#">
                <button class="btn-buy">
                  ${sp.price}$
                </button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
        
        `;
    }
    document.querySelector('.row').innerHTML = html
}