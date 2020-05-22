const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ291cmFic2FoYTU2NyIsImEiOiJja2E4aGgxYXQwMGF5MnRtcDlyYmF5aXBiIn0.e6FCj-NEx7KnP-x65bSvuA&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to geodata service',undefined)
        }
        else if (body.features.length === 0){
            callback('Unable to find location.',undefined)
        }
        else {
            callback(undefined,{
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode