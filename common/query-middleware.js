module.exports = function query(req, res, next) {
  const query = req.query;
  console.log("Query: ", query);
  next();
};
