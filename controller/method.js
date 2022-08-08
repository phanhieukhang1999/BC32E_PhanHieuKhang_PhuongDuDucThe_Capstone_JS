function kiemTraRong(value, selectorError, name) {

    //.trim(): loại bỏ khoảng trống đầu và cuối của chuỗi
    //     abc     =>abc
    if (value.trim() !== '') {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' must be filled out!';
    return false;
}

function kiemTraKyTu(value, selectorError, name) {
    var regexLetter = /^[A-Z a-z]+$/;//có khoảng trống giữa A-Z vs a-z: cho phép khoảng trống
    if (regexLetter.test(value.trim())) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    // console.log(regexLetter.test(value.trim()));
    else if (value.trim() !== '') {
        document.querySelector(selectorError).innerHTML = name + ' is not a valid letter';
        return false;
    }
    else { return false };
}

function kiemTraSo(value, selectorError, name) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value.trim())) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' is not a valid number';
    return false;
}

function kiemTraEmail(value, selectorError, name) {
    var regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    else if (value.trim() !== '') {
        document.querySelector(selectorError).innerHTML = name + 'example@gmail.com';
        return false;
    }
    else { return false };
}

function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
    var lengthValue = value.replace(/\s/g, '').length;
    if (value.trim() == '') {
        document.querySelector(selectorError).innerHTML = '';
        return false;
    }
    else if (lengthValue > maxLength || lengthValue < minLength
    ) {
        document.querySelector(selectorError).innerHTML = name + ' is from ' + minLength + ' to ' + maxLength + ' numbers';
        return false;
    }
    else if (lengthValue <= maxLength || lengthValue >= minLength) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    else { return false };
}

function kiemTraGiaTri(value, selectorError, name, minValue, maxValue) {
    // value = Number(value);
    if (Number(value) <= maxValue && Number(value) >= minValue) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    //khi để trống sẽ là '' (rỗng) nhưng ép kiểu Number => '' sẽ biến thành 0. Nếu không nhập vào thì cần tạo điều kiện: vừa khác '' && vừa khác 0
    else if (value !== '' && value !== 0) {
        document.querySelector(selectorError).innerHTML = name + ' is from '
            + minValue.toLocaleString("jp-JP", { style: "currency", currency: "JPY" })
            + ' to ' +
            maxValue.toLocaleString("jp-JP", { style: "currency", currency: "JPY" });
        return false;
    }
    else { return false };
}

function kiemTraOption(value, selectorError, name) {
    if (value !== null) {
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + 'You must choose gender!';
    return false;
}

function kiemTraMatKhau(value, selectorError, name) {
    // 8 to 15 characters, least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    var decimal = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/

    if (decimal.test(value)) {
        document.querySelector(selectorError).value = '';
        return true;
    }

    document.querySelector(selectorError).innerHTML = name + 'Minimum 6 characters: 1 uppercase, 1 number, 1 special character';
    return false;

}
