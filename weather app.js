
const myTemp = document.querySelector('#temperature');
const myHum = document.querySelector('#humidity')


addEventListener(onload, myWeather());


async function myWeather() {

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=2dcbd43d2ad7f40cdea842c3161a179d&units=metric');
    const data = await response.json();
    const temp = data.main["temp"]
    const hum = data.main["humidity"]

    myTemp.innerText = Math.floor(temp)
    myHum.innerText = Math.floor(hum)

    let sec = 1000
    let minutes = sec*60


    setInterval(myWeather, 15*minutes);

}
myWeather()