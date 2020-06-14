

const pomoButton = document.querySelector('.timer-start');
const pomoTimer = document.querySelector('.pomo-timer')
const pomoFlag = document.querySelector('.flag-section');
const body = document.getElementsByTagName('body')[0];

pomoButton.addEventListener('click', startPomo);





function startPomo() {


    function bgChange() {
        body.style.background = "url(img/newbg.jpg) no-repeat center fixed";
    }
    bgChange()

    let timeLeft = setInterval(formatTime,1000)

    let pomoTime = 0.05
    let timeBegin = pomoTime * 60
    let counter = 0

    function formatTime() {
        const timer = timeBegin - counter
        const minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        pomoTimer.innerHTML = `${minutes}:${seconds}`;
        counter++;

        if (timer === 0) {
            clearInterval(timeLeft);

            alert('Hooray!');

            pomoTimer.innerHTML = '';
            let completeFlag = document.createElement('div');
            completeFlag.innerHTML = '<i class="fas fa-flag"></i>';
            completeFlag.classList.add('complete-flag');
            pomoFlag.appendChild(completeFlag);

            function bgChange() {
                body.style.background = "url(img/background.jpg) no-repeat center fixed";

            }
            bgChange()
        }
    }



}


/*

pomoButton.addEventListener('click', changeBg);
function changeBg(){

const pomoCircle = document.querySelector('.svg')
pomoCircle.innerHTML = '';
    pomoCircle.innerHTML = '<svg width="600" height="600"> ' +
        '<circle cx="300" cy="300" r="270" stroke="white" stroke-width="13" fill= "transparent"></circle> ' +
        '</svg>';
}*/