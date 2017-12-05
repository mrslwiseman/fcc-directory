const express        = require('express'),
      bodyParser     = require('body-parser'),
      mongoose       = require('mongoose'),
      path           = require('path'),
      routes         = require('./routes/routes'),
      app            = express();
      runScript      = require('./data/populate_db');
      
require('dotenv').config({ path: path.resolve(__dirname, '../variables.env') });
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json());       // to support JSON-encoded bodies, which axios does by default
app.use(bodyParser.urlencoded({ extended: true }));

const database_mode = 
  process.env.NODE_ENV == 'production' 
  ? process.env.DATABASE_PROD 
  : process.env.DATABASE_DEV

mongoose.connect(database_mode)
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connected to db on ' + database_mode )
  if(process.env.NODE_ENV != 'production' ){
    runScript.populateDB();
  }
});


app.use(routes);


app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});