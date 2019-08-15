const express = require("express");
const Router = express.Router();
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


/* 商品的增删该查 */
Router.post("/", (req, res) => {
    // post请求参数放在：req.body
    let {
        src,
        title,
        sale,
        org
    } = req.body;
    // 操作数据库
    pool.query(`INSERT INTO wallshop0(src,title,sale,org) VALUES ('${src}','${title}','${sale}','${org}')`, function (error, rows) {
        console.log(error);
        res.send(rows);
    })
})

Router.route("/:id")
    .delete((req, res) => {
        let {
            id
        } = req.params;
        // 操作数据库
        pool.query(`DELETE FROM wallshop0 WHERE shopid=${id}`, function (error, rows) {
            res.send(rows);
        })
    })
    .patch((req, res) => {
        let {
            id
        } = req.params;
        // post请求参数放在：req.body
        let {
            sale
        } = req.body;
        // 操作数据库
        pool.query(`update wallshop0 set sale='${sale}' where shopid=${id}`, function (error, rows) {
            res.send(rows);
        })
    })
    .get((req, res) => {
        let {
            id
        } = req.params;
        // post请求参数放在：req.body
        // 操作数据库
        pool.query(`select * from wallshop0 where shopid=${id}`, function (error, rows) {
            res.send(rows);
        })
    })

/* 导出路由 */
module.exports = Router;