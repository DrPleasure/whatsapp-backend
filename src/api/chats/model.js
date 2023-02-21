import mongoose from "mongoose";

const { Schema, model } = mongoose;

const chatSchema = new Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
      }
    ]
  },
  { timestamps: true }
);

const Chat = model("Chat", chatSchema);

export { Chat };