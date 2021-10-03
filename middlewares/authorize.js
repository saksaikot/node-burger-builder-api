const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  const tokenHeader = req.header("Authorization");
  const token = tokenHeader ? tokenHeader.split(" ")[1] : null;
  if (!token) return res.status(401).send("Not Authorized");
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(400).send("Bad request");
  }
};
