function getS(t,c) {
    //通过屏幕尺寸及长宽比获取屏幕面积
    var s = (25.4*25.4*c*t*t)/(c*c+1);
    return s;
}
function getResult() {
    var params1 = document.form1.select1.value.split(",");
    var t1 = params1[0];//屏幕尺寸
    var a1 = params1[1];
    var b1 = params1[2];
    var c1 = a1/b1;//屏幕长宽比
    var s1 = getS(t1,c1);
    document.getElementById("1").innerHTML="屏幕尺寸为"+t1+"寸";
    document.getElementById("2").innerHTML="屏幕比例为"+a1+":"+b1;

    var params2 = document.form2.select2.value.split(",");
    var t2 = params2[0];//屏幕尺寸
    var a2 = params2[1];
    var b2 = params2[2];
    var c2 = a2/b2;//屏幕长宽比
    var s2 = getS(t2,c2);
    var mag = (s2/s1).toFixed(2);//第二部设备屏幕相较于第一部的倍数。
    document.getElementById("3").innerHTML="屏幕尺寸为"+t2+"寸";
    document.getElementById("4").innerHTML="屏幕比例为"+a2+":"+b2;
    document.getElementById("5").innerHTML="实际显示面积是您";
    document.getElementById("6").innerHTML="现有设备的"+mag+"倍";
}