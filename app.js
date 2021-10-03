const dotenv = require("dotenv");
dotenv.config({ path: "./.env.local" });
// console.log(process.env);
const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const app = express();
app.use(cors());
app.use(express.json());
// const { NODE_ENV } = process.env;
// if (!NODE_ENV || NODE_ENV === "development") {
//   const morgan = require("morgan");
//   app.use(morgan("dev"));
//   console.log("in development mode");
// }

//routes
app.use("/api/users", usersRoutes);
app.use("/api/orders", ordersRoutes);

app.get("/", (req, res) => {
  res.send("hello from express");
});

module.exports = app;
