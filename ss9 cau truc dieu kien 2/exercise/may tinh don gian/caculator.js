function set(op) {
    document.getElementById("ketQua").value += op;
}
function ce() {
    let elem = document.getElementById("ketQua").value;
    let length = elem.length;
    length--;
    let a = elem.substr(0, length);
    document.getElementById("ketQua").value = a;
}
function answer() {
    let Exp = document.getElementById("ketQua");
    let Exp1 = Exp.value;
    let result = eval(Exp1);
    //alert(result);
    Exp.value = result;
}