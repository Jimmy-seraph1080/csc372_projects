import OpenAI from "openai";
require("dotenv").config();

// Server-side implementation (Node.js/Express)
async function getAIResponse() {
  try {
    const openai_client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY // Key from .env file
    });

    const completion = await openai_client.chat.completions.create({
      model: "gpt-3.5-turbo", // Fixed model name (gpt-4o-mini is not valid)
      messages: [
        {"role": "user", "content": "write a haiku about ai"}
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("AI Error:", error);
    return "Error generating response";
  }
}

// For security, only expose this through a backend API endpoint
// Never call this directly from client-side code