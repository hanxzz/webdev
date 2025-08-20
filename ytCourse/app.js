const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to my homepage");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find this page. </p>
        <a href = "/">Back Home</a>`);
});

server.listen(5000);
