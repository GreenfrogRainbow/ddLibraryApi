const db = require('../db/index')

// getFavoInfos
exports.getFavoInfos = (req, res) => {
	const sql = `select * from favorites where id = ?`
	db.query(sql, parseInt(req.query.favorite_id), (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results[0]
		})
	})
}

// router.get('/getFavoList')
exports.getFavoList = (req, res) => {
	const sql = `select * from favorites where user_id=?`
	db.query(sql, [req.query.user_id,],  (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

// router.get('/getFavoSimp')
exports.getFavoSimp = (req, res) => {
	const sql = `select a.item_id, b.* from favorites_detail a join allbooks b on a.book_id=b.id 
								where favorite_id=? order by a.item_id desc  limit 0, 5`
	db.query(sql, [ req.query.favorite_id,],  (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}
// router.get('/getFavoDetail')
exports.getFavoDetail = (req, res) => {
	const sql = `select a.item_id, b.* from favorites_detail a join allbooks b on a.book_id=b.id 
								where favorite_id=? order by a.item_id desc`
	db.query(sql, [ req.query.favorite_id,],  (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}


// router.get('/getFavoTitleList') await request.get(`/favorite/getFavoTitleList?user_id=${userStore.user.id}`)
exports.getFavoTitleList = (req, res) => {
	const sql = `select id value, title label from favorites where user_id = ?`
	db.query(sql, req.query.user_id, (err, results) => {
		if(err) return res.dd(err)
		res.send({
			status: 0,
			messaeg: '查找成功',
			data: results
		})
	})
}

// `/favorite/setFavorite?id=${edit_id.value}&title=${edit_title.value}&favorite_brief=${edit_brief.value}`
exports.setFavorite = (req, res) => {
	const sql = `update favorites set ? where id=?`
	db.query(sql, [{ title: req.query.title, favorite_brief: req.query.favorite_brief}, req.query.id], (err, results) => {
		if(err) return res.dd(err)
		res.dd('修改成功', 0)
	})
}
// router.post('/addNewBook')  post( 	`/favorite/addNewBook?book_id=${bookId}&favorite_id=${favosValue.value}`
exports.addNewBook = (req, res) => {
	const sql = `insert into favorites_detail set ?`
	db.query(sql, {
		favorite_id: req.query.favorite_id,
		book_id: req.query.book_id
	}, (err, results) => {
		if(err) return res.dd(err)
		res.dd('添加成功', 0)
	})
}
// router.post('/addNewFavo')  .post(`/favorite/addNewFavo?newFavoTitle=${newFavoTitle.value}`)
exports.addNewFavo = (req, res) => {
	const sql = `insert into favorites set ?`
	db.query(sql, {
		title: req.query.newFavoTitle,
		user_id: req.user.id
	}, (err, results) => {
		if(err) return res.dd(err)
		res.dd('添加成功', 0)
	})
}

// router.post('/deleteOneBook')
exports.deleteOneBook = (req, res) => {
	const sql = `delete from favorites_detail where favorite_id=? and book_id=?`
	db.query(sql, [req.query.favorite_id, req.query.book_id], (err, results) => {
		if(err) return res.dd(err)
		res.dd({
			status: 0,
			message: '删除成功'
		})
	})
}


// router.post('/deleteFavorite')
exports.deleteFavorite = (req, res) => {
	const sql = `delete from favorites_detail where favorite_id=?`
	db.query(sql, [req.query.favorite_id], (err, results) => {
		if(err) return res.dd(err)

		const sql = `delete from favorites where id=?`
		db.query(sql, req.query.favorite_id, (err, results) => {
			if(err) return res.dd(err)
			res.send({
				status: 0,
				message: '删除成功'
			})
		})
	})
}
