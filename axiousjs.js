const axios = require('axios');
const yargs = require('yargs')

const argv = yargs
.options({
  ma:{
    demand:true,
    alias:'myAddress',
    describe:'enter address',
    string:true
  }
})
.help('help','h')
.argv;

var address = argv.ma;
var addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`



axios.get(addressUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS')
  {
    throw new Error('unable to find address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var forecastt = `https://api.darksky.net/forecast/fecd2538f3c6c45be2b5fc081eadc2bd/${lat},${lng}`

  return axios.get(forecastt).then((response) => {
    console.log(response.data.currently.icon);
  })
}).catch((error) => {
  console.log(error.message)
});
