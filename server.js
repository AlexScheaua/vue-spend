let express = require('express');
// import path from 'path';
let serveStatic = require('serve-static');
let history = require('connect-history-api-fallback');

let app = express();
app.use(history());
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);