const express = require("express");
const Router = express.Router();

/* 数据接口（路由） */
// 增加商品
Router.post("/", (req, res) => {
    // 获取前端传入的参数（商品信息），并写入数据库
    res.send("商品增加成功");
})

Router.route("/:id")
    .delete((req, res) => {
        res.send("商品删除成功" + JSON.stringify(req.params));
    })
    .patch((req, res) => {
        res.send(req.body);
    })
    .get((req, res) => {
        res.send("获取：" + JSON.stringify(req.query));
    })

module.exports = Router;