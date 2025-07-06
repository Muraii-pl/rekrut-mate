# RekrutMate

A modern recruitment assistant platform that helps streamline the hiring process with question management, candidate evaluation, and interview preparation tools.

## 🌟 Features

- **User Authentication**
  - Secure login/logout functionality
  - Session management with refresh tokens
  - Protected routes

- **Question Management**
  - Browse and search questions
  - Filter questions by tags
  - Detailed question views
  - Add comments to questions

- **Tag System**
  - Categorize questions with tags
  - Filter questions by multiple tags
  - Easy tag management

- **Modern UI/UX**
  - Responsive design
  - Intuitive interface
  - Real-time updates

## 🏗️ Architecture

### Application Layers

| Layer             | Can depend on             | Must not depend on            | Description                                   |
|-------------------|---------------------------|-------------------------------|-----------------------------------------------|
| `api/`            | `application/`, `domain/` | `infrastructure/`             | Entry points (HTTP controllers, CLI, REST)    |
| `application/`    | `domain/`                 | `api/`, `infrastructure/`     | Use case logic, DTO mapping                   |
| `domain/`         | — (pure logic)            | anything                      | Pure business logic, no external dependencies |
| `infrastructure/` | anything                  | (nothing should depend on it) | Database access, external APIs implementation |

### Project Structure

```
rekrut-mate/
├── apps/
│   ├── rekrut-mate-api/      # Backend API
│   │   ├── src/
│   │   │   ├── api/          # Controllers and routes
│   │   │   ├── application/  # Application logic
│   │   │   ├── domain/       # Domain models
│   │   │   ├── infrastructure/ # External services implementations
│   │   │   └── config/       # Configuration
│   │
│   └── rekrut-mate-web/      # Frontend Angular
│       ├── src/
│       │   ├── app/
│       │   │   ├── routes/   # Feature modules
│       │   │   ├── shared/   # Shared components and services
│       │   │   └── core/     # Core services and providers
│       │   └── assets/       # Static assets
│
├── tools/                   # Shared tools
└── package.json             # Main dependencies
```

## 🛠️ Tech Stack

### Frontend (rekrut-mate-web)
- **Framework**: Angular 20+
- **UI Components**: Angular Material 20+
- **State Management**: NgRx Signals + RxJS 7.8
- **Styling**: SCSS
- **Build System**: Nx Workspace
- **Testing**: Jest
- **Linting**: ESLint + Prettier
- **Package Manager**: npm
- **Runtime**: Zone.js

### Backend (rekrut-mate-api)
- **Runtime**: Node.js 18+
- **Framework**: Express.js 5.x
- **Database**:
  - PostgreSQL 12+
  - Sequelize ORM 6.x with TypeScript
  - Sequelize Typescript
- **Authentication**:
  - JWT with HTTP-only cookies
  - Bcrypt for password hashing
- **API Documentation**:
  - Swagger UI Express
  - Swagger JSDoc
- **Validation**: Zod 3.x
- **Scheduling**: node-cron
- **Configuration**: dotenv
- **Testing**:
  - Jest
  - Supertest
- **Development**:
  - TypeScript
  - ts-node
  - Nodemon for hot-reloading

## 📊 Database

### PostgreSQL Configuration
1. Install PostgreSQL 12+ on your system
2. Create a new database:
   ```sql
   CREATE DATABASE rekrutmate;
   CREATE USER rekrutmate_user WITH PASSWORD 'secure_password';
   GRANT ALL PRIVILEGES ON DATABASE rekrutmate TO rekrutmate_user;
   ```

### Migrations
The application uses Sequelize for migrations. To run migrations:
```bash
cd apps/rekrut-mate-api
npx sequelize-cli db:migrate
```

### Data Models
- **User** - system users
- **Question** - interview questions
- **Tag** - question categories
- **Comment** - question comments
- **UserSession** - user sessions

## 🔄 Example API Requests

### 1. User Registration
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

### 2. User Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

### 3. Fetching Questions with Filtering
```http
GET /api/question/all?page=1&limit=10&tags=javascript,typescript
Cookie: session=<session-cookie>
```

### 4. Adding a New Question
```http
POST /api/question/create
Content-Type: application/json
Cookie: session=<session-cookie>

{
  "title": "Difference between let and const in JavaScript",
  "content": "Please explain the differences between let and const declarations in JavaScript.",
  "tags": ["javascript", "basics"]
}
```

## 📚 API Endpoints

### Authentication
| Method | Endpoint                   | Description                 | Requires Authentication  |
|--------|----------------------------|-----------------------------|--------------------------|
| POST   | /api/auth/register         | Register a new user         | No                       |
| POST   | /api/auth/login            | User login                  | No                       |
| GET    | /api/auth/logout           | User logout                 | Yes (via session cookie) |
| GET    | /api/auth/refresh          | Refresh session             | No (uses refresh cookie) |
| GET    | /api/auth/is-authenticated | Check authentication status | Yes (via session cookie) |

### Questions
| Method | Endpoint             | Description                     | Requires Authentication  |
|--------|----------------------|---------------------------------|--------------------------|
| GET    | /api/question/all    | Get paginated list of questions | Yes (via session cookie) |
| GET    | /api/question/:slug  | Get single question             | Yes (via session cookie) |
| POST   | /api/question/create | Create new question             | Yes (via session cookie) |

### Comments
| Method | Endpoint              | Description             | Requires Authentication  |
|--------|-----------------------|-------------------------|--------------------------|
| POST   | /api/question/comment | Add comment to question | Yes (via session cookie) |

### Tags
| Method | Endpoint     | Description            | Requires Authentication |
|--------|--------------|------------------------|-------------------------|
| GET    | /api/tag/all | Get all available tags | No                      |
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT with HTTP-only cookies
- **API Documentation**: Swagger/OpenAPI

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- PostgreSQL (v12+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Muraii-pl/rekrut-mate.git
   cd RekrutMate
