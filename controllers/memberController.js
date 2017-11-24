const fs = require('fs'),
      path = require("path"),
      membersData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '/data/dummy-data-members.json'), 'utf-8')); // remove this when hoooked up to db


exports.homePage = (req,res) => {
    res.redirect("/members")
  }

exports.members = (req,res) => {
    res.render("index", {members: membersData, req:req})
  }
