const db = require('../db/index')

// router.get('/getBorrowMaxPage', borrowHandler.getBorrowMaxPage)
exports.getBorrowMaxPage = (req, res) => {
	const sql = `select count(*) cnt from borrow`
	db.query(sql, (err, results)=> {
		if(err) res.dd(err)
		res.send({
			status: 0,
			message: '查找成功',
			data: results[0]
		})
	})
}


exports.getBorrowInfoTable = (req, res) => {
	const sql = `select a.borrow_id borrow_id, a.borrow_time borrow_time, a.return_time return_time, b.title title, c.username username, a.borrow_status status
				from borrow a 
						join allbooks b on a.book_id=b.id
						join users c on a.borrower_id = c.id
				order by a.borrow_id
				limit ?, 30`
	db.query(sql, [(parseInt(req.query.page)-1) * 30], (err, results)=> {
		if(err) return res.dd(err)
		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

exports.getBorrowInfo = (req, res) => {
	const sql = `select *  from borrow a join allBooks b on a.book_id=b.id where borrower_id =? order by borrow_time`

	db.query(sql,[req.query.borrower_id], function (err, results) {
		if(err) return res.dd(err)

		if(results.length === 0) return res.dd('当前没有在借阅的图书哦~')

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

exports.delay_return = (req, res) =>{
	const sql = `update borrow set borrow_status=3 where borrow_id=?`
	db.query(sql, parseInt(req.query.borrow_id), function (err, results) {
		if (err) return res.dd(err)

		if (results.affectedRows === 0) return res.dd('延期失败')

		res.send({
			status: 0,
			message: '延期成功'
		})
	})
}

exports.addBorrowInfo = (req, res) => {
	const borrow_info = req.body
	const sql = `insert into borrow set ?`

	db.query(sql, {
			borrow_time: borrow_info.borrow_time,
			book_id: borrow_info.book_id,
			borrower_id: borrow_info.borrower_id,
			borrow_status: 0
		}, (err, results) => {
			if(err) return res.dd(err)

			res.dd('添加成功', 0)
		}
	)
}

// router.get('/getBookID', borrowHandler.getBookID)
exports.getBookID = (req, res) => {
	const sql = `select id from allbooks where ISBN = ?`

	db.query(sql, req.query.ISBN, (err, results) => {
			if(err) return res.dd(err)

			res.send({
				status: 0,
				message: '查找成功',
				data: results[0]
			})
		}
	)
}
// router.get('/getUserID', borrowHandler.getUserID)
exports.getUserID = (req, res) => {
	const sql = `select id from users where username = ?`

	db.query(sql, req.query.username, (err, results) => {

			if(err) return res.dd(err)

			res.send({
				status: 0,
				message: '查找成功',
				data: results[0]
			})
		}
	)
}
