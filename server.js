const app = require("./app");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then((e) => console.log("connected to mongo db"))
  .catch((e) => console.error("couldn't connect to mongodb"));
const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`));
