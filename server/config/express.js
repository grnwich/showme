/**
 * <描述>
 *
 * @author lilw
 * @date: 2016/12/19
 * @version: v1.0
 */
'use strict';

var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var cors = require('cors');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

module.exports = function(app) {
    app.enable('trust proxy');
    var options = {
        origin: true,
        credentials: true
    };
    app.use(cors(options));
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(passport.initialize());
};
