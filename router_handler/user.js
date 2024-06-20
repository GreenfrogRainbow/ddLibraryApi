const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.regUser = (req, res) => {
    const userinfo = req.body

    if(!userinfo.username || !userinfo.password) return res.dd('用户名或密码不能为空')

    const sql = `select * from users where username = ?`
    db.query(sql, [userinfo.username], (err, results) => {
        if(err) return res.dd(err)
        if(results.length > 0) return res.dd('用户名已存在，请更换用户名')

        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        const sql = `insert into users set ?`

        db.query(sql, {
            username: userinfo.username,
            password: userinfo.password,
            // gender: userinfo.gender,
            // birth: userinfo.birth,
            // email: userinfo.email,
            // profession: userinfo.profession,
            // nickname: userinfo.nickname
        }, (err, results) => {
            if(err) return res.dd(err)
            if(results.affectedRows !== 1) return res.dd('注册失败')

            res.dd('注册成功', 0)
        })
    })
}

exports.regUserDetail = (req, res) => {
    const userinfo = req.body
    console.log(userinfo)

    if(!userinfo.username || !userinfo.password) return res.dd('用户名或密码不能为空')

    const sql = `select * from users where username = ?`
    db.query(sql, [userinfo.username], (err, results) => {
        if(err) return res.dd(err)
        if(results.length > 0) return res.dd('用户名已存在，请更换用户名')

        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        const sql = `insert into users set ?`

        db.query(sql, {
            username: userinfo.username,
            password: userinfo.password,
            gender: userinfo.gender,
            birth: userinfo.birth,
            email: userinfo.email,
            phone: userinfo.phone,
            profession: userinfo.profession,
            nickname: userinfo.nickname
        }, (err, results) => {
            if(err) {
                console.log(err)
                return res.dd(err)}
            if(results.affectedRows !== 1) return res.dd('注册失败')

            res.dd('注册成功', 0)
        })
    })
}


exports.login = (req, res) => {
    const userinfo = req.body

    const sql = `select * from users where username=?`

    console.log(userinfo)

    db.query(sql, userinfo.username, (err, results) => {
        if(err) return res.dd(err)
        if(results.length !== 1) return res.dd('登陆失败')

        if(! bcrypt.compareSync(userinfo.password, results[0].password)) {
            return res.dd('密码错误')
        }

        const user = {...results[0], password: '', user_pic: ''}

        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '120h'
        })

        res.send({
            status: 0,
            message: '登陆成功',
            token: 'Bearer ' + tokenStr
        })
    })
}

exports.getUserInfo = (req, res) => {
    const sql = `select * from users where id=?`

    db.query(sql, req.user.id, (err, results) => {
        if(err) return res.dd(err)
        if(results.length !== 1) return res.dd('查找失败')

        res.send({
            status: 0,
            message: '查找成功',
            data: results[0]
        })
    })
}

// router.post('/regAdmin', )
exports.regAdmin = (req, res) => {
    const userinfo = req.body
    if(!userinfo.username || !userinfo.password) return res.dd('用户名或密码不能为空')
    const sql = `select * from users where username = ?`
    db.query(sql, [userinfo.username], (err, results) => {
        if(err) return res.dd(err)
        if(results.length > 0) return res.dd('用户名已存在，请更换用户名')
        const sql = `insert into admin set ?`
        db.query(sql, {
            username: userinfo.username,
            password: userinfo.password,
        }, (err, results) => {
            if(err) return res.dd(err)
            if(results.affectedRows !== 1) return res.dd('注册失败')

            res.dd('注册成功', 0)
        })
    })
}
// router.post('/loginAdmin',)
exports.loginAdmin = (req, res) => {
    const userinfo = req.body
    const sql = `select * from admin where username=?`

    db.query(sql, userinfo.username, (err, results) => {
        if(err) return res.dd(err)
        if(results.length !== 1) return res.dd('登陆失败')

        if(userinfo.password !== results[0].password) {
            return res.dd('密码错误')
        }

        const user = {...results[0], password: '', user_pic: ''}

        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '120h'
        })

        res.send({
            status: 0,
            message: '登陆成功',
            token: 'Bearer ' + tokenStr
        })
    })
}
// router.get('/getAdminInfo',)
exports.getAdminInfo = (req, res) => {
    const sql = `select * from admin where id=?`

    db.query(sql, 1, (err, results) => {
        if(err) return res.dd(err)
        if(results.length !== 1) return res.dd('查找失败')

        res.send({
            status: 0,
            message: '查找成功',
            data: results[0]
        })
    })
}
