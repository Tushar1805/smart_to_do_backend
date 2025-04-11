const mongoose = require("mongoose");

// const messageSchema = new mongoose.Schema(
//   {
//     role: {
//       type: String,
//       enum: ["user", "assistant"],
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const conversationSchema = mongoose.Schema(
//   {
//     // user_id: {
//     //   type: mongoose.Schema.Types.ObjectId,
//     //   required: true,
//     //   ref: "User",
//     // },
//     title: {
//       type: String,
//       default: "New Conversation",
//     },
//     messages: [messageSchema],
//   },
//   {
//     timestamps: true,
//   }
// );

// // Automatically update `updatedAt` on save
// conversationSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

const chatUserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  profileImage: { type: String, default: null },
  firstName: { type: String, required: true },
  lastName: { type: String, default: null },
  customProperties: { type: mongoose.Schema.Types.Mixed, default: null },
});

const messageSchema = new mongoose.Schema({
  user: { type: chatUserSchema, required: true },
  createdAt: { type: Date, required: true },
  text: { type: String, required: true },
  medias: { type: Array, default: null },
  quickReplies: { type: Array, default: null },
  customProperties: { type: mongoose.Schema.Types.Mixed, default: null },
  mentions: { type: Array, default: null },
  status: { type: String, default: "none" },
  replyTo: { type: mongoose.Schema.Types.Mixed, default: null },
  isMarkdown: { type: Boolean, default: false },
});

const chatConversationSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "New Conversation",
  },
  createdAt: { type: Date, default: Date.now },
  messages: [messageSchema],
});

module.exports = mongoose.model("Conversations", chatConversationSchema);
