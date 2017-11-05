const request = require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=102%20srirangammal%20street%20chennai%20600021',
  json:true
},(error,response,body) => {
  var x = body.results[0].formatted_address
  console.log(`Address: ${x}`);
  console.log(`Location Lat: ${body.results[0].geometry.location.lat}`)
  console.log(`Location Long: ${body.results[0].geometry.location.lng}`)
});
