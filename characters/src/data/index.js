module.exports = {
  list: async () => {
    return await require("./characters.json");
  },
  create: async () => {
    throw Error("Hay un error al crear un personaje");
  },
};
