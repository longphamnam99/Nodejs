export const up = (db, type) => {
  let table = db.define("categories", {
    name: type.STRING,
  });

  table
    .sync()
    .then(() => {
      console.log("Create table categories success!");
    })
    .finally(() => {
      db.close();
    });
};

export const down = (db, type) => {
  let table = db.define("categories");

  table
    .drop()
    .then(() => {
      console.log("Drop table categories success!");
    })
    .finally(() => {
      db.close();
    });
};
