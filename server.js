var express = require('express');
var bodyParser = requre('body-parser');
var methodOverride= require('method-override');


var app =express();
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({
	extended:false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var port =3000;
app.listen(port);