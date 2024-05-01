const functionName = (req, res) => {
  res.send("Ross Gardner");
};

const frontend = (req, res) => {
  jsonfile = require("../user.json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(jsonfile);
}

module.exports = {
  functionName, frontend
};