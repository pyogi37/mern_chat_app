const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../../../controllers/api/v1/messageController");
const { protect } = require("../../../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
