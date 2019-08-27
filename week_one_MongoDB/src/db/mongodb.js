const mongodb = require("mongodb");
const {
    DBurl,
    DBname
} = require("../config.json");

// 获取mongon客户端
const {
    MongoClient,
    Object
} = mongodb;

// 连接mongodb数据库
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(DBurl, async (err, client) => {
            if (err) throw err;
            let db = client.db(DBname);

            /* 增删改查 */
            // 返回的result是一个promise对象
            // let result = await collection.find().toArray();
            // console.log(result);
            resolve({
                client,
                db
            });
        })
    })
}

// 增
exports.insert = async (colName, data) => {
    console.log(colName)
    /* 连接数据库 */
    let {
        client,
        db
    } = await connect();
    /* 使用一个集合 */
    let collection = db.collection(colName);
    let result = await collection.insertOne(data);
    // 查询结束后关闭客户端连接，释放资源
    client.close();
    return result;
}

// 删
exports.remove = async (colName, query) => {
    /* 连接数据库 */
    let {
        client,
        db
    } = await connect();
    console.log(query);
    /* 使用一个集合 */
    let collection = db.collection(colName);
    collection.deleteMany(`ObjectId("${query}")`);
    // 查询结束后关闭客户端连接，释放资源
    client.close();
}
// 查
exports.find = async (colName, query) => {
    let {
        db,
        client
    } = await connect();
    let collection = db.collection(colName);
    let data = await collection.find(query).toArry();
    return data;
}