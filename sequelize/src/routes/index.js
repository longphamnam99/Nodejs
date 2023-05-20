import { app } from "#App";
import { Route } from "#route";
import path from "path";
const router_setup = new Route();

const routes = ["/user/:param"];

export default () => {
  let router_build = router_setup.URLbuild(routes);

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  return app.use("/", router_build);
};
