const mysql = require('mysql')
// charset='utf8mb4'
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '0517',
    database: 'library_db',
    charset: 'utf8mb4'
})

module.exports = db
