/* 引入模块 */
const express = require("express");
/* 创建一个中间件 */
let Router = express.Router();

/* 引入其他接口路由 */
let goodsRouter = require("./goods"); //符合这个路径的接口才会进入
let regRouter = require("./reg");

Router.use(express.json(), express.urlencoded({
    extended: false
}))

/* 当浏览器地址为/goods开头时，进入goodsRouter路由 */
Router.use("/goods", goodsRouter);
Router.use("/reg", regRouter);

/* jsonp实现跨域请求 */
Router.get("/jsonp", (req, res) => {
    /* 从数据库读取数据 */
    let data = JSON.stringify({
        username: "jingjing",
        password: 123
    });
    /* 接收前端传入的函数名 */
    let {
        callback
    } = req.query;
    res.send(`${callback}(${data})`);
});

/* 导出中间件 */
module.exports = Router;