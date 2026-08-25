function updateTime() {
    const now = new Date();//grabs date and stores it in now
    let hours = now.getHours();// grabs Hours from now and stores it in hours
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM"// ampm = if hours >= 12, PM (true) : else AM(false)

    hours = hours % 12;// turns 24hr into 12
    hours = hours ? hours : 12;//checks if hours exists, if not, turn into 12

    hours = hours < 10 ? "0" + hours : hours;//if hours < 10, add 0
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").textContent = hours;// checks HTML(document) for "hours", replaces content (textContent) with new value
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm

}

setInterval(updateTime, 1000);// run every 1000 millisec

updateTime();