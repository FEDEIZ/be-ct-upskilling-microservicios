module.exports = {
  list: async () => {
    return await require("./planets.json");
  },
  create: async () => {
    throw Error("Hay un error al crear un planeta");
  },
};
