const express = require('express')
const router = express.Router()

const bookinfoHandler = require('../router_handler/books-tag')

router.get('/getBooksByTag', bookinfoHandler.getBooksByTag)
router.get('/getPagesByTag', bookinfoHandler.getPagesByTag)
router.get('/getSingleById', bookinfoHandler.getSingleByID)

module.exports = router
