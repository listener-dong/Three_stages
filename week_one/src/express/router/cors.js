const express = require("express");
const Router = express.Router();

/* 添加响应头来实现跨域请求 */
Router.use((req, res, next) => {
    /* 设置响应头 */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method == "OPTIONS") {
        console.log("6666")
        res.sendStatus(200);
        // 等效于：res.status(200).send();
    } else {
        next();
    }
})
/* 复杂请求options等于发了两次网络请求 */
Router.post("/", (req, res) => {
    res.send("cors跨域成功！")
})

module.exports = Router;