const api_key = `cb6b328f31f7c97f8744f9769ec9e6dca05935c6`

let urlForBikes = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${api_key}`

$(function() {

    $.getJSON(urlForBikes, function (bikeStations) {

        console.log(bikeStations)
        for(const station of bikeStations )    {

            console.log(`${station.position.lat}:${station.position.lat}`);
        }
    })
});