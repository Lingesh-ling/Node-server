const request = require('request')

//fecd2538f3c6c45be2b5fc081eadc2bd
request({
  url:'https://api.darksky.net/forecast/fecd2538f3c6c45be2b5fc081eadc2bd/13.0826802,80.2707184',
  json:true
},(error,response,body) => {
if(error){
  console.log('unable to connect')
}else if(response.statusCode === 400){
  console.log('invalid Adddress')
}else if(!error && response.statusCode === 200){
  console.log(body.currently.icon)
}
});
