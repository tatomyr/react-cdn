var express = require('express');
var app = express();

app.use(express.static('app'));

app.listen(8080, function () {
  console.log('App listen at port 8080');
});
