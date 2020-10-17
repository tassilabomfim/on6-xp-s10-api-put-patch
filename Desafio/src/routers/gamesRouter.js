const express = require('express')
const router = express.Router()
const controller = require('../controllers/gamesController')
const cors = require('cors')

router.put('/jogos/:id', cors(), controller.updateName)
router.patch('/jogos/:id', cors(), controller.updateNamePatch)
router.put('/jogos/:id', cors(), controller.updateCompany)
router.patch('/jogos/:id', cors(), controller.updateCompanyPatch)

module.exports = router