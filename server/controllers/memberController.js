const Member = require('../models/member');

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
      console.log(req.body)
      Member.create(req.body)
}
