# Humble Superhero Monorepo

This is a monorepo containing the Humble Superhero API (NestJS backend) and a React frontend.

## Features

- Add a new superhero with name, superpower, and humility score.
- Fetch all superheroes sorted by humility score in descending order.
- Validation for humility score (must be between 1 and 10).

## Structure

- `packages/backend`: NestJS API for managing superheroes.
- `packages/frontend`: React app for interacting with the API.
- `packages/shared`: Shared code between backend and frontend (optional).

## API Endpoints

- `POST /superheroes`: Add a new superhero.
- `GET /superheroes`: Fetch all superheroes sorted by humility score.

## Team Collaboration

If I were to collaborate with a teammate, I would:

    Use Git for version control and create feature branches for new functionality.

    Conduct code reviews to ensure quality and share knowledge.

    Pair program on complex features to solve problems together.

If I Had More Time

    Add authentication and authorization.

    Implement a proper database (e.g., PostgreSQL or MongoDB).

    Add more advanced filtering and pagination for the GET endpoint.

    Write more comprehensive tests for all endpoints.

## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/zouhair94/humble-superhero-monorepo
   ```

2. Install dependencies:
  
    ```bash
       npm install
    ```

3. Start the backend and frontend:

    ```bash
        npm start
    ```

---

## Final Monorepo Structure

humble-superhero-monorepo/
├── packages/
│ ├── backend/
│ │ ├── src/
│ │ ├── package.json
│ ├── frontend/
│ │ ├── src/
│ │ ├── package.json
│ ├── shared/
│ │ ├── src/
│ │ ├── package.json
├── lerna.json
├── package.json
├── README.md
Copy

---

This monorepo setup keeps everything organized and makes it easy to manage both the backend and frontend in a single repository. It also allows for shared code and dependencies, which can save time and reduce duplication. 🚀
