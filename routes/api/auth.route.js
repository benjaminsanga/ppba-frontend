const express = require('express')
const router = express.Router()

const user = require('../../controllers/user.controller.js')

router.get('/test', (req, res) => {
    res.status(200).json({message: "success", data: {}})
})

router.post('/login', user.login)
router.post('/signup', user.signup)




module.exports = router;