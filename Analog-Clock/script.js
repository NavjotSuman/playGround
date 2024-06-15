console.log("made by Navjot")

setInterval(() => {
    let d = new Date
    let htime = d.getHours()
    let mtime = d.getMinutes()
    let stime = d.getSeconds()

    let hrotation = ((30 * htime) + (mtime / 2)+(0.0083)*stime)
    let mrotation = ((6 * mtime) + (1/10)*stime)
    let srotation = 6 * stime

    hours.style.transform = `rotate(${hrotation}deg)`
    minutes.style.transform = `rotate(${mrotation}deg)`
    seconds.style.transform = `rotate(${srotation}deg)`


}, 1000);