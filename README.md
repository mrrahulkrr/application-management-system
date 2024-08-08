# Application Management System

This project is a prototype application management system built as the Recruiter Portal, allowing recruiters to efficiently track and manage job applications. The system is developed using Next.js for both frontend and backend, with MongoDB as the database.
**Note:** This project is still a work in progress. I am actively developing and improving features.

## Project Structure

```bash
application-management-system/
│
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection setup
│   ├── controllers/
│   │   └── applicationController.js   # Handles application-related logic
│   ├── models/
│   │   └── Application.js     # Mongoose schema for the Application model
│   ├── routes/
│   │   └── applicationRoutes.js  # Routes for application API endpoints
│   ├── middlewares/
│   │   └── authMiddleware.js  # Authentication middleware for route protection
│   ├── utils/
│   │   └── fileUpload.js      # Utility for handling file uploads (e.g., resumes)
│   ├── app.js                 # Entry point for the backend server
│   └── package.json           # Backend dependencies and scripts
│
├── public/
│   └── favicon.ico            # Favicon for the application
│
├── app/
│   ├── layout.js              # Main layout component for the frontend
│   ├── page.js                # Main entry point for the frontend
│   ├── applications/          # Application-related pages
│   │   ├── index.js           # Page to list all applications
│   │   └── [id].js            # Page to view application details by ID
│
├── components/
│   ├── ApplicationList.js     # Component for displaying the list of applications
│   ├── ApplicationDetail.js   # Component for displaying application details
│   ├── SearchFilter.js        # Component for searching and filtering applications
│
├── styles/
│   └── globals.css            # Global styles using Tailwind CSS
│
├── .env                       # Environment variables (e.g., database connection string)
├── package.json               # Frontend dependencies and scripts
└── tailwind.config.js         # Tailwind CSS configuration


# Getting Started

## Prerequisites

- Node.js (v14 or above)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/application-management-system.git
   cd application-management-system

2. Install dependencies for both backend and frontend:

  ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../
   npm install

3. Create a .env file in the root directory and add your environment variables:
   ```bash
      MONGODB_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret

4. Run the development server:
   ```bash
   # Start the backend server
   npm run server
   
   # Start the frontend server
   cd ../
   npm run dev
