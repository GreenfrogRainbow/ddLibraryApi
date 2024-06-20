const db = require('../db/index')
const fs = require('fs');
const path = require('path');

// router.get('/getBooksResult')
exports.addNewBook = (req, res) => {
    const bookinfo = req.body

    // 假设你接收到的Base64字符串
    const base64String = bookinfo.picLink; // 替换为实际的Base64字符串
    
    // 解码Base64字符串为二进制数据
    const decodedData = Buffer.from(base64String.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    const outputPath = path.join(__dirname, '../source/allbooks/', bookinfo.title +'.jpg');
    console.log(outputPath)
    // 保存解码后的二进制数据为JPEG图片文件
    fs.writeFile(outputPath, decodedData, (err) => {
      if (err) {
        console.error('保存图片失败:', err);
      } else {
        console.log('图片保存成功！');
      }
    });
    
    const sql = `insert into allbooks set ?`

    db.query(sql, {
        title: bookinfo.title,
        author: bookinfo.author,
        price: bookinfo.price,
        time: bookinfo.time,
        publish: bookinfo.publish,
        yizhe: bookinfo.yizhe,
        brief: bookinfo.brief,
        ISBN: bookinfo.ISBN,
        picLink: bookinfo.title+'.jpg'
    }, (err, results) => {
        if(err) {
            console.log(err)
            return res.dd(err)}
        if(results.affectedRows !== 1) return res.dd('注册失败')

        res.dd('添加成功', 0)
    })

}

// router.post('/deleteUser', adminHandler.deleteUser)
exports.deleteUser = (req, res) => {
    const sql = `delete from users where username=?`
    db.query(sql, req.query.username, (err, results)=> {
        if(err) res.dd(err)
        res.dd('删除成功', 0)
    })
}

// router.post('/deleteBook', adminHandler.deleteBook)
exports.deleteBook = (req, res) => {
    const sql = `delete from allBooks where id=?`
    db.query(sql, req.query.id, (err, results)=> {
        if(err) res.dd(err)
        res.dd('删除成功', 0)
    })
}

// router.post('/returnBook', adminHandler.returnBook)
exports.returnBook = (req, res) => {
    const sql = `update borrow set ? where borrow_id=?`
    db.query(sql, [{ return_time: req.query.return_time, borrow_status: req.query.borrow_status }, req.query.borrow_id], (err, results)=> {
        if(err) res.dd(err)
        res.dd('还书成功', 0)
    })
}

// router.get('/getRecommendSlide', adminHandler.getRecommendSlide)
exports.getRecommendSlide = (req, res) => {
    const sql = `select * from recommend_slide`
    db.query(sql, (err, results) => {
        if(err) res.dd(err)
        res.send({
            status: 0,
            message: '获取现有列表成功',
            data: results
        })
    })
}

// router.post('/deleteAllRecommend', adminHandler.deleteAllRecommend)
exports.deleteAllRecommend = (req, res) => {
    const sql = `delete from recommend_slide`
    db.query(sql, (err, results) => {
        if(err) return res.dd(err)
        res.dd('', 0)
    })
}

// router.post('/updateRecommendSlide', adminHandler.updateRecommendSlide)
exports.updateRecommendSlide = (req, res) => {
    const slideInfo = req.body
    const sql = `insert into recommend_slide set ?`
    db.query(sql, { book_id: parseInt(slideInfo.book_id), ISBN: slideInfo.ISBN, pic: slideInfo.pic}, (err, results) => {
        if(err) { 
            console.log(err) 
            return res.dd(err)
        }
        res.dd('更新成功', 0)
    })
}

// router.get('/getNews', adminHandler.getNews)
exports.getNews = (req, res) => {
    const sql = `select * from news`
    db.query(sql, (err, results) => {
        if(err) {
            console.log(err)
            res.dd('查找失败')
        }

        res.send({
            status: 0,
            message: '查找成功',
            data: results
        })
    })
}
// router.post('/addNews', adminHandler.addNews)
exports.addNews = (req, res) => {
    const newsContent = req.body
    const sql = `insert into news set ?`
    db.query(sql, { title: newsContent.title, time: newsContent.time, content: newsContent.content }, (err, results) => {
        if(err) {
            console.log(err)
            res.dd('添加失败')
        }

        res.send({
            status: 0,
            message: '添加成功'
        })
    })
}
// router.delete('/deleteNews', adminHandler.deleteNews)
exports.deleteNews = (req, res) => {
    const sql = `delete from news where id = ?`
    db.query(sql,req.query.id, (err, results) => {
        if(err) {
            console.log(err)
            res.dd('删除是啊比')
        }

        res.send({
            status: 0,
            message: '删除成功',
        })
    })
}

// router.get('/getBooksCount')
exports.getBooksCount = (req, res) => {
    const sql = `select count(*) cnt from allbooks`
    db.query(sql, (err, results)=> {
        if(err) { 
            console.log(err)
            return res.dd(err)
        }
        res.send({
            status: 0,
            message: '查找成功',
            data: results[0]
        })
    })
}
// router.get('/getBorrowCount')
exports.getBorrowCount = (req, res) => {
    const sql = `select count(*) cnt from borrow`
    db.query(sql, (err, results)=> {
        if(err) { 
            console.log(err)
            return res.dd(err)
        }
        res.send({
            status: 0,
            message: '查找成功',
            data: results[0]
        })
    })
}
// router.get('/getTalkCount')
exports.getTalkCount = (req, res) => {
    const sql = `select count(*) cnt from comment`
    db.query(sql, (err, results)=> {
        if(err) { 
            console.log(err)
            return res.dd(err)
        }
        res.send({
            status: 0,
            message: '查找成功',
            data: results[0]
        })
    })
}
// router.post('/addClickCount')
exports.addClickCount = (req, res) => {
    let date_now = Date.now()
    let date_obj = new Date(date_now)
    const index = date_obj.getMonth() + 1
    const sql = `update click_count set cnt = cnt+1 where id=?`
    db.query(sql, parseInt(index), (err, results) => {
        if(err) return res.dd(err)
    })
}

// router.get('/getClickCount')
exports.getClickCount = (req, res) => {
    const sql = `select cnt from click_count where id=?`
    db.query(sql, req.query.id, (err, results) => {
        if(err) return res.dd(err)
        res.send({
            status: 0,
            message: '获取成功',
            data: results[0]
        })
    })
}

// router.get('/getTalkTagsCount', adminHandler.getTalkTagsCount)
exports.getTalkTagsCount = (req, res) => {
    const sql = `select tag, count(*) cnt
                    from (select b.tag tag from comment a join tags b on a.book_id=b.id) talk_tag(tag)
                    group by tag
                    order by cnt limit 0, 6
                `
    db.query(sql, (err, results) => {
        if(err) return res.dd(err)

        res.send({
            status: 0,
            message: '查询成功',
            data: results
        })
    })
}
// router.get('/getBorrowTagsCount', adminHandler.getBorrowTagsCount)
exports.getBorrowTagsCount = (req, res) => {
    const sql = `select tag, count(*) cnt
                from (select b.tag tag from borrow a join tags b on a.book_id=b.id) talk_tag(tag)
                group by tag
                order by cnt desc limit 0, 6
                `
    db.query(sql, (err, results) => {
        if(err) return res.dd(err)

        res.send({
            status: 0,
            message: '查询成功',
            data: results
        })
    })
}