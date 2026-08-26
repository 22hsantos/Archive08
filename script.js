//live clock
function updateTime() {
    if (!document.getElementById("hours")) return;//checks if "hours" exists, if not, return (stop)

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

//live weekday
function updateDay(){
    if (!document.getElementById('live-day')) return;//checks if "live-day" exists, if not, return (stop)

    const today = new Date();//grabs date and stores it in today

    const dayName = today.toLocaleString('en-NZ', {weekday:'long'})//converts plaint date to eng-NZ(locale) and weekday(option)

    document.getElementById('live-day').textContent = dayName;//updates live-day
}
updateDay();

//image gallery
const images = [
    "assets/images/about_me/placeholder_cat.jpeg",//0
    "assets/images/general/placeholder_img.gif"//1
];

let currentIndex = 0;// "let" defines a value that can be changed.

function updateImage() {//updates the image in the gallery
    const imgElement = document.getElementById("gallery-img");//grabs gallery img into imgElement
    imgElement.src = images[currentIndex];//updates src of Gallery img to currentIndex
}

function nextImage(){
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage()
}

updateImage();