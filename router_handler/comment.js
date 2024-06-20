const db = require('../db/index')

exports.getComment = (req, res) => {
	const sql = `select * from comment where book_id = ?  order by comment_time desc limit 0, 5 `

	db.query(sql,parseInt(req.query.book_id), function (err, results) {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

exports.addComment = (req, res) => {
	const comment_info = req.body
	const sql = `insert into comment set ?`
	// req.query.page
	db.query(sql, {
		score: comment_info.score,
		book_id: comment_info.book_id,
		commenter_id: comment_info.commenter_id,
		commenter_nickname: comment_info.commenter_nickname,
		comment_time: comment_info.comment_time,
		content: comment_info.content
	}, (err, results) => {
		if(err) return res.dd(err)
		if(results.affectedRows !== 1) return res.dd('添加失败')

		res.dd('添加成功', 0)
	})
}

exports.deleteComment = (req, res) => {
	const comment_info = req.body
	const sql = `delete from comment where id=?`
	db.query(sql, comment_info.id, (err, results) => {
		if(err) return res.dd(err)
		if(results.affectedRows !== 1) return res.dd('删除失败')

		res.dd('删除成功', 0)
	})
}


exports.updateComment = (req, res) => {
	const comment_info = req.body
	console.log(comment_info)
	const sql = `update comment set ? where id=?`
	// req.query.page
	db.query(sql, [{
		score: comment_info.score,
		book_id: comment_info.book_id,
		commenter_id: comment_info.commenter_id,
		commenter_nickname: comment_info.commenter_nickname,
		comment_time: comment_info.comment_time,
		content: comment_info.content
	}, comment_info.id], (err, results) => {
		if(err) return res.dd(err)
		if(results.affectedRows !== 1) return res.dd('添加失败')

		res.dd('添加成功', 0)
	})
}
