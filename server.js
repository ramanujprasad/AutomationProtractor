var $path = require('path');
var $fs = require('fs');
var $express = require('express');

var app = $express();

var junctionRouter = $express.Router();
junctionRouter.use('/', _serveIndex);

app.use('/', junctionRouter);

if (!process.env.VCAP_APP_PORT) {
    var $buenosHttps = require('buenos-https');
    app = $buenosHttps(app);

}

app.listen(process.env.VCAP_APP_PORT || 3000, function () {
    if (!process.env.VCAP_APP_PORT) {
        console.log('server listening on https://localhost:3000');
    }
});
function _serveIndex(req, res, next) {
    if (req.path === '/') {
        var content = $fs.readFileSync($path.resolve(__dirname, 'index.html')).toString();
        res.end(content);
    }
    else {
        next();
    }
}
