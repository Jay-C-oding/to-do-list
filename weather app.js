
const myTemp = document.querySelector('#temperature');
const myHum = document.querySelector('#humidity')


addEventListener(onload, myWeather());


async function myWeather() {

    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=2dcbd43d2ad7f40cdea842c3161a179d&units=metric');
    const data = await response.json();
    const temp = data.main["temp"]
    const hum = data.main["humidity"]

    myTemp.innerText = temp
    myHum.innerText = hum

    let minutes = sec*60
    let second = 1000

    setInterval(myWeather, 15*minutes);

}
myWeather()