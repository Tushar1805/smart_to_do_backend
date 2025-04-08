const express = require("express");
const router = express.Router();

const {
  getConversation,
  createConversation,
} = require("../controllers/conversation_controller");

router.route("/").get(getConversation);
router.route("/").post(createConversation);

module.exports = router;
