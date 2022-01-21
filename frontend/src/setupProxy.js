const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware("/login", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/curr_identity", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/logout", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/get_segments", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/get_user_segments", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/get_points", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/get_points_dict", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/add_new_segment", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/add_new_route", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/delete_segment", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/edit_segment", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/get_user_entries", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/add_new_entry", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/change_entry", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/delete_entry", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));

    app.use(createProxyMiddleware("/get_trips", {
        target: 'http://localhost:5000',
        changeOrigin: true
    }));
};