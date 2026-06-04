import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Health check route
app.get("/", (req, res) => {
  res.send("Riddimz AI backend is running");
});

// Chat endpoint
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const payload = {
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `
            You are Riddimz AI — a creative, reggae-rooted assistant.
            You speak clearly, respectfully, and with cultural intelligence.
            You help users with music, creativity, philosophy, and general questions.
          `
        },
        { role: "user", content: message }
      ]
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Riddimz AI backend running on port ${PORT}`);
});

