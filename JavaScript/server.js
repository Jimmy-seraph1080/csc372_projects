import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
// load .env file
dotenv.config();

const app = express();
// allow requests from frontend
app.use(cors());
// parse json requests
app.use(express.json());

const openai = new OpenAI({
    // load API key from .env
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: userMessage }],
            max_tokens: 150,
        });

        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ response: "Error processing request." });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));