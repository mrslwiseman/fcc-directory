const Member = require('../models/member');
const find = require('./findMemberMeetup');

exports.getAllMembers = (req, res) => {
      console.log('serving up the members...')
      Member.find({}, (err, members) => {
            if (err) {
                  console.log(err)
            }
            res.json(members)
      })
}

exports.addMember = (req,res) => {
      console.log('Adding member...')
      Member.create(req.body)
}

exports.meetup = (req,res) => {
      find.find('Matt')
            .then(resolve => {
                  res.json(resolve)
            })
      
}