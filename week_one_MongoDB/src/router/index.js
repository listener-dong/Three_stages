const express = require("express");
const Router = express.Router();

/* 引入路由 */
const goodsRouter = require("./goods");
const userRouter = require("./user");

// 利用中间件bodyParse格式化请求路由
Router.use(express.json(), express.urlencoded({
    extended: false
}));

/* 商品 */
Router.use("/goods", goodsRouter);
Router.use("/user", userRouter);

module.exports = Router;