module.exports = function logger(req, res, next) {
  // log information about the request to the console -> GET
  const method = req.method;
  const endpoint = req.originalUrl;

  console.log(`${method} to ${endpoint}`);
  next();
};
