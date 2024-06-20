const express = require('express')
const router = express.Router()

const commentHandler = require('../router_handler/comment')

router.get('/getComment', commentHandler.getComment)

router.post('/addComment', commentHandler.addComment)

router.post('/deleteComment', commentHandler.deleteComment)

router.post('/updateComment', commentHandler.updateComment)

module.exports = router
