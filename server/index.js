const express        = require('express'),
      bodyParser     = require('body-parser'),
      path           = require('path'),
      routes         = require('./routes/routes'),
      app            = express(),
       PORT = process.env.PORT || 5000;
      
app.use(express.static(path.resolve(__dirname, '../client/build')));
      
app.use(routes);

app.use(bodyParser.urlencoded({extended:true}))

app.set('port', process.env.PORT || 5000);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
