const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`${err.message}`);
});

const app = require('./app');
app.set('port', process.env.PORT);

const server = app.listen(app.get('port'), function() {
    console.log('App is running on port', app.get('port'));
  });

