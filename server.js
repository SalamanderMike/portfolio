var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	app = express();


// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Setup
app.use('/partials', express.static(path.join(__dirname + '/views/partials')));
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));
app.set('view engine', 'ejs');


// ROUTES
app.get('*', function (req, res) {
	res.render('index');
});



// NODEMON **************************************
app.listen(process.env.PORT || 3000, function(){
	console.log("NODEMON IS LISTENING IN THE NODE VAN... localhost:3000");
});


// EXPORT ***************************************
module.exports = app;
