let day = document.querySelector(".day");
let mount = document.querySelector(".mount");
let data = document.querySelector(".data");
let year = document.querySelector(".year");
let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

function funcStart() {
    setInterval(NextClock, 100);
}
function NextClock() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let mounts = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let now = new Date();
    dayNumber = now.getUTCDate();
    hour = now.getHours();
    years = now.getFullYear();
    minute = now.getMinutes();
    second = now.getSeconds();


    day.textContent = days[now.getDay()] + `, `;
    mount.textContent = mounts[now.getMonth()] + `, `;
    data.textContent = dayNumber;
    year.textContent = years + ` year`;

    hr.textContent = hour;
    let audio1 = new Audio("video/clear.mp4");

    if (minute < 10) {
        min.textContent = `:0` + minute;
    }
    else {
        min.textContent = `:` + minute;
    }

    if (second < 10) {
        sec.textContent = `:0` + second;
    }
    else {
        sec.textContent = ':' + second;
    }
}

funcStart();

