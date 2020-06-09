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

function searchDefinition() {
    function mySearch() {

        function myUrl() {
            const newUrl = {};
            newUrl['baseUrl'] = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=';
            newUrl['myInput'] = 'sesame';
            console.log(newUrl.baseUrl + newUrl.myInput);

        }
        myUrl()
        fetch(myUrl(), {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
                    "x-rapidapi-key": "e4bce0e90amsh59516ebc76e5264p18feebjsn600b41889f74"
                }
            })
            .then(response => response.json())
            .then(data => {console.log(data)
            })
            .catch(err => {
                console.log(err);
            });


    }
    console.log(mySearch());

}
function parseResult() {
     searchResult = console.log(searchDefinition());
     obj = JSON.parse(searchResult);

}
function showResult(){



    const document.getElementById("result").innerHTML = result;
}