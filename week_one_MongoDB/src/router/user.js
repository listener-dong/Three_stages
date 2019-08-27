const express = require("express"); //引入模块

const Router = express.Router(); //将不同的路由分离到不同的路由文件中

const {
    insert,
    remove,
    find
} = require("../db/mongodb");

const {
    formData
} = require("../utils")

// 增加用户
Router.post("/reg", async (req, res) => {
    let {
        username,
        password,
        phone
    } = req.body;
    try {
        insert("userlist", {
            username,
            password,
            phone
        });
        res.send(formData());
    } catch (err) {
        res.send(formData({
            code: 0
        }));
    }
})

// 删除用户
Router.delete("/:id", (req, res) => {
    let {
        id
    } = req.params;
    try {
        remove("userlist", {
            _id: id
        });
        res.send(formData())
    } catch (err) {
        res.send(formData({
            code: 0
        }));
    }
})

// 查
Router.get("/", async (req, res) => {
    let data = find("userlist", {
        user: "jingjing"
    })
    res.send(formData(data));
})
module.exports = Router;