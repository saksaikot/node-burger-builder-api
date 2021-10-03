const express = require("express");
const router = express.Router();

const { create, auth } = require("../controllers/users");

// router.post("/", create);
router.route("/").post(create);
router.route("/auth").post(auth);
module.exports = router;
