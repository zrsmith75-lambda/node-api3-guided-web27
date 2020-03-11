module.exports = function addName(req, res, next) {
  req.name = "Web 27 Rules";
  next();
};
