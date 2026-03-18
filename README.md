# 🚀 Full-Stack Authentication System (Next.js + Node.js)

A complete full-stack authentication system with modern UI and secure backend integration. Built using Next.js (TypeScript), Node.js, and Firebase authentication.

---

## 📌 Features

### 🎨 Frontend

* ⚡ Built with Next.js + TypeScript
* 🎯 Pixel-perfect responsive UI
* ✅ Form validation using React Hook Form + Zod/Yup
* 🚫 Proper error handling & validation messages
* 🔄 Loading states & disabled buttons for better UX

### 🔐 Authentication

* 🔑 User Login & Registration (Email/Password)
* 🌐 Social Login (Google via Firebase)
* 🔐 Secure session handling
* 👤 Authentication state management (Logged in/out)

### ⚙️ Backend

* 🚀 Node.js / Express backend
* 🔒 Secure password hashing
* 🪪 JWT / Session-based authentication
* 🔗 API integration with frontend

### 🧩 Additional Features

* 📂 Clean and scalable folder structure
* 🧱 Reusable components
* 🛡️ Error handling & edge cases covered

---

## 🛠️ Tech Stack

**Frontend:**

* Next.js
* TypeScript
* React Hook Form
* Zod / Yup
* Tailwind CSS / Bootstrap

**Backend:**

* Node.js
* Express.js
* MongoDB

**Authentication:**

* Firebase (Google Auth)
* JWT

---

## 📁 Project Structure

```bash
TASK/
│── frontend/   # Next.js App
│── backend/    # Node.js API
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yashwantgujar/mlync.git
cd mlync
```

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

## ▶️ Run Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 🔐 Environment Variables

Create `.env` files in both frontend & backend:

### Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### Frontend `.env`

```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
```

---

## 📸 Screenshots

(Add your UI screenshots here)

---

## 📌 Future Improvements

* 🔔 Email verification
* 🔁 Password reset functionality
* 🧑‍💼 Role-based authentication
* 📊 Admin dashboard

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Yashwant Patel**

* GitHub: https://github.com/yashwantgujar

---

⭐ Don't forget to star this repo if you like it!
