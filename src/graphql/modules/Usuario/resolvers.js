const db = require("../../../db");

module.exports = {
  Query: {
    usuario: {
      perfil(obj) {
        console.log(obj);
        return db.perfis.find((perfil) => perfil.id == obj.perfil_id);
      },
    },
    usuarios() {
      return db.usuarios;
    },
    usuario(_, args) {
      return db.usuarios.find((db) => db.id == args.id);
    },
  },
};
