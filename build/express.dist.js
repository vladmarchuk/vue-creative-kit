const express = require('express');
const app = express();
const opn = require('opn');
const config = require('../config');

app.use('/development/test/', express.static('dist'));

app.listen(3111, function () {
  console.log('Example app listening on port 3111!')
});

opn('http://localhost:3111' + '/development/test/');
