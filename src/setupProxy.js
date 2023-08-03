const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/okonomi/faktura/fakturautsteder/',
        createProxyMiddleware({
            target: 'https://play-with-fint.felleskomponent.no',
            changeOrigin: true,
        })
    );
};