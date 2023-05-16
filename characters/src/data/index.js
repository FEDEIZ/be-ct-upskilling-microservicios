const characters = require("./characters.json");

module.exports = {
  list: async () => {
    return await characters;
  },
  create: async () => {
    throw Error("Hay un error al crear un personaje");
  },
};
