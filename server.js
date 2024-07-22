const app = require("./src/app");
require("dotenv").config();

const PORT=process.env.MY_API_URL


app.listen(PORT, () => `Listening on PORT ${PORT}`);