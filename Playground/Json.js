var obj = {
  Name:'Lingesh'
};

const fs = require('fs');

var objstr = JSON.stringify(obj);
fs.writeFileSync('newfile.json',objstr);

var notesString = fs.readFileSync('newfile.json');

var note = JSON.parse(notesString);
console.log(typeof note);
console.log(note);
