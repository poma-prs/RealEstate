var
  http = require('http'),
  url = require("url"),
  path = require("path"),
  fs = require("fs");

var filePrefix = "/front-end/build/";

http.createServer(function (req, res) {

  var
    uri = url.parse(req.url).pathname,
    basePath = path.join(process.cwd(), filePrefix);

  if (!uri || uri == '/') uri = 'index.html';
  if (uri.indexOf('/bower') === 0 || uri.indexOf('/libs') === 0)
    basePath = path.join(process.cwd(), '/front-end/');
  var filename = path.join(basePath, uri);

  console.log(uri);
  fs.exists(filename, function (exists) {
    if(!exists || fs.statSync(filename).isDirectory()) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404 Not Found\n");
      res.end();
      return;
    }

    try {
      var file = fs.readFileSync(filename);
      if (filename.indexOf('.html') > -1)
        res.writeHead(200, {"Content-Type": "text/html"});
      else if (filename.indexOf('.css') > -1)
        res.writeHead(200, {"Content-Type": "text/css"});
      else
        res.writeHead(200, {"Content-Type": "text/plain"});
      res.write(file);
      res.end();
    }
    catch (err) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write(err.message);
      res.end();
    }
  });

}).listen(process.env.PORT || 8000);

console.log('Server running on port 8000.');
