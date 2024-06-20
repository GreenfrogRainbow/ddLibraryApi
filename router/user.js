const express = require('express')

const router = express.Router()

const userHandler = require('../router_handler/user')

const expressJoi = require('@escook/express-joi')
const { reg_login_schema } = require('../schema/user')

router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)
router.post('/regUserDetail', userHandler.regUserDetail)
router.post('/login', userHandler.login)
router.get('/getUserInfo', userHandler.getUserInfo)

router.post('/regAdmin', userHandler.regAdmin)
router.post('/loginAdmin', userHandler.loginAdmin)
router.get('/getAdminInfo', userHandler.getAdminInfo)

module.exports = router
