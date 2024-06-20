const db = require('../db/index')

// router.get('/getBooksResult')
exports.getBooksResults = (req, res) => {
	const sql = `select * from allbooks where title like ? or author like ?`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key,search_key],  (err, results) => {
		if(err) return res.dd(err)

		if(results.length === 0) return res.send({ status: 0, message: '没有搜索到相关结果~', data: [] })

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

exports.getBooksResultsPages = (req, res) => {
	const sql = `select * from allbooks where title like ? or author like ? limit ?, 25`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key,search_key, (parseInt(req.query.page)-1) * 25],  (err, results) => {
		if(err) return res.dd(err)

		if(results.length === 0) return res.send({ status: 0, message: '没有搜索到相关结果~', data: [] })

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

exports.getSearchPages = (req, res) => {
	const sql = `select count(*) cnt from allbooks where title like ? or author like ?`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key,search_key],  (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

// router.get('/getBooksResult')
exports.getBooksResult = (req, res) => {
	const sql = `select distinct title label, title value from allbooks where title like ? limit 0, 6`

	const search_keywords = '%'+req.query.search_key+'%'
	db.query(sql, [search_keywords],  (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}


// router.get('/getUsersResultsPages', searchHandler.getBooksResultsPages)
exports.getUsersResultsPages = (req, res) => {
	const sql = `select * from users where username like ? limit ?, 25`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key, (parseInt(req.query.page)-1) * 25],  (err, results) => {
		if(err) return res.dd(err)

		if(results.length === 0) return res.send({ status: 0, message: '没有搜索到相关结果~', data: [] })

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

// router.get('/getUsersSearchPages', searchHandler.getSearchPages)
exports.getUsersSearchPages = (req, res) => {
	const sql = `select count(*) cnt from users where username like ?`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key ],  (err, results) => {
		if(err) return res.dd(err)
	
		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}
