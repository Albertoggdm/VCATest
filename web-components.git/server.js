var path = require('path'),
    connect = require('connect'),
    serveStatic = require('serve-static');
connect().use(serveStatic(path.join(__dirname, '.'))).listen(8080);
