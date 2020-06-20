const myPre = document.getElementById('#preToday')
const myAfter = document.getElementById('#afterToday')
const myToday = document.getElementById('#myToday')
function myWeekly() {


    let today = new Date();
    let dt = today.getDate();
    let mt = today.getMonth()
    let mth = mt+1
    let day = today.getDay();
    let yr = today.getFullYear();
    let aDate = yr+'-'+mth+'-'+dt;
    let day1 = dt-3;
    let day2 = dt-2;
    let day3 = dt-1;
    let day4 = dt;
    let day5 = dt+1;
    let day6 = dt+2;
    let day7 = dt+3;

    //show 7 days
    myPre.innerHTML = day1+' '+day2+' '+day3;
    myToday.innerText = day4;
    myAfter.innerText = day5+' '+day6+' '+day7;


    //mark Sunday
    if (day7 == day[0] || day6 == day[0]||day5 == day[0]){


    }

    //extra mark on Bank Holiday
    async function showHoliday() {

        const response = await fetch('https://feiertage-api.de/api/?jahr='+yr+'&nur_land=NI&nur_daten');
        const data = await response.json();

        if(data == aDate){

        }

    }showHoliday()



}myWeekly()