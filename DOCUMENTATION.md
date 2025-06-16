# MERN E-Commerce Platform

A modern, full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a responsive design, secure authentication, and streamlined shopping experience.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Admin Features](#admin-features)
- [Shopping Features](#shopping-features)

## Features

### Core Features
- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart management
- Direct order processing
- Admin dashboard
- Product management
- Order management
- Image upload with Cloudinary
- Responsive design

### User Features
- User registration and login
- Product browsing and search
- Cart management
- Order placement and tracking
- Profile management

### Admin Features
- Product CRUD operations
- Order management
- User management
- Image upload and management
- Sales analytics

## Tech Stack

### Frontend
- React.js with Vite
- Redux Toolkit for state management
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Cloudinary for image storage

### Development Tools
- ESLint for code linting
- Nodemon for development
- Git for version control

## Project Structure

### Client Structure
```
client/
├── src/
│   ├── components/
│   │   ├── admin-view/
│   │   └── shopping-view/
│   ├── pages/
│   │   ├── admin-view/
│   │   └── shopping-view/
│   ├── store/
│   │   ├── auth/
│   │   ├── shop/
│   │   └── admin/
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json
```

### Server Structure
```
server/
├── controllers/
│   ├── admin/
│   └── shop/
├── models/
├── routes/
│   ├── admin/
│   └── shop/
├── helpers/
├── services/
└── server.js
```

## Setup and Installation

1. Clone the repository
```bash
git clone <repository-url>
cd MERN-E-Commerce
```

2. Install dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Environment Setup
Create `.env` files in both client and server directories with necessary environment variables.

### Server Environment Variables
```
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_CLOUD_NAME=dlqh57vjv
CLOUDINARY_API_KEY=534398423158586
CLOUDINARY_API_SECRET=<your-cloudinary-secret>
```

### Client Environment Variables
```
VITE_API_URL=http://localhost:5000
```

## Configuration

### MongoDB Setup
1. Create a MongoDB database
2. Update the connection string in server `.env`

### Cloudinary Setup
1. Create a Cloudinary account
2. Configure Cloudinary credentials in server `.env`

## Usage

### Running the Application

1. Start the server
```bash
cd server
npm run dev
```

2. Start the client
```bash
cd client
npm run dev
```

### Default Admin Credentials
- Email: admin123@gmail.com
- Password: admin123
- Username: shubham_solanki

## API Documentation

### Authentication Endpoints
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/auth/profile` - Get user profile

### Product Endpoints
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/admin/products` - Create product (Admin)
- PUT `/api/admin/products/:id` - Update product (Admin)
- DELETE `/api/admin/products/:id` - Delete product (Admin)

### Order Endpoints
- POST `/api/orders` - Create order
- GET `/api/orders` - Get user orders
- GET `/api/admin/orders` - Get all orders (Admin)
- PUT `/api/admin/orders/:id` - Update order status (Admin)

## Admin Features

### Product Management
- Add, edit, and delete products
- Manage product categories
- Upload product images
- Update product stock

### Order Management
- View all orders
- Update order status
- Track order fulfillment

### User Management
- View registered users
- Manage user roles
- Monitor user activity

## Shopping Features

### Product Browsing
- View product catalog
- Search products
- Filter by category
- Sort by price/popularity

### Shopping Cart
- Add/remove items
- Update quantities
- Calculate totals

### Checkout Process
- Direct checkout
- Order confirmation
- Order tracking

## Security Features
- JWT authentication
- Password encryption
- Protected admin routes
- Secure API endpoints

## Additional Notes
- The platform uses Cloudinary for image storage
- MongoDB is used for data persistence
- The application features real-time updates
- Responsive design works on all devices 