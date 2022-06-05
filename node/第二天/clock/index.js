

    setInterval(() => {
        var time = new Date
        var s = time.getHours()
        var s = s > 10 ? s : '0'+ s
        var f = time.getMinutes()
        var f = f > 10 ? f : '0'+ f
        var m = time.getSeconds()
        var m = m > 10 ? m : '0'+ m
        var div = document.querySelector('div')
        div.innerHTML = s + ' : ' + f + ' : ' + m
    }, 1000);
