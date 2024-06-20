const express = require('express')

const router = express.Router()

const favoriteHandler = require('../router_handler/favorite')

router.get('/getFavoInfos', favoriteHandler.getFavoInfos)
router.get('/getFavoList', favoriteHandler.getFavoList)
router.get('/getFavoSimp', favoriteHandler.getFavoSimp)
router.get('/getFavoDetail', favoriteHandler.getFavoDetail)
router.get('/getFavoTitleList', favoriteHandler.getFavoTitleList)

router.post('/setFavorite', favoriteHandler.setFavorite)
router.post('/addNewBook', favoriteHandler.addNewBook)
router.post('/addNewFavo', favoriteHandler.addNewFavo)
router.post('/deleteOneBook', favoriteHandler.deleteOneBook)
router.post('/deleteFavorite', favoriteHandler.deleteFavorite)


module.exports = router
