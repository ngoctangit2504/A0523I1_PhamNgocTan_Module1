let arrDt = [
        {tenDt:'Sony Xperia'},
        {tenDt: 'Samsung Galaxy'},
        {tenDt: 'Nokia 6'},
        {tenDt: 'Xiaomi Redmi Note 4'},
        {tenDt: 'Apple iPhone 6s'},
        {tenDt: 'Xiaomi Mi 5s Plus'},
        {tenDt: 'Apple iPhone 8 plus'},
        {tenDt: 'Fujitsu'},
        {tenDt: 'Oppo A71'},
    ]

function hienDt() {
    let list1 = document.getElementById('list1');
    list1.innerHTML = '';
    for (let i = 0; i<arrDt.length ;i++) {
        tenDt = arrDt[i].tenDt;
        list1.innerHTML+= `
            <div class = "dt">
            <h3>${arrDt[i].tenDt}</h3>
            </div>
        `;
    }
}
hienDt();

function them() {
}

function sua() {
}

function xoa () {
}

function add() {

}

