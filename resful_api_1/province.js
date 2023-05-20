const fs = require('fs');

let json = fs.readFileSync('province.json');
let data = JSON.parse(json);

module.exports = {
  status: 200,
  message: "OK",
  data: data
};