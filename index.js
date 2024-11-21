const serverless = require('serverless-http');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const proxyUrl = 'http://141.148.182.91:2080'

// 反向代理配置
const proxyOptions = {
    target: proxyUrl,
    changeOrigin: true,
    ws: true, // 启用 WebSocket 支持
};

// 使用反向代理中间件
app.use('/', createProxyMiddleware(proxyOptions));

module.exports.handler = serverless(app);
