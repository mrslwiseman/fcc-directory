const express        = require('express'),
      bodyParser     = require('body-parser'),
      path           = require('path'),
      routes         = require('./routes/routes'),
      app            = express();

      app.use(express.static(path.resolve(__dirname, '../client/build')));
      
app.use(routes);

app.use(bodyParser.urlencoded({extended:true}))

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), function() {
    console.log('App is running on port', app.get('port'));
  });

module.exports = app;
