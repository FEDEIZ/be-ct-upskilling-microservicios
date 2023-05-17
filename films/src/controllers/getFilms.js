const repository = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  return response(res, 200, await repository.list());
};
