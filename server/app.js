/**
 * <描述>
 *
 * @author lilw
 * @date: 2016/12/19
 * @version: v1.0
 */
'use strict';
var express = require('express');
var path = require('path');
var app = express();

require('./config/express')(app);
require('./api_router_v1')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log("....................111111...........");
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    console.log("....................22222222...........");
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Start server
app.listen(3000, function () {
    console.log('Express server listening on 3000');
});
module.exports = app;
