# JournalFront

Frontend for the Journal application — a lightweight interface to create, view, and manage journal entries.

## Features
- Create, edit, and delete journal entries
- List and search entries
- Responsive layout for desktop and mobile
- Local dev server and production build

## Tech stack
- Frontend framework: React /
- Bundler: Vite / Next.js
- Styling: CSS Modules /

## Prerequisites
- Node.js >= 16
- npm or yarn

## Setup
1. Clone the repository:
    ```
    git clone <repo-url> .
    ```
2. Install dependencies:
    ```
    npm install
    # or
    yarn
    ```

## Environment
Create a `.env` (or `.env.local`) file at project root with values needed by your app, for example:
```
VITE_API_URL=https://
```

## Development
Start the dev server with hot reload:
```
npm run dev
# or
yarn dev
```

## Build
Create a production build:
```
npm run build
# or
yarn build
```

Preview the production build locally:
```
npm run preview
# or
yarn preview
```

## Scripts (example)
- dev — start development server
- build — produce production build
- preview — serve production build locally
- lint — run linters
- test — run tests

Adjust scripts in package.json to match your stack.

## License
Specify a license (e.g., MIT) in LICENSE file.

