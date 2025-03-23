// load htttp 
var http = require('http');
// load file system
var fs = require('fs');
// port variable to store the port 1337
var port = 1337;
// a function that take response filepath, contenttype, response code = 200 as argument
// this function server static file will reads the path of the function and pass it 
function serveStaticFile(response, filePath, contentType, responseCode = 200) {
    // read the file contents
    fs.readFile(filePath, function (err, data) {
        // if there error is true
        if (err) {
            // print error message to console
            console.error('Error serving file:', err);
            // error == enotent then 404.html
            if (err.code === 'ENOENT') {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end(fs.readFileSync(path.join(__dirname, 'test/public/404.html')));
            } 
            // else 500 message with internal server error 
            else {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end('500 - Internal Server Error');
            }
        } 
        // else success display server file
        else {
            response.writeHead(responseCode, { 'Content-Type': contentType });
            response.end(data);
        }
    });
}
// create HTTP server with request handler callback
var server = http.createServer(function (req, res) {
    // normalize the URL by removing the querystring, optional trailing slash, and making it lowercase.
    let urlPath = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    // using switch statement as route handling
    switch (urlPath) {
        // home page
        case '':
        case '/':
            serveStaticFile(res, './public/index.html', 'text/html');
            break;
        // home page 
        case '/index':
            serveStaticFile(res, './public/index.html', 'text/html');
            break;
        // guide page
        case '/guide':
            serveStaticFile(res, './public/guide.html', 'text/html');
            break;
        // shop page
        case '/shop':
            serveStaticFile(res, './public/shop.html', 'text/html');
            break;
        // chatbot css
        case '/css/chatbot.css':
            serveStaticFile(res, './public/css/chatbot.css', 'text/css');
            break;
        // style.css
        case '/css/style.css':
            serveStaticFile(res, './public/css/style.css', 'text/css');
            break;
        // logo3.png
        case '/images/logo3.png':
            serveStaticFile(res, './public/images/logo3.png', 'image/png');
            break;
        // i9.jpg
        case '/images/i9.jpg':
            serveStaticFile(res, './public/images/i9.jpg', 'image/jpeg');
            break;
        // 4090.png
        case '/images/4090.png':
            serveStaticFile(res, './public/images/4090.png', 'image/png');
            break;
        // pc1.png
        case '/images/pc1.png':
            serveStaticFile(res, './public/images/pc1.png', 'image/png');
            break;
        // pc2.png
        case '/images/pc2.png':
            serveStaticFile(res, './public/images/pc2.png', 'image/png');
            break;
        // pc3.png
        case '/images/pc3.png':
            serveStaticFile(res, './public/images/pc3.png', 'image/png');
            break;
        // pc4-1.png
        case '/images/pc4-1.png':
            serveStaticFile(res, './public/images/pc4-1.png', 'image/png');
            break;
        // ram.jpg
        case '/images/ram.jpg':
            serveStaticFile(res, './public/images/ram.jpg', 'image/jpg');
            break;
        // ssd/jpg
        case '/images/ssd.jpg':
            serveStaticFile(res, './public/images/ssd.jpg', 'image/jpg');
            break;
        // 
        case '/images/x.png':
            serveStaticFile(res, './public/images/x.png', 'image/png');
            break;
        case '/images/404top_w.jpg':
            serveStaticFile(res, './public/images/404top_w.jpg', 'image/jpeg');
            break;
        case '/images/404bottom.gif':
            serveStaticFile(res, './public/images/404bottom.gif', 'image/gif');
            break;
        case '/images/404mid.gif':
            serveStaticFile(res, './public/images/404mid.gif', 'image/gif');
            break;
        case '/js/jquery-3.7.1.min.js':
            serveStaticFile(res, './public/js/jquery-3.7.1.min.js', 'text/javascript');
            break;
        case '/js/loadxml.js':
            serveStaticFile(res, './public/js/loadXML.js', 'text/javascript');
            break;
        case '/js/loadhtml.js':
            serveStaticFile(res, './public/js/loadHTML.js', 'text/javascript');
            break;
        case '/js/loadjson.js':
            serveStaticFile(res, './public/js/loadJSON.js', 'text/javascript');
            break;
        case '/js/loadjquery.js':
            serveStaticFile(res, './public/js/loadJQuery.js', 'text/javascript');
            break;
        case '/js/navbar.js':
            serveStaticFile(res, './public/js/navbar.js', 'text/javascript');
            break;
        case '/js/jquery.js':
            serveStaticFile(res, './public/js/jquery.js', 'text/javascript');
            break;
        case '/js/api.js':
            serveStaticFile(res, './public/js/api.js', 'text/javascript');
            break;
        case '/data/i9.xml':
            serveStaticFile(res, './public/data/i9.xml', 'text/xml');
            break;
        case '/data/ram.json':
            serveStaticFile(res, './public/data/ram.json', 'application/json');
            break;
        case '/data/4090.html':
            serveStaticFile(res, './public/data/4090.html', 'text/html');
            break;
        case '/data/reviews.json':
            serveStaticFile(res, './public/data/reviews.json', 'application/json');
            break;
        case '/data/specs.xml':
            serveStaticFile(res, './public/data/specs.xml', 'text/xml');
            break;
        case '/data/ssd.html':
            serveStaticFile(res, './public/data/ssd.html', 'text/html');
            break;
        default:
            serveStaticFile(res, './public/404.html', 'text/html', 404);
            break;
    }
});

server.listen(port);
console.log("Listening... Go to http://localhost:" + port);
