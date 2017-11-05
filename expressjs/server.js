const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
  res.send('<h1>Lingesh</h1>');
});

app.get('/about', (req,res) => {
  res.send({
    errorMsg:'unable to connect'
  })
})

app.listen(4000);
