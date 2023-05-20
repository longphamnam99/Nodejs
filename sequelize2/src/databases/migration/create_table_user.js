module.exports = up = (db, type) => {
  let table = db.define("user", {
    name: type.STRING,
    email: type.STRING,
    address: type.STRING,
  });

  table
    .sync()
    .then(() => {
      console.log("Create table user success!");
    })
    .finally(() => {
      db.close();
    });
};

module.exports = down = (db, type) => {
  let table = db.define("user");

  table
    .drop()
    .then(() => {
      console.log("Drop table user success!");
    })
    .finally(() => {
      db.close();
    });
};
