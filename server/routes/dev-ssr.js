const Router = require('koa-router');
const axios = require('axios');
const MemoryFS = require('memory-fs');
const webpack = require('webpack');
const VueServerRenderer = require('vue-server-renderer');

const config = require('../../build/webpack.config.server.js');
const compiler = webpack(config);