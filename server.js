const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 3000);
const statusPath = path.join(__dirname, ".runtime-status.json");
const { getDeviceName } = require("./runtime-compat");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.url === "/health") {
    if (!fs.existsSync(statusPath)) {
      res.statusCode = 404;
      res.end(JSON.stringify({ ok: false, message: "runtime not initialized" }));
      return;
    }

    res.end(fs.readFileSync(statusPath));
    return;
  }

  res.end(JSON.stringify({ message: "Hello World from " + getDeviceName() }));
});

server.listen(port, host, () => {
  console.log(`Hello World listening on http://${host}:${port}`);
});
