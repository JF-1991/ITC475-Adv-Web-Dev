// get time
var date = 0;

function timeGet() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    localStorage.setItem('time',hour);
    document.getElementById("time").innerHTML = [hour, minute, second].join(" : ");

    setTimeout(timeGet,1000);
}
timeGet();



function getData() {
    // start times
    var LRLStart = document.getElementById("LRStart").value;
    var BR1Start = document.getElementById("BR1Start").value;
    var BR2Start = document.getElementById("BR2Start").value;
    var BRStart = document.getElementById("BRStart").value;
    var WashStart = document.getElementById("WashStart").value;
    var DryerStart = document.getElementById("DryStart").value;
    var FDStart = document.getElementById("FDStart").value;
    var BDStart = document.getElementById("BDStart").value;
    var GDStart = document.getElementById("GDStart").value;
    var KStart = document.getElementById("KStart").value;
    var DRStart = document.getElementById("DRStart").value;
    // end times
    var LRLEnd = document.getElementById("LREnd").value;
    var BR1End = document.getElementById("BR1End").value;
    var BR2End = document.getElementById("BR2End").value;
    var BREnd = document.getElementById("BREnd").value;
    var WashEnd = document.getElementById("WashEnd").value;
    var DryerEnd = document.getElementById("DryEnd").value;
    var FDEnd = document.getElementById("FDEnd").value;
    var BDEnd = document.getElementById("BDEnd").value;
    var GDEnd = document.getElementById("GDEnd").value;
    var KEnd = document.getElementById("KEnd").value;
    var DREnd = document.getElementById("DREnd").value;
    // save data to storage
    localStorage.setItem("1",LRLStart);
    localStorage.setItem("2",LRLEnd);
    localStorage.setItem("3",BR1Start);
    localStorage.setItem("4",BR1End);
    localStorage.setItem("5",BR2Start);
    localStorage.setItem("6",BR2End);
    localStorage.setItem("7",BRStart);
    localStorage.setItem("8",BREnd);
    localStorage.setItem("9",WashStart);
    localStorage.setItem("10",WashEnd);
    localStorage.setItem("11",DryerStart);
    localStorage.setItem("12",DryerEnd);
    localStorage.setItem("13",FDStart);
    localStorage.setItem("14",FDEnd);
    localStorage.setItem("15",BDStart);
    localStorage.setItem("16",BDEnd);
    localStorage.setItem("17",GDStart);
    localStorage.setItem("18",GDEnd);
    localStorage.setItem("19",KStart);
    localStorage.setItem("20",KEnd);
    localStorage.setItem("21",DRStart);
    localStorage.setItem("22",DREnd);
}

// simulate the smart home appliances (manipulate icons)
function simulate() {
    // active icons
    var LRL = document.getElementById("LRL_ON");
    var BRL1 = document.getElementById("BRL1_ON");
    var BRL2 = document.getElementById("BRL2_ON");
    var BRF = document.getElementById("BRF_ON");
    var Wash = document.getElementById("WASH_ON");
    var Dryer = document.getElementById("DRYER_ON");
    var FD = document.getElementById("FD_ON");
    var BD = document.getElementById("BD_ON");
    var GD = document.getElementById("GD_ON");
    var KF = document.getElementById("KF_ON");
    var DRL = document.getElementById("DRL_ON");
    
    // retrieve local time from storage
    var time = localStorage.getItem("time");

    // living room light icon
    var lrs = localStorage.getItem("1");
    var lre = localStorage.getItem("2");
    if (lrs > time || lre < time) {
        LRL.style.display = "none";
    } else {
        LRL.style.display = "block";
    }
    // bedroom 1 light icon
    var br1s = localStorage.getItem("3");
    var br1e = localStorage.getItem("4");
    if (br1s > time || br1e < time) {
        BRL1.style.display = "none";
    } else {
        BRL1.style.display = "block";
    }
    // bedroom 2 light icon
    var br2s = localStorage.getItem("5");
    var br2e = localStorage.getItem("6");
    if (br2s > time || br2e < time) {
        BRL2.style.display = "none";
    } else {
        BRL2.style.display = "block";
    }
    // bathroom fan icon
    var brs = localStorage.getItem("7");
    var bre = localStorage.getItem("8");
    if (brs > time || bre < time) {
        BRF.style.display = "none";
    } else {
        BRF.style.display = "block";
    }
    // washer icon
    var washs = localStorage.getItem("9");
    var washe = localStorage.getItem("10");
    if (washs > time || washe < time) {
        Wash.style.display = "none";
    } else {
        Wash.style.display = "block";
    }
    // dryer icon
    var drys = localStorage.getItem("11");
    var drye = localStorage.getItem("12");
    if (drys > time || drye < time) {
        Dryer.style.display = "none";
    } else {
        Dryer.style.display = "block";
    }
    // front door icon
    var fds = localStorage.getItem("13");
    var fde = localStorage.getItem("14");
    if (fds > time || fde < time) {
        FD.style.display = "none";
    } else {
        FD.style.display = "block";
    }
    // backdoor icon
    var bds = localStorage.getItem("15");
    var bde = localStorage.getItem("16");
    if (bds > time || bde < time) {
        BD.style.display = "none";
    } else {
        BD.style.display = "block";
    }
    // garage door icon
    var gds = localStorage.getItem("17");
    var gde = localStorage.getItem("18");
    if (gds > time || gde < time) {
        GD.style.display = "none";
    } else {
        GD.style.display = "block";
    }
    // kitchen fan icon
    var ks = localStorage.getItem("19");
    var ke = localStorage.getItem("20");
    if (ks > time || ke < time) {
        KF.style.display = "none";
    } else {
        KF.style.display = "block";
    }
    // dining room light icon
    var drs = localStorage.getItem("21");
    var dre = localStorage.getItem("22");
    if (drs > time || dre < time) {
        DRL.style.display = "none";
    } else {
        DRL.style.display = "block";
    }
}