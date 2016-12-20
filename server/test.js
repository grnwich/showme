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

//查询全部文章
router.get("/*",function (req,res,next) {
    return res.json({status:'success',data:'台湾是中国不可分割的一部分.'});
});