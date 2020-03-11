const express = require("express"); // importing a CommonJS module
const morgan = require("morgan");
const helmet = require("helmet");

const hubsRouter = require("./hubs/hubs-router.js");
const queryMiddleware = require("./common/query-middleware.js");
const loggerMiddlware = require("./common/logger-middleware.js");
const addNameMiddleware = require("./common/add-name-middleware.js");

const server = express();
// global middleware
server.use(helmet());
// server.use(morgan("dev")); // 3rd party npm i
server.use(loggerMiddlware);
server.use(queryMiddleware);
server.use(express.json()); // builtin middleware does not require npm i

server.use("/api/hubs", hubsRouter);

server.get("/", addNameMiddleware, (req, res) => {
  const nameInsert = req.name ? ` ${req.name}` : "";

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome ${nameInsert}, to the Lambda Hubs API</p>
    `);
});

module.exports = server;
