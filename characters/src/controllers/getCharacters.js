const { Router } = require("express");
const repository = require("../data");

const characterRouter = Router();

characterRouter.get("/", async (req, res) => {
  return res.status(200).json(await repository.list());
});

module.exports = characterRouter;
