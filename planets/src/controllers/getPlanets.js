const { Router } = require("express");
const repository = require("../data");

const planetsRouter = Router();

planetsRouter.get("/", async (req, res) => {
  return res.status(200).json(await repository.list());
});

module.exports = planetsRouter;
