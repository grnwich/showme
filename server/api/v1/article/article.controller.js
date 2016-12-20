/**
 * <描述>
 *
 * @author lilw
 * @date: 2016/12/20
 * @version: v1.0
 */
var articleDao=require("../../../dao/v1/article/articleDao");
//查询所有文章
exports.queryAll=function (req,res,next) {
    articleDao.queryAll(req,res,next);
}