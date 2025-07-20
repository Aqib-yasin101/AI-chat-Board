
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY ="Here add Your Gemini ApI-key"

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro",
    
  });

  const chat = model.startChat();

  console.log("🟡 Prompt: ", prompt);
  const result = await chat.sendMessage(prompt);
  const response = result.response;
  //console.log(`${prompt}?\n${ response.text()}`);

  return response.text();
  //console.log({prompt}<br>response.text())

}

export default runChat;
