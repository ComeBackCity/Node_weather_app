const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherbit.io/v2.0/current?lat=' + latitude + '&lon=' + longitude + '&key=2485b15cf7714e22814ed61e116c63dc#'

    //console.log(url)

    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('unable to connect to weather service',undefined)
        }else if (body.error){
            callback('Cannot find location',undefined)
        }else {
            callback(undefined, {
                weather: body.data[0].weather.description,
                temperature: body.data[0].temp,
                windspeed: body.data[0].wind_spd
            })
        }
    })
}

module.exports = forecast