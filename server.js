var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});