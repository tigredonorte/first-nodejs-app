import * as http from 'http';

import { routes } from './routes.mjs';

const server = http.createServer(async(req, res) => {
    try {
        if (routes[req.url] && req.method === routes[req.url].method) {
            const file = routes[req.url].file;
            const module = await import(file);
            return module.default(req, res);
        }
    } catch (error) {
        res.setHeader('Content-Type', 'text/html');
        res.write(error.message);
        res.statusCode = 500;
        return res.end();
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>Page not found</html>");
    res.end();
});
server.listen(3000);