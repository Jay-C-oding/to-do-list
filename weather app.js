
/*

button.eventListner()

async function getData() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=2dcbd43d2ad7f40cdea842c3161a179d&units=metric');
    const data = await response.json();
    const temp = data.main["temp"];
    const hum = data.main["humidity"];


    document.querySelector('#temperature').innerHTML = temp;
    document.querySelector('#humidity').innerHTML = hum;
}


fetch('http://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=2dcbd43d2ad7f40cdea842c3161a179d&units=metric')
.then(response => response.json())
    .then(data => console.log(data))
.catch(err => alert("oops!"))
const tempElement = document.querySelector('#temperature');
const humElement = document.querySelector('#humidity');
const weather = {}
 */


function getWeather(){
     fetch('http://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=2dcbd43d2ad7f40cdea842c3161a179d&units=metric')
        .then(response = response.json();)
        .then(data => {
            console.log(data);

        })
         .then(function () {
         });
}
getWeather()




/*
function myData(){
    const myobj = fetch('http://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=2dcbd43d2ad7f40cdea842c3161a179d&units=metric')
.then(response => response.json())
        .then(data => console.log(data["main"]))

        .catch(err => alert("wrong!"))

    console.log(myobj);
}

function getData() {
    const myApi =
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=2dcbd43d2ad7f40cdea842c3161a179d&units=metric')
            .then(response => response.json())
            .then(data => console.log(data["main"]))
            .catch(err => alert("wrong!"))


    console.log(myApi)
}

}
t = fetch('http://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=2dcbd43d2ad7f40cdea842c3161a179d&units=metric')
    .then(response => response.json())
    .then(data => console.log(data.main["temp"]))
    .catch(err => alert("wrong!"))
 = t

h = fetch('http://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=2dcbd43d2ad7f40cdea842c3161a179d&units=metric')
    .then(response => response.json())
    .then(data => console.log(data.main["humidity"]))
    .catch(err => alert("wrong!"))
document.getElementById('humidity').innerHTML = h
*/