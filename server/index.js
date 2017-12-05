const express        = require('express'),
      bodyParser     = require('body-parser'),
      mongoose       = require('mongoose'),
      path           = require('path'),
      routes         = require('./routes/routes'),
      app            = express();
      runScript      = require('./data/populate_db');
      
require('dotenv').config({ path: 'variables.env' });

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json());       // to support JSON-encoded bodies, which axios does by default
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/fcc-directory')
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connected to db....')
  runScript.populateDB();
});


app.use(routes);


app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});