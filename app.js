var express = require('express'), 
app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function() {
  console.log("go to localhost:3000 for some sweet demos!");
});