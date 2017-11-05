const mongoose = require('mongoose')

mongoose.connect ('mongodb://localhost/user_test');
mongoose.connection
  .once('open',() => console.log('Sucess'))
  .on('error',(error) => {
    console.warn(error);
  })
