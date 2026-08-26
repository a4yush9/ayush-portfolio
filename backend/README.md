# Ask Ayush — secure backend placeholder

The visible **Ask Ayush** button is deliberately not connected to an AI service yet. This keeps the portfolio safe to publish: there is no API key, database, question logging, or hard-coded fake chatbot answer in the browser.

## Before enabling the chatbot

Build a small server-side endpoint at `POST /api/chat`. The browser should send only a short question. The server should:

1. Keep the AI-provider key in a server environment variable such as `AI_API_KEY` — never in `index.html`, `style.css`, `script.js`, GitHub, or a public hosting setting.
2. Apply rate limiting per IP address.
3. Reject oversized requests and validate that `message` is a short plain-text string.
4. Add the verified portfolio facts as a trusted server-side prompt.
5. Instruct the model to say “I don't have verified information about that yet.” when the answer is not in those facts.
6. Return only the answer; do not store personal questions or unnecessary analytics.
7. Use HTTPS and set a restrictive CORS policy that allows only your published portfolio domain.

## Hosting safety checklist

- Put `.env` in `.gitignore`; never upload it.
- Change the sample value in `.env.example` only on the hosting server.
- Keep Node.js and packages updated.
- Do not add an admin login, database, or upload form unless it is genuinely needed.
- Do not trust content entered by visitors; validate it on the server.

This folder is a guide, not a live backend. A backend should be implemented and tested on the hosting platform before switching the portfolio chat on.
