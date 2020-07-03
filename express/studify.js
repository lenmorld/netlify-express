const express = require('express')
const router = express.Router()

router.get('/questions', (req, res) => {
  res.json([
    { a: 1 },
    { a: 2 }
  ])
})

module.exports = router;
