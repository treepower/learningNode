var https = require("https");
var ifstream = require("fs");

//create a server object:
https
  .createServer(function(req, res) {
    ifstream.readFile("./html/index", function(err, indexHTML) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(404);
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(indexHTML);
    });
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
