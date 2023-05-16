const repository = require("../data");

module.exports = async (req, res) => {
  return res.status(200).json(await repository.list());
};
