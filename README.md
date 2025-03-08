# GSynergy Data Viewer App

A progressive web application built with Next.js, TypeScript, and AG-Grid for data manipulation and analysis.

## Live Demo

- Application URL: https://lrcode.online
- Demo Credentials:
  - Email: admin@example.com
  - Password: admin123

## Features

### Core Features

- 📊 Interactive data grid with AG-Grid
- 🔐 Authentication system with NextAuth.js
- 📱 Responsive design (min-width: 1080px)
- 🎨 Clean UI with modern styling
- 🔄 State management with Redux
- 📍 Client-side routing with Next.js

### Key Screens

1. **Store Management**

   - Add/Remove/Update stores
   - Drag-and-drop reordering
   - Data persistence

2. **SKU Management**

   - Manage SKUs with prices and costs
   - Interactive data grid
   - Bulk operations support

3. **Planning Grid**

   - Cross-join of Stores and SKUs
   - Calendar grouping by weeks and months
   - Calculated fields (Sales Dollars, GM Dollars, GM%)
   - Conditional formatting for GM%

4. **Charts** (Optional)
   - Store-specific visualization
   - Dual-axis bar chart for GM Dollars and GM%
   - Interactive data selection

## Technology Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Authentication**: NextAuth.js
- **Data Grid**: AG-Grid Enterprise
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Testing**: Jest & React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

## Project Structure

````

## Key Implementation Highlights

1. **Authentication System**
   - Secure JWT-based authentication
   - Protected routes with middleware
   - Session management

2. **Data Management**
   - Efficient state management with Redux
   - Optimized data grid performance
   - Real-time calculations

3. **Type Safety**
   - Comprehensive TypeScript implementation
   - Strong type checking
   - Interface definitions for all components

4. **Testing**
   - Unit tests with Jest
   - Component testing with React Testing Library
   - Integration tests for critical flows

## Areas of Excellence

1. **Authentication Implementation**
   - Secure session management
   - Protected routes
   - Clean user experience

2. **Data Grid Implementation**
   - Efficient data handling
   - Complex calculations
   - Responsive performance

3. **Type Safety**
   - Strong TypeScript implementation
   - Reduced runtime errors
   - Better development experience

## Future Improvements (with 4 more hours)

1. **Enhanced Testing**
   - Increase test coverage
   - Add E2E tests with Cypress
   - Performance testing

2. **Performance Optimization**
   - Implement data virtualization
   - Add request caching
   - Optimize bundle size

3. **Additional Features**
   - Data export functionality
   - Bulk import improvements
   - Advanced filtering options

4. **UI/UX Enhancements**
   - Advanced chart interactions
   - Improved mobile responsiveness
   - Dark mode support

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
````

## Deployment

The application is automatically deployed to Vercel through GitHub integration. Each push to the main branch triggers a new deployment.

## Contributing

This is an interview project and not open for contributions.

## License

This project is private and confidential. © 2025 GSynergy

## Feedback for Challenge Improvement

1. Consider providing more detailed API specifications
2. Include accessibility requirements
3. Add performance benchmarks expectations
4. Provide sample test cases

## Contact

For any queries regarding this submission, please contact careers@gsynergy.com
