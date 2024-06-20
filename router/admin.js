const express = require('express')

const router = express.Router()

const adminHandler = require('../router_handler/admin')

router.post('/addNewBook', adminHandler.addNewBook)

router.post('/deleteUser', adminHandler.deleteUser)
router.post('/deleteBook', adminHandler.deleteBook)
router.post('/returnBook', adminHandler.returnBook)

// 推荐
router.get('/getRecommendSlide', adminHandler.getRecommendSlide)
router.post('/deleteAllRecommend', adminHandler.deleteAllRecommend)
router.post('/updateRecommendSlide', adminHandler.updateRecommendSlide)

// 通知
router.get('/getNews', adminHandler.getNews)
router.post('/addNews', adminHandler.addNews)
router.delete('/deleteNews', adminHandler.deleteNews)

// 统计信息
router.get('/getBooksCount', adminHandler.getBooksCount)
router.get('/getBorrowCount', adminHandler.getBorrowCount)
router.get('/getTalkCount', adminHandler.getTalkCount)
router.post('/addClickCount', adminHandler.addClickCount)
router.get('/getClickCount', adminHandler.getClickCount)
router.get('/getTalkTagsCount', adminHandler.getTalkTagsCount)
router.get('/getBorrowTagsCount', adminHandler.getBorrowTagsCount)

module.exports = router
