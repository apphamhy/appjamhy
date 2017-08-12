
const mysql= require('mysql');

const connection=mysql.createConnection({
  host: 'localhost',
  password: '1234',
  user: 'root',
  port: 3306,
  database: 'appjamhy'
});
//페스워드 환경변수 지정해서 자동넣기 해서 쓰셈
connection.connect(function(err){
  if(err){
    throw err;
    console.log(err);
  }
});

module.exports = connection;
