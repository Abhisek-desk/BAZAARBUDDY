🛒 BazaarBuddy - A full-stack grocery delivery platform that simplifies online grocery shopping, order management, and last-mile delivery operations. BazaarBuddy provides a seamless experience for Customers, Administrators, and Delivery Partners through a role-based system and real-time order tracking workflow.

🚀 Problem Statement:-

  Managing grocery orders, inventory, payments, and delivery operations across multiple users can be challenging. BazaarBuddy addresses this by providing a centralized platform that streamlines the entire grocery delivery lifecycle—from product browsing and order placement to delivery assignment and order fulfillment.

✨ Features

👤 Customer

- User registration and login
- Browse products by category
- Product search and filtering
- Shopping cart management
- Secure checkout process
- Cash on Delivery and Online Payment support
- Real-time order tracking
- Order history and status updates

🛠️ Admin

- Dashboard with platform analytics
- Product management (Create, Update, Delete)
- Inventory and stock management
- Order management
- Delivery partner onboarding
- Assign delivery partners to orders
- Monitor deliveries and order statuses
🚚 Delivery Partner

- Secure login portal
- View assigned deliveries
- Update delivery progress
- OTP-based delivery verification
- Manage active and completed deliveries

💳 Payments

- Stripe payment gateway integration
- Secure online payment processing
- Cash on Delivery support

🔗 Links


🌐Live Demo - https://bazaarbuddy-beryl.vercel.app/


🔗GitHub Repository - https://github.com/Abhisek-desk/BAZAARBUDDY


LinkedIn: https://www.linkedin.com/in/abhisek-mishra-61b080355


📊 Order Workflow

Placed
   ↓
Confirmed
   ↓
Assigned
   ↓
Packed
   ↓
Out for Delivery
   ↓
Delivered

🏗️ Tech Stack

Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios
- React Hot Toast
- Lucide React

Backend

- Node.js
- Express.js
- TypeScript

Database

- PostgreSQL
- Prisma ORM

Authentication

- JWT Authentication
- Role-Based Access Control (RBAC)

Payment Gateway

- Stripe

📂 Project Structure


    BazaarBuddy/
    │
    ├── client/
    │   ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── layouts/
    │   └── services/
    │
    ├── server/
    │   ├── controllers/
    │   ├── routes/
    │   ├── middleware/
    │   ├── prisma/
    │   ├── utils/
    │   └── types/
    │
    └── README.md


⚙️ Installation

Clone Repository

    git clone https://github.com/your-username/bazaarbuddy.git
   cd bazaarbuddy

Backend Setup

    cd server

    npm install

 Create a ".env" file:


    DATABASE_URL=your_database_url


    JWT_SECRET=your_jwt_secret


    STRIPE_SECRET_KEY=your_stripe_secret_key
    PORT=5000


Run Prisma migrations:


    npx prisma migrate dev


Start backend:


    npm run dev


Frontend Setup

    cd client


    npm install

Create ".env":


    VITE_API_URL=http://localhost:5000/api

Start frontend:

    npm run dev

🌐 Environment Variables

 Backend

    DATABASE_URL=

    JWT_SECRET=

    STRIPE_SECRET_KEY=

Frontend

    VITE_API_URL=

📚 Key Learnings

Through this project, I gained practical experience in:

- Full-stack application architecture
- RESTful API design and implementation
- JWT authentication and authorization
- PostgreSQL database design with Prisma ORM
- Stripe payment integration
- Role-based access control systems
- Real-world order and delivery workflow management
- State management and API integration in React
- Building responsive and user-friendly interfaces

👨‍💻 Author

ABHISEK MISHRA🤗

- LinkedIn: https://www.linkedin.com/in/abhisek-mishra-61b080355
- GitHub: https://github.com/Abhisek-desk
