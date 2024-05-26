# stock-monitor-backend
# Stock Monitoring Platform

## Overview
This project is a stock monitoring platform that allows users to login and manage their own watchlists of stock symbols. The platform displays the latest stock values on a user-specific dashboard.

## Technologies Used
- Backend: Node.js, Express.js, MongoDB
- Frontend: React, TypeScript, Material UI
- Authentication: JSON Web Tokens (JWT)
- Stock Data: Alpha Vantage API

## Features
- User registration and authentication
- Create and manage stock watchlists
- Display latest stock prices on dashboard
- Secure API with JWT authentication
- Responsive design with Material UI

## Setup Instructions

### Backend

1. Clone the repository:
   ```sh
   git clone <backend-repo-url>
   cd stock-monitor-backend
Create a .env file in the root directory and add the following environment variables:

env
Copy code
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
Install dependencies:

sh
Copy code
npm install
Run the server:

sh
Copy code
npm run dev
Frontend
Clone the repository:

sh
Copy code
git clone <frontend-repo-url>
cd stock-monitor-frontend
Create a .env file in the root directory and add the following environment variables:

env
Copy code
REACT_APP_API_URL=http://localhost:5000/api
Install dependencies:

sh
Copy code
npm install
Run the React app:

sh
Copy code
npm start
Deployment
Backend Deployment
You can deploy the backend on a cloud platform like Heroku, AWS, or Azure. Here is an example for Heroku:

Login to Heroku and create a new app:

sh
Copy code
heroku login
heroku create your-app-name
Set environment variables on Heroku:

sh
Copy code
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
Deploy to Heroku:

sh
Copy code
git push heroku main
Frontend Deployment
You can deploy the frontend on platforms like Netlify, Vercel, or any other static site hosting service. Here is an example for Netlify:

Login to Netlify and create a new site from Git.
Connect your repository and set the build command to:
sh
Copy code
npm run build
Set the publish directory to build.
Deploy the site.
Usage
Register a new user or login with an existing account.
Add stock symbols to your watchlist.
View the latest stock prices on the dashboard.
Contributing
Feel free to open issues or submit pull requests for any improvements or bug fixes.

License
This project is licensed under the MIT License.

markdown
Copy code

### Deployment Instructions (Detailed):

**Deploying Backend on Heroku:**

1. Login to Heroku:
   ```sh
   heroku login
Create a new Heroku app:

sh
Copy code
heroku create stock-monitor-backend
Set the required environment variables on Heroku:

sh
Copy code
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
Push your code to Heroku:

sh
Copy code
git push heroku main
Ensure your app is running by opening it:

sh
Copy code
heroku open
Deploying Frontend on Netlify:

Login to Netlify and click on "New site from Git".

Connect to your GitHub repository and select your frontend project.

Set the build command and publish directory:

sh
Copy code
Build Command: npm run build
Publish Directory: build
Deploy the site and access your app at the provided URL.

This completes the setup for the stock monitoring platform using Node.js for the backend and React with TypeScript for the frontend. The app allows users to register, log in, manage their watchlists, and view the latest stock prices. The deployment instructions ensure your application can be hosted online for users to access.