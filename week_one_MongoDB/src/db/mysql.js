/* 引入nodejs数据库模块 */
const mysql = require("mysql");

/* 连接数据库 */
// 2.创建连接池方法
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "project_mogu",
    multipleStatements: true
});
/* promise */
module.exports = sql => {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, rows) => {
            if (error) {
                reject(error);
            }
            resolve(rows);
        })
    })
}