const nowYear = document.querySelector("#clock span:first-child");
const clock = document.querySelector("#clock span:nth-child(2)");
const period = document.querySelector("#clock span:last-child");

function getClock() {
    const date = new Date();

    //날짜
    const year = date.getFullYear();
    const month = date.getMonth();
    const day  = date.getDate();
    let nowday = date.getDay();

    switch(String(nowday)) {
        case "0" :
            nowday = "일요일";
            break;
        case "1" :
            nowday = "월요일";
            break;
        case "2" :
            nowday = "화요일";
            break;
        case "3" :
            nowday = "수요일";
            break;
        case "4" :
            nowday = "목요일";
            break;
        case "5" :
            nowday = "금요일";
            break;
        case "6" :
            nowday = "토요일";
            break;
    }

    nowYear.innerText = `${year}년 ${month}월 ${day}일 ${nowday}`;

    //시간
    let hour = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0") ;
    const seconds = String(date.getSeconds()).padStart(2, "0") ;
    //pm/am    
    let periods = "AM";

    if(hour > 12) {
        hour = String(date.getHours()- 12).padStart(2, "0");
        periods = "PM";
    } else if (hour == 24) {
        hour = "00";
        periods = "AM";
    } else {
        periods = "AM";
    }

    clock.innerText = `${hour}:${minutes}:${seconds}`;
    randomColor();
    period.innerText = periods;
    if(periods === "AM") {
        period.style.color = 'darkblue';
    } else {
        period.style.color = 'crimson';
    }

}

function randomColor() {
    return clock.style.color = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}
getClock();
setInterval(getClock, 1000);