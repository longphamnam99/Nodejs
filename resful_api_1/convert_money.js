const axios = require("axios");

const API_KEY = "f87c6d02d99d17c892f89b2f";
const API_ENDPOINT = "https://v6.exchangerate-api.com/v6";

const converMoney = async (req, res) => {
  const { amount, from, to } = req.body;
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/${API_KEY}/pair/${from}/${to}/${amount}`
    );

    const result = response.data.conversion_result;

    return res.send({
      status: 200,
      message: "OK",
      data: {
        amount,
        from,
        to,
        result,
      },
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "Server Error",
    });
  }
};

module.exports = converMoney;
