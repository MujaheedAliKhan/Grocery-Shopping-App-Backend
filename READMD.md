# ⚙️ Backend - Grocery Shopping App

This is the backend of the **Grocery E-Commerce Application** built using **Node.js, Express.js, and MongoDB**.

It provides APIs for authentication, product management, order handling, admin controls, and AI chatbot support.

---

## 🚀 Features

### 👤 Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Persistent Login Support
- Protected Routes
- Admin Authorization (Role-based Access)

---

### 🛒 Product Management
- Get All Products
- Get Single Product
- Add Product (Admin)
- Update Product (Admin)
- Delete Product (Admin)
- Image Upload with Cloudinary

---

### 📦 Order Management
- Place Order
- Buy Now Order
- Get My Orders
- Cancel Order
- Delete Order
- Update Order Status (Admin)
- Mark Order as Delivered
- Payment Method Support

---

### 🤖 AI Chatbot
- Grocery Assistant Chatbot API
- Product Suggestions
- Healthy Food Recommendations
- Recipe Help

---

## 🧱 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (jsonwebtoken)**
- **Cloudinary**
- **Multer**
- **bcryptjs**
- **CORS**
- **dotenv**
- **OpenAI / Groq API**

---

## ⚙️ Setup

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run server
```

---

## 🔐 Environment Variables

Create a `.env` file in the root folder:

```env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

OPENAI_API_KEY=your_openai_key
# OR
GROQ_API_KEY=your_groq_api_key
```

---

## 📡 API Routes

## Auth Routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

---

## Product Routes

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` *(Admin only)*
- `PUT /api/products/:id` *(Admin only)*
- `DELETE /api/products/:id` *(Admin only)*

---

## Order Routes

- `POST /api/orders`
- `GET /api/orders/my-orders`
- `PUT /api/orders/:id/cancel`
- `DELETE /api/orders/:id`
- `GET /api/orders/admin/all` *(Admin only)*
- `PUT /api/orders/:id/status` *(Admin only)*

---

## Chatbot Route

- `POST /api/chatbot`

---

## 🔒 Middleware

### Auth Middleware
- JWT Verification
- User Authentication

### Admin Middleware
- Role-based Authorization

### Error Middleware
- Custom Error Handling
- 404 Not Found Handling

---

## 📁 Project Structure

```bash
Backend/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── utils/
 ├── server.js
 └── .env
```

---

## ✨ Notes

- Uses **Multer** for file uploads
- Images stored in **Cloudinary**
- Passwords hashed using **bcrypt**
- Orders linked with authenticated users
- Supports **Cash on Delivery / UPI / Card**
- Includes **AI-powered grocery chatbot**
- Designed with scalable REST API structure

---

## 👨‍💻 Author

**Lavani Mujaheed Ali Khan**