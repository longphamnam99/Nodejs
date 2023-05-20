const fs = require("fs");
const path = require("path");
const { sequelize, Sequelize } = require("#configs/sequelize");

const migrationPath = path.join(__dirname, "/src/databases/migration");
const option = process.argv[2];
new Promise(async (resolve, reject) => {
  if (option != "up" && option != "down") {
    reject(new Error(`Cannot find option: '${option}'`));
    return;
  } else {
    fs.readdirSync(migrationPath)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        require(path.join(migrationPath, file));
        if (option == "up") up(sequelize, Sequelize);
        else if (option == "down") down(sequelize, Sequelize);
        resolve();
      });
  }
});
