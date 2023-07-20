function start() {
    var hero = document.getElementById("hero");
    var tangGiam = +prompt('Nhập giá trị bước nhảy');
    var viTriStar = +prompt('Nhập vị trí bắt đầu');

    setInterval(move, 10);

    function move() {
        if ((viTriStar >= 350)||(viTriStar <0)) {
            tangGiam = (-tangGiam);
        }
        viTriStar += tangGiam;
        hero.style.top = viTriStar+'px';
    }
}








