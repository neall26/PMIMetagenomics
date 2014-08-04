
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/details/:id', routes.details);
app.get('/map', routes.map);
app.get('/map/data/:id', routes.mapData);
app.get('/sample/data/:id', routes.sampleData);
app.get('/study/data', routes.studyData);
app.get('/forecast/:latitude/:longitude/:samplingDate' , routes.weather);
app.get('/weather', routes.forecast);
app.get('/uploader', routes.uploadRender);
app.post('/fileUpload', routes.fileUpload);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
