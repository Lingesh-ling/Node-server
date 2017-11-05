const yargs = require('yargs');
const weather = require('./weatherfolder/weatherapp');
const argvv = yargs
.options({
  ma:{
    demand:true,
    alias:'myAddress',
    describe:'please enter',
    string:true
  }
})
.help('help','h')
.argv;


weather.addresss(argvv.ma, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  }
  else {
    console.log(JSON.stringify(results,undefined,3))
  }
})
