const dictInput = document.querySelector('#word');
const dictBtn = document.querySelector('#dict-search');
const firstDef = document.querySelector('#def1')
const secondDef = document.querySelector('def2')
const thirdDef = document.querySelector('def3')

dictBtn.addEventListener('click', showDef);

function showDef() {

    myInput = dictInput.value;
    fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term='wat'", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key": "e4bce0e90amsh59516ebc76e5264p18feebjsn600b41889f74"
        }
    })
        .then(response => response.json(

        ))

        .then(data => data.list[i])
        .catch(err => {
            console.log(err);
        });



} showDef()


/*  fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat",
      {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key": "e4bce0e90amsh59516ebc76e5264p18feebjsn600b41889f74"
      }
  })
      .then(response => response.json())

      .then(data => {console.log(data);
      })
      .catch(err => {
          console.log(err);
      });

const myInput = document.getElementById("word").value;
 */

