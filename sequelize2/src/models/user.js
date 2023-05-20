const { sequelize, Sequelize } = require("#configs/sequelize");
const { Op } = require('sequelize');
module.exports = class user {
  save(req = {}) {
    let Note = sequelize.define("users", {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      address: Sequelize.STRING,
    });

    const note = Note.build({
      name: req.name,
      email: req.email,
      address: req.address,
    });
    note.save();
  }

  async list(query = "") {
    let Note = sequelize.define("users", {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      address: Sequelize.STRING,
    });
    let notes;
    if (query) {
      notes = await Note.findAll({
        where: {
          name: {
            [Op.like]: `%${query}%`,
          },
        },
      });
    } else {
      notes = await Note.findAll({ raw: true });
    }
    return notes;
  }

  async edit(id, req = {}) {
    let Note = sequelize.define("users", {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      address: Sequelize.STRING,
    });

    await Note.update(
      { name: req.name, email: req.email, address: req.address },
      { where: { id: id } }
    );
  }

  async delete(id) {
    let Note = sequelize.define("users", {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      address: Sequelize.STRING,
    });
    let n = await Note.destroy({ where: { id: id } });
    console.log(`number of deleted rows: ${n}`);
    return n;
  }
};
