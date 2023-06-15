function cong() {
    let so1 = document.getElementById('so1').value;
    let so2 = document.getElementById('so2').value;
    let add = document.getElementById('add').value;
    let sub= document.getElementById('sub').value;
    let mul= document.getElementById('mul').value;
    let div= document.getElementById('div').value;
    let  result;

    result = parseFloat(so1) + parseFloat(so2);
    document.getElementById('display').value = result;
}
function tru() {
    let so1 = document.getElementById('so1').value;
    let so2 = document.getElementById('so2').value;
    let add = document.getElementById('add').value;
    let sub= document.getElementById('sub').value;
    let mul= document.getElementById('mul').value;
    let div= document.getElementById('div').value;
    let  result;
    result =  parseInt(so1) - parseInt(so2);
    document.getElementById('display').value = result;
}
function nhan() {
    let so1 = document.getElementById('so1').value;
    let so2 = document.getElementById('so2').value;
    let add = document.getElementById('add').value;
    let sub= document.getElementById('sub').value;
    let mul= document.getElementById('mul').value;
    let div= document.getElementById('div').value;
    let  result;
    result = parseInt(so1) * parseInt(so2);
    document.getElementById('display').value = result;
}
function chia() {
    let so1 = document.getElementById('so1').value;
    let so2 = document.getElementById('so2').value;
    let add = document.getElementById('add').value;
    let sub= document.getElementById('sub').value;
    let mul= document.getElementById('mul').value;
    let div= document.getElementById('div').value;
    let  result;
    result = parseInt(so1) / parseInt(so2);
    document.getElementById('display').value = result;
}