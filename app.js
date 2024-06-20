const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
// 创建应用对象
const app = express();
const history = require('connect-history-api-fallback');
app.use(history())

app.use('/', express.static(path.join(__dirname+'/ddLibrary')))

app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({ limit:'100mb', extended: true }));

// 处理application/json内容格式的请求体
app.use(bodyParser.json());

// cors
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))

// 处理中间件
app.use(function (req, res, next) {
    res.dd = (err, status = 1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

// 解析Token
const config = require('./config')
const expressJWT = require('express-jwt')
app.use( expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/source\//, /^\/api\//, /^\/recommend\//, /^\/admin\//] }))

// 表单验证
const joi = require('joi')
app.use((err, req, res, next) => {
    if(err instanceof joi.ValidationError ) return res.dd(err)
    if(err.name === 'UnauthorizedError') return res.dd('身份认证失败')
    console.log(err)
})


const serveStatic = require('serve-static');
const send = require('send');

// Serve static files
app.use(serveStatic(__dirname));

// Send files
app.get('/:filename', function(req, res) {
  const filename = req.params.filename;
  send(req, filename, {root: __dirname})
    .on('error', function(err) {
      res.status(404).send('File not found');
    })
    .pipe(res);
});


// 路由s
const booksTagRouter = require('./router/books-tag')
app.use('/tags', booksTagRouter)
const userRouter = require('./router/user')
app.use('/api', userRouter)
const recommendRouter = require('./router/recommend')
app.use('/recommend', recommendRouter)
const userInfoRouter = require('./router/userInfo')
app.use('/userinfo', userInfoRouter)
const commentRouter = require('./router/comment')
app.use('/comment', commentRouter)
const borrowRouter = require('./router/borrow')
app.use('/borrow', borrowRouter)
const favoriteRouter = require('./router/favorite')
app.use('/favorite', favoriteRouter)
const searchRouter = require('./router/search')
app.use('/search', searchRouter)
const adminRouter = require('./router/admin')
app.use('/admin', adminRouter)


app.listen(3007, () => {
    console.log('Running at http://127.0.0.1:3007')
})
