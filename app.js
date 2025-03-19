var jsmin = 0
var jssec = 0
var jsmsec = 0
var mins = document.getElementById('min')
var secs = document.getElementById('sec')
var msecs = document.getElementById('msec')
var interval;


function start() {

    interval = setInterval(function () {
        jsmsec++
        msecs.innerHTML = jsmsec
        if (jsmsec >= 100) {
            jssec++
            secs.innerHTML = jssec
            jsmsec = 0
        }
        else if (jssec >= 10) {
            jsmin++
            mins.innerHTML = jsmin
            jssec = 0
        }
    }, 10)

    document.getElementById('btn').disabled = true


}


function stop(){
    clearInterval(interval)
    document.getElementById('btn').disabled = false
}

function reset(){
    jsmin = 0
    jsmsec = 0
    jssec = 0
    mins.innerHTML = jsmin
    secs.innerHTML = jssec
    msecs.innerHTML = jsmsec
    clearInterval(interval)
    document.getElementById('btn').disabled = false
}





