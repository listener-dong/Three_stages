const express = require("express");
const Router = express.Router();

/* 添加响应头来实现跨域请求 */


Router.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); /* 设置响应头 */
    res.send("cors跨域成功！")
})

module.exports = Router;