const { Router } = require("express");
const store = require("./../database/index");
const { validateModel } = require("./../middlewares");
const { catchedAsync, response } = require("./../utils");

const router = Router();

router.get(
  "/:model/:id",
  validateModel,
  catchedAsync(async (req, res) => {
    const { model, id } = req.params;
    return response(res, 200, await store[model].get(id));
  })
);

router.get(
  "/:model",
  validateModel,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    return response(res, 200, await store[model].list());
  })
);

router.post(
  "/:model",
  validateModel,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    const { body } = req.body;
    return response(res, 200, await store[model].insert(body));
  })
);
module.exports = router;
