const db = require('../db/index')

exports.getBooksByTag = (req, res) => {
    const sql = `select a.*  from allbooks a join tags using(id) where tag=? order by scor desc limit ?, 25`

    db.query(sql,[req.query.tag, parseInt(req.query.page)*25], function (err, results) {
        if(err) return res.dd(err)

        if(results.length === 0) return res.dd('当前标签暂无内容哦~')

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}

exports.getPagesByTag = (req, res) => {
    const sql = `select count(*) cnt from allbooks a join tags using(id) where tag=? order by scor desc`

    db.query(sql,[req.query.tag], function (err, results) {
        if(err) return res.dd(err)

        res.send({
            status: 0,
            message: '查找成功',
            data: results[0].cnt
        })
    })
}

exports.getSingleByID = (req, res) => {
    const sql = `select * from allbooks where id = ?`

    db.query(sql,req.query.id, function (err, results) {
        if(err) return res.dd(err)

        // if(results.length !== 1) return res.dd('查找产生错误')

        res.send({
            status: 0,
            message: '查找成功',
            data: results[0]
        })
    })
}
