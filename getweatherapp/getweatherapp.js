const request = require('request')

//fecd2538f3c6c45be2b5fc081eadc2bd

var getweatherapp = (latt,lngg,callback) => {
var lat = latt;
var lng = lngg

request({
  url:`https://api.darksky.net/forecast/fecd2538f3c6c45be2b5fc081eadc2bd/${lat},${lng}`,
  json:true
},(error,response,body) => {
if(error){
  callback('unable to connect')

}else if(response.statusCode === 400){
  callback('invalid address')
}else if(!error && response.statusCode === 200){
callback(undefined,{
  climate:body.currently.icon
})

}
});

}


module.exports = {
getweatherapp
}
