import fs from "fs";
import path from "path";
import { sequelize, Sequelize } from "#configs/sequelize";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const migrationPath = path.join(__dirname, "./src/databases/migration");
const option = process.argv[2];

new Promise(async (resolve, reject) => {
  if (option != "up" && option != "down") {
    reject(new Error(`Cannot find option: '${option}'`));
  } else {
    const files = fs
      .readdirSync(migrationPath)
      .filter((file) => file.endsWith(".js"));

    for (const file of files) {
      const { up, down } = await import(path.join(migrationPath, file));
      if (option == "up") await up(sequelize, Sequelize);
      else if (option == "down") await down(sequelize, Sequelize);
      resolve();
    }
  }
});
