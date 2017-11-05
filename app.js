var add = (a,b) => {
  return new Promise((resolve,reject) => {
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }
    else {
      reject('enter numbers')
    }

  });
}

add(8,'9').then((res) => {
console.log(res);
return add(res,8)
}
).then((res) => {
  console.log(res);
}).catch((error) => {
  console.log(error);
})
/*const yargs = require('yargs');
const getweather = require('./getweatherapp/getweatherapp')

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

getweather.getweatherapp(13.0826802,80.2707184,(errorMsg,results) => {
  if(errorMsg){
    console.log(errorMsg)
  }else if(results) {
    console.log(JSON.stringify(results,undefined,2))
  }
})*/
// const fs = require('fs');
// const os = require('os');
// const _ = require('lodash');
//
// const notess = require('./sum');
// const yargs = require('yargs');
//
// var yargs = yargs.command('addd','add a note',{
// title: {
//   describe:'Title please',
//   demand:true
// }
// })
// .argv;
// var yarg = yargs.argv;
//
// var command = process.argv[2];
//
// if(command === 'add') {
// var res = notess.addNote(yarg.title,yarg.body);
//
// console.log(res);
// }
