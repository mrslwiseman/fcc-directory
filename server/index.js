const express        = require('express'),
      bodyParser     = require('body-parser'),
      path           = require('path'),
      routes         = require('./routes/routes'),
      app            = express();

require('dotenv').config({ path: path.resolve(__dirname, '../variables.env') });
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});