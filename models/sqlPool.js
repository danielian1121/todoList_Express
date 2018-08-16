const mysql = require('mysql2/promise')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'sukamo',
    password: 'suyeehong1121',
    database: 'todoList'
});

module.exports = {
    pool: pool
}