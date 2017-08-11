$(function() {
  //支付倒计时
    var x = 30,
        interval;
    var d = new Date("1111/1/1,0:" + x + ":0");
    interval = setInterval(function() {
        var m = d.getMinutes();
        var s = d.getSeconds();
        var stens=parseInt(s/10),sones=parseInt(s%10),mtens=parseInt(m/10),mones=parseInt(m%10);
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        $("#remain_time").val(m + ":" + s);
        if (m == 0 && s == 0) {
            clearInterval(interval);
            return;
        }
        console.log(sones)
        $('.time-second-tens').text(stens),$('.time-second-ones').text(sones),$('.time-minute-tens').text(mtens),$('.time-minute-ones').text(mones);
        d.setSeconds(s - 1);
    }, 1000);

})
