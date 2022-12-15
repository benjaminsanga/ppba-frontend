const express = require('express')
const router = express.Router()
const {AuthenticateUser} = require('../../middlewares/auth.middleware')

const report = require('../../controllers/report.controller.js')

router.get('/get-activities', report.getActivities)

router.post('/activity', report.activity)
router.post('/organization', report.organization)

module.exports = router;