const merge = require('webpack-merge');

const base = require('./webpack.base.config.js');

const dev = require('./webpack.dev.config.js');

const pro = require('./webpack.pro.config.js');

const target = process.env.npm_lifecycle_event;

let config = {};

if (target === 'start') {
  config = dev;
} else if (target === 'build') {
  config = pro;
}

module.exports = merge(base, config);