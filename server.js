require("site-runtime");

const http = require("node:http");

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.url === "/health") {
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.end(JSON.stringify({ message: "Hello World" }));
});

server.listen(port, host, () => {
  console.log(`Hello World listening on http://${host}:${port}`);
});
