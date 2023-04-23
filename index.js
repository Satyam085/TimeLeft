daysE = document.querySelector('.days'),
hoursE = document.querySelector('.hours'),
minE = document.querySelector('.minutes'),
secE = document.querySelector('.seconds');



//const targetDate = "04/24/2023";
//document.getElementById('targetDate');

const timerFunction = (targetDate, currentDate) => {

    
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
    
    
    const targetDate = prompt('Enter Target Date in mm/dd/yyyy:',);

    setInterval(() => { const currentDate = new Date().getTime();
    const ans_arr = timerFunction(targetDate, currentDate);

    daysE.innerText = ans_arr[0];
    hoursE.innerText = ans_arr[1];
    minE.innerText = ans_arr[2];
    secE.innerText = ans_arr[3];
    }, 0);
    
}

updateTIme();
//btn.addEventListener('click',timerFunction);

