'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {};

config.jwt = {
    secret: process.env.SECRET || 'supersecret'
};

exports.default = config;