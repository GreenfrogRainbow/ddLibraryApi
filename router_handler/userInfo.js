const db = require('../db/index')
const bcrypt = require('bcryptjs')

exports.getUserInfo = (req, res) => {
	const sql = `select * from users where id=?`

	db.query(sql, req.user.id, (err, results) => {
		if(err) return res.dd(err)
		if(results.length !== 1) return res.dd('查找失败')

		res.send({
			status: 0,
			message: '查找成功',
			data: {...results[0], password: ''}
		})
	})
}

exports.getUserMaxPage = (req, res) => {
	const sql = `select count(*) cnt from users`
	db.query(sql, (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results,
		})
	})
}

exports.getAllUserInfo = (req, res) => {
	const sql = `select username, gender, birth, email, profession, phone, nickname, nation from users limit ?, 30`
	db.query(sql,[(parseInt(req.query.page)-1) * 30], (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results,
		})
	})
}

// router.post('/setGenderAndProfession')
exports.setGenderAndProfession = (req, res) => {
	const sql = 'update users set gender=? , profession=? where id=?'
	db.query(sql, [req.query.gender,req.query.profession, req.query.id,],  (err, results) => {
		if(err) return res.dd(err)
		if(results.affectedRows !== 1) return res.dd('修改失败')

		res.send({
			status: 0,
			message: '修改成功',
		})
	})
}
// router.post('/setBirthAndNation')
exports.setBirthAndNation = (req, res) => {
	const sql = 'update users set birth=? , nation=? where id=?'
	db.query(sql, [req.query.birth,req.query.nation, req.query.id,],  (err, results) => {
		if(err) return res.dd(err)
		if(results.affectedRows !== 1) return res.dd('修改失败')

		res.send({
			status: 0,
			message: '修改成功',
		})
	})
}
// router.post('/setEmailAndNumber')
exports.setEmailAndNumber = (req, res) => {
	const sql = 'update users set email=? , phone=? where id=?'
	db.query(sql, [req.query.email,req.query.phone, req.query.id,],  (err, results) => {
		if(err) return res.dd(err)
		if(results.affectedRows !== 1) return res.dd('修改失败')

		res.send({
			status: 0,
			message: '修改成功',
		})
	})
}
// router.post('/setPassword')
exports.setPassword = (req, res) => {
	const sql = `select * from users where id=?`
	sql.query(sql, req.query.id, (err, results) => {
		if(err) return res.dd(err)
		if(results.length !== 1) return res.dd('查找失败')

		if(!bcrypt.compareSync(req.query.oldPassword, results[0].password)) return res.dd('原密码错误')

		const sql = `update users set password=? where id=?`
		db.query(sql, [req.query.newPassword, req.query.id], (err, results) => {
			if(err) return res.dd(err)
			if(results.affectedRows !== 1) return res.dd('更新密码失败')

			res.dd('更新密码成功', 0)
		})
	})
}
// router.post('/setNickname')
exports.setNickname = (req, res) => {
	const sql = 'update users set nickname=? where id=?'
	db.query(sql, [req.query.nickname,req.query.id,],  (err, results) => {
		if(err) return res.dd(err)
		if(results.affectedRows !== 1) return res.dd('修改失败')

		res.send({
			status: 0,
			message: '修改成功',
		})
	})
}

// router.patch('/setUserPic')
exports.setUserPic = (req, res) => {
	const sql = 'update users set user_pic=? where id=?'
	db.query(sql, [req.body.avatar, req.body.id], (err, results) => {
		if(err) return res.dd(err)
		if(results.affectedRows !== 1) return res.dd('修改失败')
		res.send({
			status: 0,
			message: '修改成功',
		})
	})
}
