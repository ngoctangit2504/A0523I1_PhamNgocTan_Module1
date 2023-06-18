function tinhNgay() {
    let thang = document.getElementById("month").value;
    switch (thang) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12": {
            ketQua = "Tháng có 31 ngày.";
            break;
        }
        case "4":
        case "6":
        case "9":
        case "11":{
            ketQua = "Tháng có 30 ngày.";
            break;
        }
        case "2": {
            ketQua = "Tháng có 29 hoặc 28 ngày.";
            break;
        }
        default: {
            ketQua = "Tháng nhập vào không hợp lệ"
        }
    }
    document.getElementById("ketQua").innerHTML = ketQua;
}