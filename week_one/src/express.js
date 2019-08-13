const express = require("express");

//创建一个服务器
let app = express();
// 静态资源服务器
// 把当前目录作为服务器
app.use(express.static("./"));
// 监听端口
app.listen(1908, () => {
    console.log("静态服务器连接成功！");
})