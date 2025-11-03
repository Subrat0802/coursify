# 🚀 Coursify

A complete e-learning platform where **instructors** can sign up, upload, and sell their courses 🎓 — while **students** can explore, purchase, and learn from high-quality content seamlessly!

---

## 🧩 Tech Stack

- **Frontend:** React.js  
- **Backend:** Express.js  
- **Database:** MongoDB  

---

## ⚙️ Features

### 👨‍🏫 Instructor
- Sign up and create an instructor profile  
- Upload and manage courses  
- Sell courses and track sales  

### 🎓 Student
- Browse available courses  
- Purchase and enroll in courses  
- Watch and learn anytime  

---

## 🔧 Upcoming Features
- ✅ **Zod Validation** for better input handling  
- 🔐 **OTP Authentication** for secure login/signup  
- 💳 **Payment Gateway Integration** for course purchases  

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Subrat0802/coursify.git
   cd coursify
2. **Install dependencies
   # For frontend
    cd client
    npm install
    
   # For backend
    cd ../server
    npm install
3. **Set up environment variables
    Create a .env file inside the server folder with:

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

4. **Run the app
   # Run backend
    npm run dev
    
   # Run frontend (in another terminal)
    cd client
    npm start

# 📁 Folder Structure
  coursify/
    │
    ├── client/              # React frontend
    │   ├── src/
    │   ├── public/
    │   └── package.json
    │
    ├── server/              # Express backend
    │   ├── routes/
    │   ├── models/
    │   ├── controllers/
    │   ├── server.js
    │   └── package.json
    │
    └── README.md



