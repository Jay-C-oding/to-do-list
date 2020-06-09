
function startTime() {
    let mt = new Array();
    mt[0] = "Jan";
    mt[1] = "Feb";
    mt[2] = "Mar";
    mt[3] = "Apr";
    mt[4] = "May";
    mt[5] = "Jun";
    mt[6] = "Jul";
    mt[7] = "Aug";
    mt[8] = "Sep";
    mt[9] = "Oct";
    mt[10] = "Nov";
    mt[11] = "Dec";

    let day = new Array();
    day[0] = "Sun"
    day[1] = "Mon"
    day[2] = "Tue"
    day[3] = "Wed"
    day[4] = "Thur"
    day[5] = "Fri"
    day[6] = "Sat"

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let dt = today.getDate();
    let mth = mt[today.getMonth()];
    let d = day[today.getDay()]

    m = checkTime(m);
    document.getElementById('getToday').innerHTML =
        h + ":" + m + ", " + dt + '. ' + mth + ', ' +d;
    let t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

