const db = require('../db/index')

// getRecommendList
exports.getRecommendList = (req, res) => {
    // 查询语句  中间的?表示传参
    const sql = `select * from allbooks order by id limit ?, 25`
    
    // db是数据库对象 .query 表示查询 (sql语句, [参数], （err, results）就是固定写法了，一个报错信息，一个结果  结果就是个列表)
    // 你这后面好像都没啥带运算的
    // 我的运算基本都在前端
    // oo6
    db.query(sql, [(parseInt(req.query.page)-1) * 25], (err, results) => {
        if(err) return res.dd(err)
        // 行 我断了 晚上再看看
        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}


// router.get('/getAllBooks', )
exports.getAllBooks = (req, res) => {
    const sql = `select * from allbooks order by id limit ?, 25`

    db.query(sql, [(parseInt(req.query.page)-1) * 25], (err, results) => {
        if(err) return res.dd(err)
        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

exports.getMaxPageNum = (req, res) =>{
    const sql = `select count(*) cnt from allbooks`
    
    db.query(sql, (err, results) => {
        if(err) return res.dd(err)
        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

exports.getRecommendLatestList = (req, res) => {
    const sql = `select * from latestBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

exports.getRecommendAllLatestList = (req, res) => {
    const sql = `select * from latestBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}


// /getRecommendLiteratureList
exports.getRecommendLiteratureList = (req, res) => {
    const sql = `select * from LiteratureBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllLiteratureList
exports.getRecommendAllLiteratureList = (req, res) => {
    const sql = `select * from LiteratureBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

// /getRecommendForeignLiteratureList
exports.getRecommendForeignLiteratureList = (req, res) => {
    const sql = `select * from foreignLiteratureBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllForeignLiteratureList
exports.getRecommendAllForeignLiteratureList = (req, res) => {
    const sql = `select * from foreignLiteratureBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

// /getRecommendSuspenseList
exports.getRecommendSuspenseList = (req, res) => {
    const sql = `select * from SuspenseBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllSuspenseList
exports.getRecommendAllSuspenseList = (req, res) => {
    const sql = `select * from SuspenseBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

// /getRecommendFictionList'
exports.getRecommendFictionList = (req, res) => {
    const sql = `select * from FictionBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllFictionList
exports.getRecommendAllFictionList = (req, res) => {
    const sql = `select * from FictionBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

// /getRecommendHumanityList'
exports.getRecommendHumanityList = (req, res) => {
    const sql = `select * from HumanityBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllHumanityList
exports.getRecommendAllHumanityList = (req, res) => {
    const sql = `select * from HumanityBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendBiographyList
exports.getRecommendBiographyList = (req, res) => {
    const sql = `select * from BiographyBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllBiographyList
exports.getRecommendAllBiographyList = (req, res) => {
    const sql = `select * from BiographyBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

// /getRecommendMasterworkList'
exports.getRecommendMasterworkList = (req, res) => {
    const sql = `select * from masterworkyBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllMasterworkList
exports.getRecommendAllMasterworkList = (req, res) => {
    const sql = `select * from masterworkyBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

// /getRecommendEconomicsList
exports.getRecommendEconomicsList = (req, res) => {
    const sql = `select * from EconomicsBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllEconomicsList',
exports.getRecommendAllEconomicsList = (req, res) => {
    const sql = `select * from EconomicsBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendBizarreList
exports.getRecommendBizarreList = (req, res) => {
    const sql = `select * from BizarreBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllBizarreList',
exports.getRecommendAllBizarreList = (req, res) => {
    const sql = `select * from BizarreBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

// /getRecommendYouthList
exports.getRecommendYouthList = (req, res) => {
    const sql = `select * from YouthBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllYouthList',
exports.getRecommendAllYouthList = (req, res) => {
    const sql = `select * from YouthBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

// /getRecommendScienceFictionList
exports.getRecommendScienceFictionList = (req, res) => {
    const sql = `select * from ScienceFictionBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllScienceFictionList',
exports.getRecommendAllScienceFictionList = (req, res) => {
    const sql = `select * from ScienceFictionBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendPoetryList
exports.getRecommendPoetryList = (req, res) => {
    const sql = `select * from PoetryBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllPoetryList',
exports.getRecommendAllPoetryList = (req, res) => {
    const sql = `select * from PoetryBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

// /getRecommendArtList
exports.getRecommendArtList = (req, res) => {
    const sql = `select * from ArtBooks order by scor desc limit 0, 10`

    db.query(sql, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 8) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// /getRecommendAllArtList',
exports.getRecommendAllArtList = (req, res) => {
    const sql = `select * from ArtBooks order by scor desc limit ?, 25`

    db.query(sql,parseInt(req.query.page), function (err, results) {
        if(err) return res.dd(err)

        if(results.length !== 25) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
