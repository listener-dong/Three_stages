/* 引入express模块 */
const express = require("express");
const {
    PORT
} = require("./config.json");
const router = require("./router"); /* 实际是指向router文件夹下面的index.js */
const app = express();

/* 设置当前目录为静态资源服务器 */
app.use(express.static("./"));

/* 路由接口 */
app.use(router);

app.listen(PORT, () => {
    console.log("服务器启动成功！");
})