var express = require('express');
var path = require('path');
var open = require('open');
var chalk = require('chalk');

var port = 1000;
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
    console.log(chalk.green('HTML file served...'));
})

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
