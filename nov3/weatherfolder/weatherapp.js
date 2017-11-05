const request = require('request')

var addresss = (address,callback) => {
  var encodedAddress =encodeURIComponent(address)

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
  },(error,response,body) => {
    if(error) {
      callback('unable to connect server')

    }else if(body.status === 'ZERO_RESULTS') {
      callback('invalid Address')
    }else if (body.status === 'OK'){
      callback(undefined,{
        addres:body.results[0].formatted_address,
        lat:body.results[0].geometry.location.lat,
        long:body.results[0].geometry.location.lng
      });

    }

  });
}

module.exports = {
  addresss
}
