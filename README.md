# React Tic-Tac-Toe

A React tic-tac-toe game with GitHub OAuth login and a persistent leaderboard. The game logic is built from the official React tutorial and extended with authentication and score tracking via the [Lewis-Tac-Toe-Server](../Lewis-Tac-Toe-Server) backend.

## Features

- Classic 3×3 tic-tac-toe with move history (jump to any previous move)
- GitHub OAuth login
- Leaderboard — win counts are saved per GitHub user and displayed alongside the board

## Tech Stack

- **Framework:** React (JavaScript)
- **Auth:** GitHub OAuth (via [Lewis-Tac-Toe-Server](../Lewis-Tac-Toe-Server))

## Setup

### Requirements

- Node.js 18+
- A running [Lewis-Tac-Toe-Server](../Lewis-Tac-Toe-Server) instance

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

> The backend URL is configured in the source — update it to point to your local Lewis-Tac-Toe-Server if needed.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Deployment

Run `npm run build` and serve the `build/` directory with any static hosting provider or web server.
