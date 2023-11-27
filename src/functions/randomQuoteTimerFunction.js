const { app } = require("@azure/functions");
const axios = require("axios");

app.timer("randomQuoteTimerFunction", {
  schedule: "0 */1 * * * *",
  handler: async (myTimer, context) => {
    context.log("Timer function processed request.");
    try {
      const response = await axios.get(process.env.APP_URL);
      context.res = {
        status: response.status,
        body: response.data,
      };
    } catch (error) {
      context.res = {
        status: error.response.status || 500,
        body: error.message,
      };
    }
  },
});
