var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    username: 'root',
    password: ''
    database:'microserviceapi'
});
conn.connect((err)=>{
    if(err) throw err;
    console.log('MySQL Terkoneksi');
})

module.exports = conn;
