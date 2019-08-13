const express = require("express");

const app = express();

const {
    PORT
} = require("./config.json"); //返回json内容

app.use(express.static("./"));

// 利用中间件格式化前端传入的参数
app.use(express.json(), express.urlencoded({
    extended: false
}))

// 数据接口（路由）
// 增加商品
app.post("/goods/:id", (req, res) => {
    // 获取前端传入的参数（商品信息），并写入数据库
    res.send("商品增加成功" + JSON.stringify(req.params));
})

// 删除商品
app.delete("/goods/:id", (req, res) => {
    res.send("商品删除成功" + JSON.stringify(req.params))
})

// 修改商品
app.patch("/goods/:id", (req, res) => {
    console.log("body:", req.body)
    res.send(req.body);
})

// 查找商品
app.get("/goods/:id", (req, res) => {
    // get请求获取参数（参数放在url中）：req.query
    res.send(req.query);
})

// post,patch,put等请求（参数放在请求体中）：req.body

// 监听端口
app.listen(PORT, () => {
    console.log(`服务器连接成功${PORT}`);
})