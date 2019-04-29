//expressモジュールを読み込み
const express = require('express');
const router = express.Router();
// MongoDB用モジュール読み込み
const mongo = require('../mongo');
//ポート番号
const port = 3000;
//collection名
const coll = 'item'

// For Cross Origin
router.all('/*', function (req, res, next) {
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// GET find
router.get('/', function (req, res) {
  mongo.collection(coll).find().toArray(function (err, docs) {
    res.send(docs);
  })
});

module.exports = router;
