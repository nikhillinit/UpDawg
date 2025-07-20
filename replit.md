# POVC Fund Model Application

## Overview

This is a comprehensive venture capital fund modeling application built for Press On Ventures Capital (POVC). The application provides tools for fund setup, portfolio management, financial forecasting, and advanced analytics with integrated chart generation capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.
Development workflow: Automated debugging and UI improvements without manual file copying.
AI responsibilities: Handle debugging, UI enhancements, performance optimization, and code quality.
User focus: Business logic, requirements, strategic decisions, and approval of AI improvements.
Auto-Discovery Agent: Active with GitHub integration to local UpDawg directory.
Agent Matrix: Database Architect (schema), Builder (API), Replit Agent (UI) - all commit before phase completion.

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

### Recent Updates (January 20, 2025)
- Enhanced financial modeling with DualForecastDashboard component
- Integrated real-time API data feeds with 30-second refresh intervals
- Added comprehensive error boundaries and performance optimization
- Completed end-to-end system validation from database to UI
- Configured production-ready deployment settings for Replit
- Established GitHub auto-sync protocols for team collaboration
- **PIPELINE PHASE**: Added comprehensive deal pipeline database schema (7 new tables)
- Implemented complete deal flow tracking from lead sourcing to investment committee
- Created advanced due diligence workflow with scoring models and market research
- Added financial projections and pipeline activity audit trails
- All pipeline tables deployed to PostgreSQL with sample data

### **PERSISTENT FUND CONTEXT IMPLEMENTATION (January 19, 2025)**
- **Created comprehensive FundContext** for persistent fund state management across all pages
- **Implemented localStorage persistence** - fund data survives browser refresh and navigation
- **Fixed onboarding workflow** - fund setup → dashboard → all other pages with persistent context
- **Enhanced sidebar and header** to display current fund information consistently
- **Updated all page components** to use persistent fund context instead of repeated API calls
- **Professional chart containers** with proper loading states and error handling
- **Fixed user flow** - one-time fund setup, seamless navigation between all sections

The application now provides a professional user experience with persistent fund context. Users set up their fund once and navigate freely between forecasting, portfolio management, analytics, and reporting without re-entering fund parameters.

### **AUTHENTIC TACTYC METHODOLOGY IMPLEMENTATION (January 20, 2025)**
- **Implemented genuine Follow-on MOIC calculations** using probability-weighted performance cases methodology from Tactyc blog documentation
- **Built Data-Driven Fund Manager Scenario Builder** with exact feedback loop workflow: Construction → Market Update → Course Correction
- **Added real construction vs. actual variance analysis** showing 3.22x TVPI target dropping to 2.53x due to market conditions (22% decline from blog post)
- **Created course correction strategy** demonstrating how to get back on track through selective follow-ons and optimized seed allocation
- **Enhanced Optimal Reserves Ranking** with authentic Company X example (3.98x → 1.65x MOIC adjustment) and probability-weighted calculations
- **Replaced placeholder UI with sophisticated financial calculations** following exact Tactyc methodologies from multiple blog posts and documentation

### **PORTFOLIO CONSTRUCTION WIZARD & INTERACTIVE MODELING (January 20, 2025)**
- **Implemented comprehensive Portfolio Construction component** with interactive parameter sliders for fund size, management fees, initial check size, follow-on reserves, and graduation rates
- **Built real-time impact analysis** showing how changing fund parameters affects average initial check, ownership percentages, required returns, and implied TVPI calculations
- **Created authentic Tactyc-style visualizations** including fund capital allocation waterfall, graduation rate impact charts, and return-the-fund analysis across different fund sizes
- **Added sensitivity analysis dashboard** highlighting key trade-offs in portfolio construction decisions and their implications for fund performance
- **Integrated four-tab interface** combining Construction, Graduation Impact, Return Analysis, and Sensitivity views for comprehensive fund modeling
- **Implemented exact Tactyc methodology** for calculating required fund returns to achieve target LP multiples, including management fees, carry calculations, and fund costs
- **Built interactive graduation rate controls** allowing users to adjust seed round parameters and see real-time impact on investment allocation across funding rounds
- **Enhanced Planning page** with five-tab system: Investment Cases, Portfolio Construction, Optimal Reserves, Follow-On Strategy, and Exit Analysis

### **GRADUATION RATE FOLLOW-ON STRATEGY & EXIT ANALYSIS IMPLEMENTATION (January 20, 2025)**
- **Implemented authentic Graduation Rate Follow-On Strategy** based on CB Insights 2018 data for 1,119 seed stage companies with real graduation rates (46% Seed→A, 65% A→B, 70% B→C, etc.)
- **Built comprehensive Monte Carlo simulation module** with 1,000 simulations testing graduation rate variations to determine optimal fund size and follow-on capital requirements
- **Created Exit Analysis component** with stage-by-stage exit rates, ownership dilution tracking, and fund return calculations including gross/net multiples
- **Added Follow-On Strategy optimization** with pro-rata calculations, dilution modeling, and strategic follow-on percentages (85% A rounds, 80% B rounds, 50% C rounds, 25% D rounds)
- **Implemented fund construction methodology** calculating optimal fund size based on portfolio construction, initial ownership targets, and follow-on reserve requirements
- **Built authentic Tactyc planning interface** with four-tab system: Investment Cases, Optimal Reserves, Follow-On Strategy, and Exit Analysis for comprehensive portfolio planning
- **Added ownership dilution visualization** showing how equity stakes decrease through subsequent funding rounds with accurate dilution percentages
- **Created fund performance modeling** with carried interest calculations, management fee adjustments, and LP return multiple calculations
- **Integrated Planning page enhancements** combining existing investment case management with new graduation rate analysis and exit modeling capabilities
- **Implemented authentic venture capital methodologies** following exact Tactyc documentation for follow-on allocation, graduation rate analysis, and portfolio construction optimization

### **BUDGET CREATOR & FUND EXPENSE TRACKING IMPLEMENTATION (January 20, 2025)**
- **Implemented one-click Budget Creator** with automatic generation of standard fund expense categories (Legal, Administration, Tax, Audit, Software, Setup, Other)
- **Built comprehensive expense ratio calculations** using industry-standard percentages based on fund size and term periods
- **Created Fund Expense Charts component** with cumulative and period views showing actual vs projected expenses over time
- **Added stacked area charts** for expense progression with color-coded categories and interactive tooltips
- **Integrated expense ratio tracking** showing percentage of fund size consumed by each expense category over fund lifetime
- **Enhanced fund setup wizard** with Budget Creator integration - users can generate complete expense budgets in one click
- **Built dynamic expense management** with ability to add custom expense categories beyond standard ones
- **Added comprehensive expense analytics** including largest category identification, total expense ratios, and category count tracking
- **Implemented yellow-highlighted input fields** for user modification of auto-generated budget parameters
- **Created expense data visualization** with both absolute dollar amounts and percentage ratios for strategic fund management

### **COMPREHENSIVE KPI MANAGER SYSTEM IMPLEMENTATION (January 20, 2025)**
- **Implemented complete KPI Manager following exact Tactyc methodology** with four-tab interface (Manage KPIs, KPI Requests, Contacts, Settings)
- **Built KPI Definition interface** with quantitative/qualitative types, frequency tracking (monthly/quarterly/semi-annual/annual), data formats (currency/percentage/number), and term configurations
- **Created portfolio company dashboard** with professional data grid showing ARR, Sales, Cash Balance, and other metrics across multiple periods with actual vs projected data
- **Implemented interactive ARR visualization** with bar charts displaying actual vs projected data over time with proper legends and Y-axis scaling
- **Built comprehensive KPI request creation system** with visible metrics selection, passcode protection, and automated URL generation for portfolio companies
- **Added KPI request management** with status tracking (Pending Update, Sent, Pending Review, Completed), bulk actions, and request lifecycle management
- **Created contact management system** for portfolio companies with email validation, import functionality, and automated notification settings
- **Implemented KPI submission interface** matching exact Tactyc design for portfolio companies with data entry grid, company comments, and document upload capabilities
- **Built comprehensive settings panel** with auto-approval toggles, notification preferences, data retention policies, and integration status displays
- **Added integration framework** for Notion connectivity (ready for future implementation) and Excel import/export capabilities
- **Enhanced header with export functionality** and comprehensive data management tools for operational efficiency
- **Integrated KPI Manager into main navigation** with proper routing and module configuration throughout the application
- **Created authentic Tactyc-style interface** with blue color schemes, professional table layouts, and exact design pattern matching from documentation

### **INVESTMENTS TABLE & VALUATION ANALYSIS IMPLEMENTATION (January 20, 2025)**
- **Implemented comprehensive Investments Table** following exact Tactyc methodology as a consolidated view of all portfolio companies and their metrics
- **Built advanced filtering and search capabilities** with sector, stage, status filters and real-time search functionality across company names and sectors
- **Created sortable data columns** with MOIC, IRR, investment amounts, ownership percentages, and current valuations with color-coded performance indicators
- **Added bulk selection and management** with checkbox selection, bulk actions for exporting, tagging, and status updates across multiple investments
- **Implemented investment reporting metrics** including total invested capital, current portfolio value, average MOIC calculations, and portfolio company count
- **Built comprehensive status tracking** with active, exited, and written-off investment classifications and corresponding badge indicators
- **Created deal tags system** for portfolio company categorization with AI/ML, B2B, B2C, Payments, Digital Health, Marketplace tags
- **Added Time Machine functionality** for historical portfolio rollback capabilities and performance tracking over time
- **Implemented custom fields and column configuration** allowing users to customize their investment table view based on specific analysis needs
- **Enhanced Valuation Analysis tab** in KPI Manager with automated valuation multiple computation matching KPI data with company valuations by date
- **Built valuation multiple filtering** by entry round, sector, geography, and deal tags with mean/median calculation methods
- **Created comprehensive valuation analysis table** showing revenue multiples across all funding rounds with summary statistics and export capabilities
- **Integrated dual-view portfolio interface** allowing users to toggle between detailed Investments Table and traditional Portfolio Overview with charts and analytics

### **ADVANCED MOIC ANALYSIS SYSTEM IMPLEMENTATION (January 20, 2025)**
- **Implemented comprehensive MOIC Analysis system** featuring all seven different types of MOIC calculations moving beyond simple MOIC to sophisticated performance and planning metrics
- **Built authentic Tactyc MOIC methodology** with exact formulas for Current MOIC, Current MOIC on Initial, Current MOIC on Deployed Reserves, Exit MOIC, Exit MOIC on Initial, Exit MOIC on Follow-Ons, and Exit MOIC on Planned Reserves
- **Created interactive MOIC visualization dashboard** with current vs exit performance comparison, planned reserves analysis, and comprehensive MOIC comparison tables
- **Added Exit MOIC on Planned Reserves analysis** showing portfolio companies ranked by expected return on future follow-on investment for optimal reserve deployment
- **Built MOIC formula definitions panel** with detailed explanations of each calculation methodology and their specific use cases in investment performance evaluation
- **Implemented scatter plot analysis** for planned reserves optimization showing relationship between reserve amounts and expected MOIC returns
- **Created comprehensive MOIC performance tracking** with color-coded indicators, top performer rankings, and reserve optimization insights
- **Integrated triple-view portfolio interface** allowing users to toggle between Investments Table, MOIC Analysis, and Portfolio Overview for complete investment management

### **TACTYC CONSTRUCTION WIZARD IMPLEMENTATION (January 19, 2025)**
- **Implemented full 4-step progressive wizard** based on Tactyc documentation patterns
- **Fixed critical scrolling issues** - removed height restrictions and overflow limitations for proper viewport sizing
- **Created step-by-step user flow**: Essentials → Advanced → Optional → Review with clear navigation
- **Added progressive disclosure** - core fields first, advanced options later, optional features skippable
- **Enhanced responsive design** with proper mobile/tablet/desktop compatibility
- **Integrated skip functionality** for non-essential steps with clear "Skip for now" options
- **Added comprehensive review step** with organized configuration summary before fund creation
- **Applied Tactyc UI patterns** while maintaining Press On Ventures branding throughout interface

### **INVESTMENT MANAGEMENT & PLANNING ENHANCEMENTS (January 20, 2025)**
- **Enhanced Investment Tracking Interface** following Tactyc design patterns with professional round cards
- **Implemented Add Event Dropdown** with multiple investment event types (New Round, Ownership Update, Valuation Update, Secondary Acquisition, Partial Sale, Dividend/Interest/Distribution)
- **Created Ownership Update Dialog** with month selection, percentage input, dilution mode toggle, event notes, and advanced share data entry
- **Built New Round Dialog** with comprehensive form including security type, graduation rate, currency selection, investment amounts, pre-money valuation, and advanced share data calculations
- **Added Valuation Update Dialog** for FMV adjustments with current vs new valuation comparison
- **Implemented Liquidation Preferences System** with complete waterfall structure configuration, participating/non-participating types, cap management, and "Liq Prefs Active" indicators
- **Built comprehensive Liq Prefs Dialog** with enable/disable toggle, total liquidation preference owned, waterfall hierarchy (Senior, Pari Passu, Junior), and import from other cases functionality
- **Enhanced Performance Cases** with liquidation preference integration, active status badges, and per-case liq pref configuration
- **Implemented Investment Detail Pages** with comprehensive tabbed interface (Rounds, Performance Cases, Future, Details)
- **Built Planning View** with investment case management (Default, Downside, Base, Upside cases) and probability-weighted reserve calculations
- **Enhanced round cards** with Pro-Rata buttons, reserved amounts, co-investor information, and graduation rate displays
- **Added Future Rounds Builder** with sector profile integration for automated round generation
- **Created Bulk Import & Updates Dialog** for Excel-based investment management workflows
- **Enhanced navigation** with Planning page integration in sidebar and routing system
- **Advanced share calculations** with yellow-highlighted input fields, automatic ownership percentage calculations, and detailed share tracking
- **Probability-weighted reserves** - actual reserves calculated based on graduation rates (e.g., 50% graduation rate on $1.5M reserve = $750K actual reserve)
- **Professional liquidation waterfall modeling** incorporating impact of liquidation preferences in exit scenarios with comprehensive summary calculations
- **Implemented Performance Case Tabs System** following Tactyc best practices with Default/Base/Downside/Upside scenarios, probability weighting, and tabbed interface
- **Built comprehensive round tracking** with actual vs projected rounds, graduation rates, Pro-Rata indicators, MOIC/IRR/FMV calculations, and exit value modeling
- **Added performance case management** with multiple approaches - single case with graduation rates, multiple cases with probabilities, and complex scenarios with custom graduation rates
- **Implemented Scenario Builder System** following Tactyc methodology for fund scenario modeling with parameter modification across General, Sectors, Allocations, Fees, Waterfall, Investments, and Limited Partners sections
- **Built comprehensive scenario comparison** with Construction Fund vs Current Fund vs This Scenario results showing metrics differences and trends
- **Created investment case toggle functionality** allowing users to activate/deactivate individual investment cases and evaluate fund performance impact
- **Added scenario parameter modification** with yellow-highlighted input fields, recalculation functionality, and save/reset capabilities
- **Implemented Optimal Reserves Ranking System** following Tactyc methodology for ranking portfolio companies by expected return on next $1 of investment
- **Built follow-on MOIC calculations** with automatic ranking based on deal-level forecasts for exits, future financing rounds, and performance cases
- **Created reserves optimization table** showing planned vs deployed reserves, efficiency metrics, and performance insights for optimal capital allocation
- **Added portfolio company ranking** with color-coded MOIC indicators, stage filters, and top performer/review required sections for strategic reserve management
- **Implemented Advanced MOIC Analysis System** featuring 7 different types of MOIC calculations moving beyond simple MOIC to sophisticated performance and planning metrics
- **Built Exit MOIC on Planned Reserves chart** showing portfolio companies ranked by expected return on future follow-on investment for optimal reserve deployment
- **Created comprehensive MOIC methodology breakdown** distinguishing between performance to date vs expected performance at exit with detailed calculation explanations
- **Added visual MOIC analysis** with interactive charts focusing on the key planning metric (Exit MOIC on Planned Reserves) for data-driven reserve optimization decisions
- **Implemented Return the Fund Analysis System** providing comprehensive fund returner calculations across portfolio construction, active portfolio management, and reserve optimization scenarios
- **Built interactive ownership dilution charts** showing how Return the Fund changes over subsequent rounds with Series A and Seed investment tracking
- **Created reserve optimization slider** with real-time Return the Fund impact analysis for determining optimal follow-on investment amounts
- **Added comprehensive Return the Fund methodology** with tabbed interface covering portfolio construction, active portfolio analysis, and reserve determination workflows
- **Integrated fund returner insights** showing aggregate valuation thresholds companies need to achieve to pay back the entire fund with dilution impact modeling
- **Enhanced Forecasting Dashboard** with comprehensive Tactyc methodology implementation including investable capital summary, projected performance tracking, and portfolio insights
- **Built Investable Capital Summary** showing committed vs investable capital breakdown, deployment status tracking, and fund performance metrics matching Tactyc interface patterns
- **Implemented Projected Performance Charts** with construction vs actual vs current projections for deal pacing and TVPI tracking over time with interactive filtering
- **Created Portfolio Insights Analysis** featuring co-investor relationship tracking, sector MOIC performance analysis, and comprehensive portfolio analytics dashboard
- **Integrated five-tab forecasting interface** combining capital summary, performance tracking, portfolio insights, flow modeling, and allocation analysis in unified dashboard
- **Implemented Partial Sales Optimization System** calculating minimum partial sale valuations to ensure IRR-accretive transactions using sophisticated time value of money analysis
- **Built comprehensive partial sales analysis table** showing minimum sale valuations, current valuations, implied premiums/discounts, and MOIC impact across all performance cases
- **Created interactive partial sales controls** with adjustable percentage sold (25% default) and minimum holding period filters for sophisticated liquidity planning
- **Added premium/discount analysis** with color-coded indicators distinguishing attractive sales (at or below current valuation) from premium-required scenarios
- **Integrated Deal vs Fund IRR methodology** ensuring partial sales are accretive at fund level, accounting for time value differences and opportunity costs
- **Built visual analytics dashboard** featuring premium distribution charts, MOIC impact analysis, and comprehensive summary metrics for data-driven partial sales decisions
- **Implemented Construction vs. Actual Comparison Analysis** with exact five-tab interface matching Tactyc methodology (Initial Checks, Follow-On Reserves, Round Sizes, Pre-Money Valuations, Post-Money Valuations)
- **Built comprehensive variance analysis** showing Construction Average vs Actual Average with difference calculations, percentages, and visual indicators for fund performance tracking
- **Created investment pacing breakdown** by entry round with remaining deals tracking and course correction insights for strategic fund management decisions
- **Enhanced Performance Tab** with construction vs actual comparison analysis integrated into forecasting dashboard for complete fund monitoring capabilities