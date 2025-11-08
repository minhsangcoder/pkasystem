# AI Agent Instructions for Training Management System

## Project Overview
This is a React-based training management system built with Vite, using a SQLite database and Express backend. The system manages educational programs, curricula, departments, staff, and students.

## Architecture & Key Components

### Frontend (`/src`)
- **React + Vite** application with TypeScript support
- **Routing**: React Router v6 with nested routes under `Layout` component
- **State Management**: Uses React hooks and context (no global state library)
- **UI Framework**: TailwindCSS for styling
- **Form Handling**: react-hook-form for form management
- **Notifications**: react-hot-toast for toast messages

### Backend (`/server`)
- **Express.js** server with SQLite database
- **ORM**: Sequelize for database operations
- **Database Location**: `/database/training.sqlite`
- **CORS**: Configured for localhost development (ports 3000-3003)

## Development Workflows

### Setup & Running
```bash
# Install dependencies
npm install

# Start development server (Frontend: Vite)
npm run dev

# Start backend server
node server/server.js

# Lint and format code
npm run lint
npm run format
```

### Project Conventions

1. **File Structure**
   - React components live in `/src/components` and `/src/pages`
   - Services and API calls in `/src/services`
   - Layouts in `/src/components/Layout`

2. **API Patterns**
   - API endpoints are organized by domain (departments, courses, etc.)
   - All API calls use the central `api.js` service with axios
   - Standard response format: `{ success: boolean, data: any }`

3. **Component Patterns**
   - Pages are direct route targets in `App.jsx`
   - Reusable components go in `/src/components`
   - Layout components handle page structure

## Integration Points

1. **Frontend-Backend Communication**
   - API calls through `src/services/api.js`
   - Default backend port: 8000
   - Error handling through axios interceptors

2. **Database**
   - SQLite database with Sequelize ORM
   - Models defined in server-side code
   - Auto-creates database directory if missing

## Common Tasks

1. **Adding a New Feature**
   - Create component in appropriate directory
   - Add route to `App.jsx` if it's a page
   - Create API endpoints in `server.js`
   - Add API methods in `services/api.js`

2. **Debugging**
   - Check browser console for frontend logs
   - Server logs include timestamps and request details
   - API calls are automatically logged by interceptors

## Key Files to Review
- `src/App.jsx`: Main routing structure
- `src/services/api.js`: API client and endpoints
- `server/server.js`: Backend setup and routes
- `src/components/Layout/Layout.jsx`: Main application layout