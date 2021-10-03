const express = require("express");
const router = express.Router();

const authorize = require("../middlewares/authorize");
const { create, list, item } = require("../controllers/orders");

router.route("/").post(authorize, create).get(authorize, list);
router.route("/:id").get(authorize, item);
module.exports = router;
