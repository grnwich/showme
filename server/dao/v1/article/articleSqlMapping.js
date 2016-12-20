/**
 * <描述>
 *
 * @author lilw
 * @date: 2016/12/20
 * @version: v1.0
 */
var article = {
    insert:'INSERT INTO student(id, name, age) VALUES(0,?,?)',
    update:'update student set name=?, age=? where id=?',
    delete: 'delete from student where id=?',
    queryById: 'select * from student where id=?',
    queryAll: 'SELECT * FROM edu_article ORDER BY  ARTICLE_ID DESC'
};

module.exports = article;