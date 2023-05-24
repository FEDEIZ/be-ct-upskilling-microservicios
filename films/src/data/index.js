const axios = require("axios");
module.exports = {
  list: async () => {
    return await axios.get("http://database:8004/Film").then((res) => res.data);
  },
  create: async () => {
    throw Error("Hay un error al crear un film");
  },
};
