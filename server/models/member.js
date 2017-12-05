var mongoose = require('mongoose');

let memberSchema = new mongoose.Schema(  {
    "name": String,
    "surname": String,
    "email": String,
    "location": String,
    "picture": String,
    "bio": String,
    "stack": [],
    "fcc": {
      "fcc_username": String,
      "fcc_recent": String,
      "fcc_forum_stats": String
    },
    "contact": {
      "github": String,
      "twitter": String
    },
    "meetup": {
      "username": String,
      "attended": Number,
      "last_seen": Date
    }
  });

module.exports = mongoose.model("Member", memberSchema)
