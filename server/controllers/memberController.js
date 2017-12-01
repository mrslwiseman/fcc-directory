const fs = require('fs'),
      path = require("path"),
      membersData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '/data/dummy-data-members.json'), 'utf-8')); // remove this when hoooked up to db

exports.members = (req,res) => {
   res.json(membersData)
  }
