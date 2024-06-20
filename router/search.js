const express = require('express')

const router = express.Router()

const searchHandler = require('../router_handler/search')

router.get('/getBooksResult', searchHandler.getBooksResult)
router.get('/getBooksResults', searchHandler.getBooksResults)
router.get('/getBooksResultsPages', searchHandler.getBooksResultsPages)
router.get('/getSearchPages', searchHandler.getSearchPages)

router.get('/getUsersResultsPages', searchHandler.getUsersResultsPages)
router.get('/getUsersSearchPages', searchHandler.getUsersSearchPages)

module.exports = router
