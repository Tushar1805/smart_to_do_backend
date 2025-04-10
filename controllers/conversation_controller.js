const asyncHandler = require("express-async-handler");
const Conversations = require("../models/conversation_model");

//@desc Gel all conversations
//@route GET /api/conversations
//@access private
const getConversation = asyncHandler(async (req, res) => {
  //   const contacts = await Conversations.find({ user_id: req.user.id });
  const contacts = await Conversations.find();
  res
    .status(200)
    .json({ data: contacts, message: "conversations fetched successfully" });
});

//@desc Create Conversation
//@route POST /api/conversation
//@access private
const createConversation = asyncHandler(async (req, res) => {
  console.log("The request body is ", req.body);
  const { title, messages } = req.body;
  if (!messages) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const conversation = await Conversations.create({
    title,
    messages,
    // user_id: req.user.id,
  });
  res.status(201).json(conversation);
});

module.exports = {
  getConversation,
  createConversation,
};
