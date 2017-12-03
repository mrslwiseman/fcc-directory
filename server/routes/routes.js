const express = require('express');
const router = express.Router();
const path = require('path')
const memberController = require('../controllers/memberController')

router.post("/members", (req,res) => {
  console.log(req)
  res.json({"result": "member added"})
})
// /members
router.get("/members", memberController.members)

// New route
// app.get /members/new
// render new member signup form


router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  });


// Create route
// app.post /members
// add member to db
// redirect to index route

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