const express = require("express");

const Router = express.Router();

const mysql = require("../db/mysql");

const {
    formData
} = require("../utils");

// const mysql = require("mysql");

/* 商品的增删该查 */
Router.post("/", async (req, res) => {
    // post请求参数放在：req.body
    let {
        src,
        title,
        sale,
        org
    } = req.body;
    // 操作数据库
    // pool.query(`INSERT INTO wallshop0(src,title,sale,org) VALUES ('${src}','${title}','${sale}','${org}')`, function (error, rows) {
    //     console.log(error);
    //     res.send(rows);
    // })
    /* promise方法 */
    let result;
    try {
        let data = await mysql(`INSERT INTO wallshop0(src,title,sale,org) VALUES ('${src}','${title}','${sale}','${org}')`);
        result = formData({
            data
        })
    } catch (err) {
        result = formData({
            code: 0,
            data: err
        })
    }
    res.send(result);
})

Router.route("/:id")
    .delete(async (req, res) => {
        let {
            id
        } = req.params;
        // 操作数据库
        // pool.query(`DELETE FROM wallshop0 WHERE shopid=${id}`, function (error, rows) {
        //     res.send(rows);
        // })
        /* promise方法 */
        let result;
        try {
            let data = await mysql(`DELETE FROM wallshop0 WHERE shopid=${id}`);
            result = formData({
                data
            });
        } catch (err) {
            result = formData({
                code: 0,
                data: err
            })
        }
        res.send(result);
    })
    .patch(async (req, res) => {
        let {
            id
        } = req.params;
        // post请求参数放在：req.body
        let {
            sale
        } = req.body;
        // 操作数据库
        // pool.query(`update wallshop0 set sale='${sale}' where shopid=${id}`, function (error, rows) {
        //     res.send(rows);
        // })
        let result;
        try {
            let data = await mysql(`update wallshop0 set sale='${sale}' where shopid=${id}`);
            result = formData({
                data
            })
        } catch (rer) {
            result = formData({
                code: 0,
                data: err
            })
        }
        res.send(result);
    })
    .get(async (req, res) => {
        let {
            id
        } = req.params;
        // post请求参数放在：req.body
        // 操作数据库
        // pool.query(`select * from wallshop0 where shopid=${id}`, function (error, rows) {
        //     res.send(rows);
        // })

        /*  mysql(`select * from wallshop0 where shopid=${id}`).then((data) => {
             res.send(formData({
                 data
             }));
         }).catch(err => {
             res.send(formData({
                 code: 0,
                 data: err
             }));
         }) */

        //  try...catch
        let result;
        try {
            let data = await mysql(`select * from wallshop0 wheres shopid=${id}`);
            result = formData({
                data
            });
        } catch (err) {
            result = formData({
                code: 0,
                data: err
            });
        }
        res.send(result);
    })


/* 导出路由 */
module.exports = Router;