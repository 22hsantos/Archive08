//image gallery
const images = [
    "assets/images/about_me/gallery-img-src/cat.jpeg",
    "assets/images/about_me/gallery-img-src/choc.jpeg",
    "assets/images/about_me/gallery-img-src/panda.jpeg",
    "assets/images/about_me/gallery-img-src/uni.jpeg",
    "assets/images/about_me/gallery-img-src/pikmin.jpeg",
];
// spotify srcs
const spotifyUrl =[
    "https://open.spotify.com/embed/album/4Uv86qWpGTxf7fU7lG5X6F?utm_source=generator&theme=0&si=377f8299afc94635",// The College Dropout - Kanye West 0
    "https://open.spotify.com/embed/album/29U9LtzSF0ftWiLNNw1CP6?utm_source=generator&si=f509e79ced6e4c3f",// First Love - Utada Hikaru 1
    "https://open.spotify.com/embed/album/4Is0raRF9P6wWFZjXO6P9K?utm_source=generator&si=ff0ad0c62b364957",// Speak For Yourself - Imogen Heap 2
    "https://open.spotify.com/embed/album/2T7LuxZRr6SQMgABLtoYTH?utm_source=generator&si=1f5c4b4f9183470f",// Sunburn - Dominic Fike 3
    "https://open.spotify.com/embed/album/4tUxQkrduOE8sfgwJ5BI2F?utm_source=generator&si=8aa8cec13eac41e7",// Gorillaz - Gorillaz 4
    "https://open.spotify.com/embed/album/39VuC5rYQHAnR6xQwm1WDk?utm_source=generator&si=1619e7f77cf74fb8",// SMITHEREENS - Joji 5
    "https://open.spotify.com/embed/album/7BQPfd39YTObQGamGhDF7g?utm_source=generator&si=32d0a6deb0f8419c",// SEYCHELLES - Masayoshi Takanaka 6
    "https://open.spotify.com/embed/album/09USEqUAHWG8IAvc19PTwM?utm_source=generator&si=9ecd4a6e1ce94eca",// AFTERMATH - CthruRio 7
    "https://open.spotify.com/embed/album/3OvZYx7AAGplmJjwD29JiV?utm_source=generator&si=d0f91c491a4c42cb",// Timely!! - Anri 8
    "https://open.spotify.com/embed/album/06v9eHnqhMK2tbM2Iz3p0Y?utm_source=generator&si=e205fc447a114210"// Dangerously In Love - Beyoncé 9
]

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

function toggleMusicPlayer(){
    const musicPlayer = document.getElementById("music-player");

    if (!musicPlayer) return; //checks if "music-player" exists, if not, return (stop)
    musicPlayer.hidden = !musicPlayer.hidden;// if hidden is true, make it false, if false, make it true
}

function updateMusicPlayer(CurrentSong){
    const iframe = document.querySelector("#music-player iframe");
    iframe.src = spotifyUrl[CurrentSong];
}