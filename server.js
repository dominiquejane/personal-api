var express = require('express'),
	bodyparser = require('body-parser'),
	cors = require('cors'),
	app = express();

var middleware = require('./controllers/middleware.js'),
		mainCtrl = require('./controllers/mainCtrl.js');



app.use(bodyparser.json());
// app.use(middleware.addHeaders);
app.use(cors());

app.listen(9001);

app.get('/name', mainCtrl.getName)
	.get('/location', mainCtrl.getLocation)
	.get('/occupations', mainCtrl.getOccupations)
	.get('/occupations/latest', mainCtrl.getOccupationsLatest)
	.get('/hobbies', mainCtrl.getHobbies)
	.get('/hobbies/:type', mainCtrl.getHobbiesType)
	.get('/skillz', mainCtrl.getSkills)
	.put('/name', mainCtrl.changeName)
	.put('/location', mainCtrl.changeLocation)
	.post('/hobbies', mainCtrl.addHobby)
	.post('/occupations', mainCtrl.addOccupation)
	.post('/skillz', mainCtrl.addSkills);


