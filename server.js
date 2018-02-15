//bable require hook for the react preset
require('babel-register')({
	presets: ['react']
});


var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');



// Express middleware
app.use(express.static('public'));


// Route for the index page
app.get('/', function(request, response){
	//var html = '<h1>Hello World!</h1>';

	var html = ReactDOMServer.renderToString(
		React.createElement(Component)
	);

	response.send(html);
});


// For Production: // var PORT = process.env.PORT || 3000;
var PORT = 5000;

app.listen(PORT, function(){
	console.log('http://localhost:' + PORT);
});