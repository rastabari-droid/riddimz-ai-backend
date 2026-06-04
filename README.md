# Riddimz AI Backend (GPT‑4o)

This is the backend API for Riddimz AI, built with Node.js and Express.
It exposes a `/chat` endpoint that forwards user messages to OpenAI GPT‑4o
and returns the AI-generated response.

## Endpoints

### GET /
Health check route.

### POST /chat
Send JSON:
{
  "message": "your text here"
}

Returns:
{
  "reply": "AI response"
}

## Environment Variables

Create a `.env` file with:

OPENAI_API_KEY=your_openai_api_key_here

## Start the server locally


The server runs on port 4000 by default.
