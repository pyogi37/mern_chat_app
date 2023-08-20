const express = require("express");

const router = express.Router();

router.use("/chat", require("./chatRoutes"));
router.use("/user", require("./userRoutes"));
router.use("/message", require("./messageRoutes"));

module.exports = router;
