fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat", {
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
