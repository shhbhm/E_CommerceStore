# MERN E-Commerce Platform

A full-featured e-commerce platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with modern tools and best practices.

## 🌟 Key Features

### 🛍️ Customer Features
- User authentication (Register, Login, Password Reset)
- Product browsing and searching
- Product categorization and filtering
- Shopping cart management
- Secure checkout process
- Order history and tracking
- User profile management

### 👑 Admin Features
- Product management (CRUD operations)
- Order management
- User management
- Category management
- Dashboard with analytics
- Inventory management

![Screenshot 2025-06-12 225703](https://github.com/user-attachments/assets/c4a37cfe-277c-4352-93a6-b5e34c06130c)


![Screenshot 2025-06-12 231054](https://github.com/user-attachments/assets/a7f4f7ee-d284-4b5e-a1b9-5913888ebb2d)

![Screenshot 2025-06-12 231124](https://github.com/user-attachments/assets/8450e42b-7f5b-4e1e-addb-12d763c9c9dc)

![Screenshot 2025-06-12 231301](https://github.com/user-attachments/assets/3741e2fe-6eda-490e-bb0f-3bd676e77703)

![Screenshot 2025-06-12 231356](https://github.com/user-attachments/assets/80b2472d-6e0e-4073-aad2-0d90d0a4f192)

![Screenshot 2025-06-12 231748](https://github.com/user-attachments/assets/68a5df6c-1b72-4195-89b2-9dbdc9e125f8)


![Screenshot 2025-06-12 231902](https://github.com/user-attachments/assets/082258fa-0cbd-46df-b3d2-52277fec5d57)

![Screenshot 2025-06-12 231920](https://github.com/user-attachments/assets/73be190a-12a1-4a95-8393-eebdb56fb730)

![Screenshot 2025-06-12 232017](https://github.com/user-attachments/assets/8ccc37ae-3b27-4cb8-ad16-da72e4a5641a)

![Screenshot 2025-06-12 232131](https://github.com/user-attachments/assets/147a0994-3391-44e3-a841-c0057527fb5e)



## 🛠️ Tech Stack

### Frontend
- React.js with Vite
- TailwindCSS for styling
- Redux Toolkit for state management
- React Router for navigation
- Modern ES6+ JavaScript

### Backend
- Node.js & Express.js
- MongoDB for database
- JWT for authentication
- RESTful API architecture
- MVC pattern

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Setup Steps

1. Clone the repository
```bash
git clone [repository-url]
cd MERN-E-Commerce
```

2. Frontend Setup
```bash
cd client
npm install
npm run dev
```

3. Backend Setup
```bash
cd server
npm install
# Create a .env file with necessary configurations
npm run dev
```

4. Environment Variables

Create a `.env` file in the server directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 🚀 Usage

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm run dev
```

3. Access the application:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🔧 API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - User login
- POST /api/auth/forgot-password - Password reset request

### Products
- GET /api/products - Get all products
- GET /api/products/:id - Get single product
- POST /api/products - Create product (Admin)
- PUT /api/products/:id - Update product (Admin)
- DELETE /api/products/:id - Delete product (Admin)

### Orders
- GET /api/orders - Get user orders
- POST /api/orders - Create order
- GET /api/orders/:id - Get order details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
