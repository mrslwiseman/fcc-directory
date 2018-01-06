const router = require('express').Router()
  ,   path = require('path')

router.get('/api', (req,res) => {
    res.send('Works...')
});

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

module.exports = router;