module.exports = {
  list: async () => {
    return await require("./films.json");
  },
  create: async () => {
    throw Error("Hay un error al crear un film");
  },
};
