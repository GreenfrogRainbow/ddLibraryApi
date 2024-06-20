const express = require('express')
const router = express.Router()

const recommendHandler = require('../router_handler/recommend')


router.get('/getRecommendList', recommendHandler.getRecommendList)

router.get('/getAllBooks', recommendHandler.getAllBooks)
router.get('/getMaxPageNum', recommendHandler.getMaxPageNum)

router.get('/getRecommendLatestList', recommendHandler.getRecommendLatestList)
router.get('/getRecommendAllLatestList', recommendHandler.getRecommendAllLatestList)

router.get('/getRecommendLiteratureList', recommendHandler.getRecommendLiteratureList)
router.get('/getRecommendAllLiteratureList', recommendHandler.getRecommendAllLiteratureList)

router.get('/getRecommendForeignLiteratureList', recommendHandler.getRecommendForeignLiteratureList)
router.get('/getRecommendAllForeignLiteratureList', recommendHandler.getRecommendAllForeignLiteratureList)

router.get('/getRecommendSuspenseList', recommendHandler.getRecommendSuspenseList)
router.get('/getRecommendAllSuspenseList', recommendHandler.getRecommendAllSuspenseList)

router.get('/getRecommendFictionList', recommendHandler.getRecommendFictionList)
router.get('/getRecommendAllFictionList', recommendHandler.getRecommendAllSuspenseList)

router.get('/getRecommendHumanityList', recommendHandler.getRecommendHumanityList)
router.get('/getRecommendAllHumanityList', recommendHandler.getRecommendAllHumanityList)

router.get('/getRecommendBiographyList', recommendHandler.getRecommendBiographyList)
router.get('/getRecommendAllBiographyList', recommendHandler.getRecommendAllBiographyList)

router.get('/getRecommendMasterworkList', recommendHandler.getRecommendMasterworkList)
router.get('/getRecommendAllMasterworkList', recommendHandler.getRecommendAllMasterworkList)

router.get('/getRecommendEconomicsList', recommendHandler.getRecommendEconomicsList)
router.get('/getRecommendAllEconomicsList', recommendHandler.getRecommendAllEconomicsList)

router.get('/getRecommendBizarreList', recommendHandler.getRecommendBizarreList)
router.get('/getRecommendAllBizarreList', recommendHandler.getRecommendAllBizarreList)

router.get('/getRecommendYouthList', recommendHandler.getRecommendYouthList)
router.get('/getRecommendAllYouthList', recommendHandler.getRecommendAllYouthList)

router.get('/getRecommendScienceFictionList', recommendHandler.getRecommendScienceFictionList)
router.get('/getRecommendAllScienceFictionList', recommendHandler.getRecommendAllScienceFictionList)

router.get('/getRecommendPoetryList', recommendHandler.getRecommendPoetryList)
router.get('/getRecommendAllPoetryList', recommendHandler.getRecommendAllPoetryList)

router.get('/getRecommendArtList', recommendHandler.getRecommendArtList)
router.get('/getRecommendAllArtList', recommendHandler.getRecommendAllArtList)



module.exports = router
