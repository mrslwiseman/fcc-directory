fs = require('fs')

const members = function() {
    fs.readFile('./data/dummy-data-members.json', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        return data;
      });
}

module.exports = members
