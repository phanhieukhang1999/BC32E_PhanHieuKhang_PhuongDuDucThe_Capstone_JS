//NGƯỜI DÙNG NHẬP THÔNG TIN
mangThongTin = []
function renderThongTinNguoiDung(user) {

    var user = new Info();
    console.log(user);
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#password').value;
    user.confirmPass = document.querySelector('#confirmPass').value;
    user.name = document.querySelector('#name').value;
    user.phone = document.querySelector('#phone').value;
    // selectGender = document.querySelector('input[name="gender"]:checked').value;

    var selectGender = $("input[name='gender']:checked").val();
    console.log('giới tính là ', selectGender)
    //chuyển đổi data, male <=> true, female <=> false
    if (selectGender == 'Male') {
        user.gender = true;
        console.log(user.gender)
    }
    else if (selectGender == 'Female') {
        user.gender = false;
        console.log(user.gender)
    }
    else {
        user.gender = null;
    }

    //VALIDATION
    var valid = true; //mặc định là hợp lệ
    //--------------KIEM TRA RỖNG---------------
    valid &= kiemTraRong(user.email, '#error_required_email', 'Email ')
        & kiemTraRong(user.name, '#error_required_name', 'Name')
        & kiemTraRong(user.password, '#error_required_password', 'Password')
        & kiemTraRong(user.confirmPass, '#error_required_confirmPass', 'Password')
        & kiemTraRong(user.phone, '#error_required_phone',
            'Phone number')
    // & kiemTraRong(user.gender, '#error_required_gender', 'Gender');

    //---------------KIEM TRA ĐỊNH DẠNG------------
    //kiểm tra EMAIL
    valid = kiemTraEmail(user.email, '#error_valid_email', '')
    //kiểm tra PASSWORD
    if (user.password == '') {
        document.querySelector('#error_valid_password').style.display = "none"
    }
    else {
        valid = kiemTraMatKhau(user.password, '#error_valid_password', '')
    }


    //kiểm tra PASSWORD CONFIRM
    if (user.confirmPass !== user.password) {
        document.querySelector('#error_valid_confirmPass').innerHTML = 'Your password is not correct'
        document.querySelector('#error_required_confirmPass').style.display = 'none';
    }
    else {
    }

    //kiểm tra PHONE
    valid = kiemTraSo(user.phone, '#error_valid_phone', 'Your input ')
    valid = kiemTraDoDai(user.phone, '#error_valid_phone', 'Your input ', 10, 11)
    //kiểm tra NAME
    valid = kiemTraKyTu(user.name, '#error_valid_name', 'Your input')
    //---------------KIỂM TRA OPTION
    valid = kiemTraOption(user.gender, '#error_valid_gender', '')


    if (valid != true) {//khác true khi đã đã dính vào ít nhất 1 if ở trên}
        return false;
    }

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user //Dữ liệu gửi đi
    });
    //xử lý thành công
    promise.then(function (result) {
        console.log(result.data);
    })
    //xử lý thất bại
    promise.catch(function (err) {
        console.log(err)
    });


}

//CALL API
function luuThongTinNguoiDungApi() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user //Dữ liệu gửi đi
    });
    //xử lý thành công
    promise.then(function (result) {
        console.log(result.data);;
    })
    //xử lý thất bại
    promise.catch(function (err) {
        console.log(err)
    });
}

document.querySelector('#btnSignUp').onclick = function () {
    renderThongTinNguoiDung()
}



