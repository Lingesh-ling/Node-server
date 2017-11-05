const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');

app.use((req,res,next) => {

  next();
});

// app.use((req,res,next) => {
//   res.render('maintennace.hbs')
// })
hbs.registerPartials(__dirname + '/partials');

hbs.registerHelper('getdate',() => {
  return new Date().getFullYear();
});

hbs.registerHelper('fullcaps', (text) => {
  return text.toUpperCase();
});

app.get('/',(req,res) => {
  res.render('home.hbs',{
    pageTitle:'Homepage'
  })
});

app.get('/aboutus',(req,res) => {
  res.render('aboutus.hbs', {
    pageTitle:'AboutUSS'
  })
})

app.use(express.static(__dirname + '/public'));



app.get('/about', (req,res) => {
  res.send({
    errorMsg:'unable to connect'
  })
})

app.listen(port, () => {
  console.log('sucess');
});
