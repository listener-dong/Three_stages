/* 静态资源服务器，给Node.js创建的一个服务器，用来来存储Node.js的资源 */
/* Node.js 是运行在服务端的 JavaScript */

// 内置模块
const http = require("http");
// 用于读取文件
const fs = require("fs");
// 引入url模块，用于url地址格式化
let url = require("url");
// 用于格式化文件地址
let path = require("path");
// 自定义模块
let mime = require("./mime");

// 创建一个服务器
/* const app = http.createServer((req, res) => {
    // res.write("<h1>hello word!</h1>")
    // 通过fs模块读取index.html内容
    fs.readFile("./index.html", (err, content) => {
        // err：错误信息，默认null
        // 通过res.write把内容响应到前端
        res.write(content);
        // 响应结束
        res.end();
    })
}) */

// 创建一个服务器
const app = http.createServer((req, res) => {
    // 静态资源服务器：根据不同的请求，返回不同的内容
    let reqObj = url.parse(req.url, true);
    //得到的地址格式不带盘符
    let filePath = reqObj.pathname;
    // console.log(req.url, reqObj.pathname)

    // 得到修改后的地址格式
    let extname = path.extname(filePath).slice(1);

    //把路径的改为带盘符的绝对路径 
    let realPath = path.join(__dirname, filePath);
    // console.log(req.url, filePath, realPath);
    fs.readFile(realPath, (err, content) => {
        //err:错误信息，默认：null
        // if (err) {
        //     console.log(realPath, content);
        // }


        // 告诉浏览器内容类型是什么（响应头）
        res.writeHead(200, {
            "Content-Type": mime[extname] + ";charset=utf8"
        });
        res.write(content);
        //结束响应
        res.end();
    })
});

// 监听端口
app.listen(1906, () => {
    console.log("服务器连接成功");
})