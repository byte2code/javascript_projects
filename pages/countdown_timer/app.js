const endDate = "31 December 2022 11:59 PM";

const dateLabel = document.getElementById("end-date");

const days = document.getElementById("days")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const seconds = document.getElementById("seconds")

// value

dateLabel.innerText = endDate;


// functions

const clock = (() =>{
    const end = new Date(endDate);
    const now = new Date();
    
    const diff = (end - now) / 1000;
    
    if (diff < 0) return 0;

    days.value = Math.floor(diff / 3600 / 24);
    hour.value = Math.floor(diff / 3600) % 24;
    minute.value = Math.floor(diff / 60) % 60;
    seconds.value = Math.floor(diff) % 60;
})

setInterval(() =>{
    clock()
}, 1000);
// 1 day = 24 hrs
// 1 hr = 60 min = 3600 sec
// 1 min = 60 sec
