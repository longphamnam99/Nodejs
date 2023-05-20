export class Controller {
  constructor(request) {
    if (request) {
      this.request = request;
    } else {
      this.request = "";
    }
  }

  async model(model = "") {
    if (model) {
      try {
        let path = await import("path");
        let { fileURLToPath } = await import("url");
        const __filename = fileURLToPath(await import.meta.url);

        const __dirname = path.dirname(__filename);

        let modelDir = path.dirname(__dirname) + "/models/";

        let importModel = await import(modelDir + `${model}.js`);

        return new importModel.default();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
