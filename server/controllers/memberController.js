const Member = require('../models/member');

//scraping for recent project
const scrape = (username) => {
      const Xray = require('x-ray');
      const x = Xray();
      let projects = []
      const re = /^(https:\/\/freecodecamp.org)|(https:\/\/freecodecamp.com)/
      return new Promise((yeah, nah) => { 
            x(`https://freecodecamp.org/${username}`, ['a@href'])((err, data) => {
                  if (err) console.log(err)
                  let links = data.toString().split(',')
                  for (let link of links) {
                        if (!link.match(re)) {
                              projects.push(link)
                        }
                  }
                  yeah(projects[projects.length-1])
            })
      })
}

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
      let userObject = req.body
      scrape(req.body.fcc.fcc_username)
          .then((result) => {
                userObject.fcc.fcc_recent = result
                Member.create(userObject)
          })
}
