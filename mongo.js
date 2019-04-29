// mongodbのMongoClientモジュール読み込み
const MongoClient = require('mongodb').MongoClient;
// assertモジュールの読み込み
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'self_api';
// 新規MongoClien生成
const client = new MongoClient(url, { useNewUrlParser: true });
// db変数
let db;

// 接続
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = client.db(dbName);
});

module.exports.collection = (name) => {
  return db.collection(name);
}
