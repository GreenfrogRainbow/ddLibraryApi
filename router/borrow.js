const express = require('express')
const router = express.Router()

const borrowHandler = require('../router_handler/borrow')

router.get('/getBorrowMaxPage', borrowHandler.getBorrowMaxPage)
router.get('/getBorrowInfoTable', borrowHandler.getBorrowInfoTable)

router.get('/getBorrowInfo', borrowHandler.getBorrowInfo)
router.post('/delay_return', borrowHandler.delay_return)

router.post('/addBorrowInfo', borrowHandler.addBorrowInfo)
router.get('/getBookID', borrowHandler.getBookID)
router.get('/getUserID', borrowHandler.getUserID)

module.exports = router
