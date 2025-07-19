# POVC Fund Model Application

## Overview

This is a comprehensive venture capital fund modeling application built for Press On Ventures Capital (POVC). The application provides tools for fund setup, portfolio management, financial forecasting, and advanced analytics with integrated chart generation capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with a clear separation between client and server components:

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for POVC branding
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Charts**: Recharts for data visualization

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Design**: RESTful API with typed routes

## Key Components

### Database Schema
The application uses a relational database with the following core entities:
- **Funds**: Store fund information including size, fees, and vintage year
- **Portfolio Companies**: Track invested companies with sector, stage, and valuations
- **Investments**: Record individual investment transactions and rounds
- **Fund Metrics**: Store performance metrics like IRR, multiples, and DPI
- **Activities**: Log fund activities and milestones
- **Users**: User management for access control

### Frontend Modules
1. **Dashboard**: Real-time fund performance overview with key metrics
2. **Fund Setup**: Configuration interface for fund parameters
3. **Portfolio Management**: Company tracking and performance monitoring
4. **Financial Modeling**: Cohort analysis and projection tools
5. **Analytics**: Advanced data analysis and insights
6. **Reports**: Comprehensive reporting with Excel export capabilities

### UI Components
- Modular component library using Shadcn/ui
- Responsive design with mobile support
- Custom POVC-branded styling and color scheme
- Comprehensive chart gallery with 25+ chart types

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and validate data
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Typed responses ensure data consistency
5. **State Management**: Client updates UI based on server responses

The application uses a request-response pattern with optimistic updates for better user experience.

## External Dependencies

### Core Dependencies
- **UI Framework**: React 18+ with TypeScript support
- **Database**: PostgreSQL via Neon Database serverless with Drizzle ORM
- **ORM**: Drizzle with Zod validation schemas
- **UI Components**: Extensive Radix UI component library
- **Charts**: Recharts for data visualization
- **Styling**: Tailwind CSS with PostCSS processing

### Development Tools
- **Build Tool**: Vite with React plugin
- **Runtime**: tsx for TypeScript execution
- **Linting**: ESBuild for production builds
- **Database Migrations**: Drizzle Kit for schema management

### Session Management
- PostgreSQL session store using connect-pg-simple
- Session-based authentication (infrastructure ready)

## Team Collaboration

### Repository Setup
- Comprehensive README.md with installation and usage instructions
- TEAM_SETUP.md guide for new team members
- CONTRIBUTING.md with development guidelines and best practices
- .gitignore configured for Node.js projects
- TypeScript errors in storage layer resolved

### Code Quality
- Fixed TypeScript compatibility issues in server/storage.ts
- Proper null handling for optional fields
- Type-safe data operations throughout the application
- Consistent error handling patterns

## Deployment Strategy

### Development Environment
- Local development using tsx server with hot reload
- Vite dev server for frontend with HMR
- In-memory storage with comprehensive sample data
- Development banner integration for Replit environment

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Database: Ready for PostgreSQL migration when needed
- Environment: NODE_ENV-based configuration

### Environment Configuration
- DATABASE_URL environment variable configured for PostgreSQL
- Production deployment serves static files from Express
- Development mode includes additional debugging and hot reload capabilities
- Database automatically switches from in-memory to PostgreSQL when DATABASE_URL is available

### Team Sharing Options
1. **GitHub Repository**: Push code to GitHub for team collaboration
2. **Direct Sharing**: Share project files directly with team members
3. **Replit Sharing**: Share Replit workspace for instant collaboration
4. **Documentation**: Comprehensive setup guides for team onboarding

The application is designed to be easily deployable to various platforms including Replit, with appropriate environment detection and configuration. All documentation and setup guides are now ready for team collaboration.