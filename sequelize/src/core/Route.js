import express from "express";
import * as glob from "glob";
let router = express.Router();

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export class Route {
  URLbuild(routes = []) {
    routes.forEach((e) => {
      router.all(e, async (req, res) => {
        let url = req.path;
        var splitURL = url.toString().split("/");
        let controllerDir = path.dirname(__dirname) + "/controllers/";

        const files = glob.sync(
          controllerDir + this.ucfirst(splitURL[1]) + ".js"
        );

        if (files.length < 1) {
          return res.send(this._undefineMethod(req));
        } else {
          let cCtrDir = path.dirname(__dirname) + "/core/";
          let { Controller } = await import(
            `${cCtrDir}Controller.js`
          );
          new Controller(req);
          
          let action = {
            mehthod: this.ucfirst(splitURL[1]),
            callback: splitURL[2],
            dir: controllerDir + this.ucfirst(splitURL[1]) + ".js",
          };
          this._buildMethod(res, req, action);
        }
      });
    });
    return router;
  }

  async _buildMethod(res, req, action) {
    try {
      let method = await import(`${action.dir}`);
      let callback = `${action.callback}_${req.method.toLowerCase()}`;
      const myClassInstance  = await new method.default(req)[callback]()
      return res.render(myClassInstance)
    } catch (error) {
      this._undefineMethod(req);
    }
  }

  _undefineMethod(req) {
    return `Can't find this method ${req.mehthod}`
  }

  ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
