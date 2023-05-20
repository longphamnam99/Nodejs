import express from "express";
import { config } from "dotenv";
import routes from "#routes"

config();

export const app = express();

routes(app)

const port = process.env.PORTAPP || 7720;

app.listen(port, (req, res) => {
  console.log("Server start at: http://localhost:" + port)
});
