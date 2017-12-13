const router = require('express').Router()
  ,   path = require('path')
  ,   memberController = require('../controllers/memberController')


router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

// index route 
router.get("/members", memberController.getAllMembers)
// Create route
router.post("/members", memberController.addMember)
// New route
// app.get /members/new
// render new member signup form
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

router.get("/members/add/meetup", memberController.meetup)

// Show route
// app.get /members/:id
// render member profile view (this might not be needed)

// Edit route
// app.get /member/:id/edit
// Render edit view with member object

// Update route
// app.put /members/:id
// find and update
// redirect to member page

// Destroy route
// app.delete /blogs/:id 
// find by id and delete
// redirect to index

module.exports = router;