class Mobile {
    // Các thuộc tính
    constructor(name,battery,waitMess,mailBox,sent,on,off) {
        this.name = name;
        this.battery = battery;
        this.waitMess = waitMess;
        this.mailBox = mailBox;
        this.sent = sent;
        this.on = on;
        this.off = off;
    }

    // Các chức năng.
    // Kiểm tra Bật hoặc tắt.
    onOrOff() {
        if (this.on == true) {
            alert('Điện thoại ' + this.name + ' đang bật');
        } else if (this.off == true) {
            alert('Điện thoại '+ this.name +' Đang tắt')
        }
    }

    //Bật điện thoại
    turnOnMobile() {
        this.on = true;
        alert('Điện thoại ' + this.name + ' đã bật');
        this.off = false;
    }

    //Tắt điện thoại
    turnOffMobile() {
        this.off = true;
        alert('Điện thoại ' + this.name + ' đã tắt');
        this.on = false;
    }

    //Hiện phần trăm pin
    displayBattery1(){
        document.getElementById('display1').value = this.battery+' %';
    }
    displayBattery2(){
        document.getElementById('display2').value = this.battery+' %';
    }

    //Khi tắt điện thoại
    sleepPhone1(){
        document.getElementById('displayTop1').value = '';
        document.getElementById('display1').value = '';
        document.getElementById('display3').value = '';
        document.getElementById('display5').value = '';
        document.getElementById('display7').value = '';
    }
    sleepPhone2(){
        document.getElementById('displayTop2').value = '';
        document.getElementById('display2').value = '';
        document.getElementById('display4').value = '';
        document.getElementById('display6').value = '';
        document.getElementById('display8').value = '';
    }

    //sạc điện thoại
    chargeSamSung () {
        this.battery = 100;
        alert('Sạc siêu nhanh Đã xạc '+this.name+' và đã đầy.')
        let ptb = this.battery+' %';
        document.getElementById('display1').value = ptb;
        return this.battery;
    }
    chargeIphone () {
        this.battery = 100;
        alert('Sạc siêu nhanh Đã xạc '+this.name+' và đã đầy.')
        let ptb = this.battery+' %';
        document.getElementById('display2').value = ptb;
        return this.battery;
    }

    //Gửi tin nhắn
    samsungSendMessage() {
        if (this.on == true) {
            let ttb = 'Bạn có một thông báo mới';
            document.getElementById('displayTop2').value = ttb;
            samSung.batteryReduction1();
        } else if (this.on == false) {
            alert('Điện thoại '+this.name+' Chưa bật.')
        }
    }
    iphoneSendMessage() {
        if (this.on == true) {
            let ttb = 'Bạn có một thông báo mới';
            document.getElementById('displayTop1').value = ttb;
            Iphone.batteryReduction2();
        } else if (this.on == false) {
            alert('Điện thoại '+this.name+' Chưa bật.')
        }
    }

    //Xem tin nhắn tới
    viewTheMessage1(){
        if (this.on == true) {
            let tnt = document.getElementById('display6').value;
            document.getElementById('display3').value = tnt;
            document.getElementById('displayTop1').value = '';
            samSung.batteryReduction1();
        } else if (this.on == false) {
            alert('Hãy bật '+this.name+' Của bạn để xem tin nhắn');
        }
    }
    viewTheMessage2(){
        if (this.on == true) {
            let tnt = document.getElementById('display5').value;
            document.getElementById('display4').value = tnt;
            document.getElementById('displayTop2').value = '';
            Iphone.batteryReduction2();
        } else if (this.on == false) {
            alert('Hãy bật '+this.name+' Của bạn để xem tin nhắn');
        }
    }

    //Xem Tin nhắn đã gửi
    viewSentMessages1 () {
        if (this.on == true) {
            let tdg = document.getElementById('display4').value;
            document.getElementById('display7').value = tdg;
            samSung.batteryReduction1();
        } else if (this.on == false) {
            alert('hãy bật '+this.name+' Của bạn để xem tin đã gửi');
        }
    }
    viewSentMessages2 () {
        if (this.on == true) {
            let tdg = document.getElementById('display3').value;
            document.getElementById('display8').value = tdg;
            Iphone.batteryReduction2();
        } else if (this.on == false) {
            alert('hãy bật '+this.name+' của bạn để xem tin đã gửi');
        }
    }

    //Pin giảm khi dùng
    batteryReduction1 () {
        let pt = this.battery -= 1;
        document.getElementById('display1').value = pt +' %';
    }
    batteryReduction2 () {
        let pt = this.battery -= 1;
        document.getElementById('display2').value = pt +' %';
    }
}

let samSung = new Mobile('Samsung',100,'','','','','');
let Iphone = new Mobile('Iphone',100,'','','','','');



// Bật điện thoại.
function turnOn1() {
    samSung.turnOnMobile();
    samSung.displayBattery1();
}
function turnOn2() {
    Iphone.turnOnMobile();
    Iphone.displayBattery2();
}



// Tắt điện thoại.
function turnOff1() {
    samSung.turnOffMobile();
    samSung.sleepPhone1();
}
function turnOff2() {
    Iphone.turnOffMobile();
    Iphone.sleepPhone2();
}



//Kiểm tra xem điện thoại đang bật hay tắt.
function onOrOff1() {
    samSung.onOrOff();
    samSung.batteryReduction1();
}
function onOrOff2() {
    Iphone.onOrOff();
    Iphone.batteryReduction2();
}


//Gửi tin nhắn
function sentMess1() {
    samSung.samsungSendMessage();
}
function sentMess2() {
    Iphone.iphoneSendMessage();
}


//Xem tin nhắn tới
function viewMess1() {
    samSung.viewTheMessage1();
}
function viewMess2() {
    Iphone.viewTheMessage2();
}

//Xem tin nhắn đã gửi
function messBox1() {
    samSung.viewSentMessages1();
}
function messBox2() {
    Iphone.viewSentMessages2();
}


//Sạc pin điện thoại
function charge1() {
    samSung.chargeSamSung();
}
function charge2() {
    Iphone.chargeIphone();
}