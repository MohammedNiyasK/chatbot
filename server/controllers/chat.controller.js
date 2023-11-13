import OpenAI from "openai";
import { io } from "../index.js";
import { Chat } from "../models/chat.model.js";

const openai = new OpenAI({
  apiKey: "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", // This is also the default, can be omitted
});

export const createPost = async (req, res) => {
  try {
    const { input } = req.body;
    console.log(input);

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    });


    const newChat = new Chat({
      query: input,
      result: chatCompletion.choices[0].message.content,
    });

    const savedChat = await newChat.save();

    const chats = await Chat.find().sort({ createdAt: -1 });

    io.emit("chatMsg", chats);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    res.status(500).json({
      message: "Error creating post",
    });
  }
};


export const getChat = async (req,res) => {
  try {

    const chats = await Chat.find().sort({ createdAt: -1 });
    res.status(200).json(chats)
    
  } catch (error) {
    console.log(`Error : ${error.message}`);
    res.status(500).json({
      message:"Error fetching chats"
    })
  }

}
