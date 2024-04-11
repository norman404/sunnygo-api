# One Piece API

Welcome to the One Piece API, a comprehensive data solution for fans and developers interested in the rich universe of the "One Piece" manga and anime series. This monorepo, managed with Turbo, contains various subprojects, including the core `api` project which serves as the backbone of our One Piece data service.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher recommended)
- npm or Yarn
- SQLite (for local database setup)

### Installation

1. Clone the repository:

```bash
git clone 
cd sunnygo-api
```

2. Install dependencies at the root of the monorepo to bootstrap the projects:

```bash
npm install
# or
yarn install
```

3. Navigate to the `api` project and set up the environment:

```bash
cd apps/api
cp .env.example .env
# Edit .env with your database and other environment-specific settings
```

4. Initialize the database (make sure your SQLite database is properly configured as per your `.env` settings):

```bash
npm run db:init
# or
yarn db:init
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
```

You should now have the API running locally, accessible at `http://localhost:3000` (or another port if configured differently in your environment).

## API Endpoints

The `api` project provides access to One Piece data, including characters, devil fruits, and more. Here are some of the available endpoints:

- `GET /characters`: Retrieves a list of characters.
- `GET /characters/:id`: Retrieves details about a specific character by ID.
- `GET /devil-fruits`: Retrieves a list of devil fruits.
- `GET /devil-fruits/:id`: Retrieves details about a specific devil fruit by ID.

## Contributing

We welcome contributions to the One Piece API. Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgments

- The One Piece community for the vast amount of data and enthusiasm.
- Eiichiro Oda for creating the "One Piece" series.
