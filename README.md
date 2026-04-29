# Tic-Tac-Toe Client

A React tic-tac-toe game with a persistent leaderboard. The game logic is built from the official React tutorial and extended with a username-based login and score tracking via the [tictactoe-server](../tictactoe-server) backend.

## Features

- Classic 3×3 tic-tac-toe with move history (jump to any previous move)
- Name-based login — enter a username to start playing
- Leaderboard — win counts are saved per username and displayed alongside the board

## Tech Stack

- **Framework:** React (JavaScript)
- **Backend:** [tictactoe-server](../tictactoe-server)

## Setup

### Requirements

- Node.js 18+
- A running [tictactoe-server](../tictactoe-server) instance

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

> The backend URL is configured via `REACT_APP_API_URL` — set it in a `.env` file if running the backend on a different host.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Deployment

Run `npm run build` and serve the `build/` directory with any static hosting provider or web server.
