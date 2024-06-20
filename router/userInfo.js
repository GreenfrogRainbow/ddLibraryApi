const express = require('express')

const router = express.Router()

const userInfoHandler = require('../router_handler/userInfo')

router.get('/getUserInfo', userInfoHandler.getUserInfo)
router.get('/getAllUserInfo', userInfoHandler.getAllUserInfo)
router.get('/getUserMaxPage', userInfoHandler.getUserMaxPage)

router.post('/setGenderAndProfession', userInfoHandler.setGenderAndProfession)
router.post('/setBirthAndNation', userInfoHandler.setBirthAndNation)
router.post('/setEmailAndNumber', userInfoHandler.setEmailAndNumber)
router.post('/setPassword', userInfoHandler.setPassword)
router.post('/setNickname', userInfoHandler.setNickname)

router.patch('/setUserPic', userInfoHandler.setUserPic)


module.exports = router
