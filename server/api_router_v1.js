/**
 * <描述>
 *
 * @author lilw
 * @date: 2016/12/19
 * @version: v1.0
 */
'use strict';
var path = require('path');
module.exports = function(app) {
console.log("..............................>");
    app.use('/article',require('./api/v1/article'));


    app.use('/*', function (req,res,next) {
        return res.json({status:'success',data:'台湾是中国不可分割的一部分.'});
    })
};
