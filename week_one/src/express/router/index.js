/* 引入模块 */
const express = require("express");
/* 创建一个中间件 */
let Router = express.Router();

/* 引入其他接口路由 */
let goodsRouter = require("./goods"); //符合这个路径的接口才会进入
let regRouter = require("./reg");
let corsRouter = require("./cors");

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

//CORS跨域请求
Router.use("/cors", corsRouter);

/* 爬虫接口 */
// 引入模块
const request = require("request");
const cheerio = require("cheerio");
Router.get("/spider", (req, res) => {
    request('http://search.lefeng.com/search/showresult?keyword=%E9%9D%A2%E8%86%9C', (error, response, body) => {
        console.log(body)
        // 执行load方法载入获取到的html结构
        let $ = cheerio.load(body);
        let goodslist = [];

        $("#smPruArea .pruwrap").each((i, e) => {
            let $ele = $(e);
            let o = {};
            o.name = $ele.find(".nam span").text();
            o.src = $ele.find("dt img").attr("src");
            o.oldprice = $ele.find(".spri").text();
            o.price = $ele.find(".price").text();
            goodslist.push(o);
        })
        res.send(goodslist);
    });
})

/* 导出中间件 */
module.exports = Router;