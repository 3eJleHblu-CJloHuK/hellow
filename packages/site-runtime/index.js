const runtimeCompat = require("runtime-compat");
const { version } = require("./package.json");

function getRuntimeInfo() {
  return {
    packageVersion: version,
    node: process.version,
    platform: process.platform,
    arch: process.arch,
    uptimeSeconds: Math.floor(process.uptime())
  };
}

function createHealthPayload(service = "hello-world-site") {
  return {
    status: "ok",
    service,
    compatibilityReady: runtimeCompat.initialize(),
    runtime: getRuntimeInfo()
  };
}

module.exports = {
  createHealthPayload,
  getRuntimeInfo
};
