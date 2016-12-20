/**
 * <描述>
 *
 * @author lilw
 * @date: 2016/12/20
 * @version: v1.0
 */
'use strict';

var express = require('express');

var router = express.Router();

var articleController=require("./article.controller.js");

//查询全部文章
router.get("/queryAll",articleController.queryAll);
module.exports = router;
