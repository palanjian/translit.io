const express = require('express')
const router = express.Router()

const armenian = require('../scripts/armenian.js')

//standard Armenian -> English
router.post('/arm/:text', (req, res) => {
    res.render('index.ejs', { final: armenian(req.params.text)})
})


module.exports = router
