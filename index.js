daysE = document.querySelector('.days'),
hoursE = document.querySelector('.hours'),
minE = document.querySelector('.minutes'),
secE = document.querySelector('.seconds');


const targetDate = "04/24/2023";
//document.getElementById('targetDate');
const btn = document.querySelector('button');


const timerFunction = (targetDate) => {

    const currentDate = new Date().getTime();
    const target = new Date(targetDate).getTime();

    if (currentDate > target) return;

    const remainingTime = target - currentDate;

    return TimeRem(remainingTime);

}

const TimeRem = (remainingTime) => {

    // Initialze starting units
    const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;

    const ans = [];

    const dayRem = Math.floor(remainingTime / day);
    const hourRem = Math.floor((remainingTime % day) / hour );
    const minRem = Math.floor((remainingTime % hour) / minute );
    const secRem = Math.floor((remainingTime % minute) / second );
    
    ans.push(dayRem, hourRem, minRem, secRem);

    return ans;
};



const updateTIme = () => {
    
    setInterval(() => {
    const ans_arr = timerFunction(targetDate);

    daysE.innerText = ans_arr[0];
    hoursE.innerText = ans_arr[1];
    minE.innerText = ans_arr[2];
    secE.innerText = ans_arr[3];
    }, 0);
    
}

updateTIme();
//btn.addEventListener('click',timerFunction);

