const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/apiw',
    createProxyMiddleware({
      target: 'https://wallhaven.cc',
      changeOrigin: true,
    })
  );
};

