# Quizo Frontend - Quiz Management System

## 📌 Project Overview
The **Quizo Frontend** is a React-based web application that provides an interface for teachers to manage quizzes. It allows authentication, quiz creation, modification, and deletion through a clean and modern UI using **ShadCN UI**, **Tailwind CSS**, and **React Router**. The application interacts with a backend deployed on Render.

### 🌐 Live Backend API: [https://quizo-backend-brm8.onrender.com](https://quizo-backend-brm8.onrender.com)

> **Note:** Render **spins down free instances** after inactivity, so the **first request may take up to 50 seconds** before responding.

---

## 🚀 Features

- **Authentication**: Teachers can log in using predefined credentials.
- **Dashboard**: View all quizzes created by the logged-in teacher.
- **Create Quiz**: Add a new quiz with a title and description.
- **Edit Quiz**: Modify an existing quiz.
- **Delete Quiz**: Remove a quiz.
- **Responsive Design**: Works on both desktop and mobile.
- **Modern UI**: Utilizes **ShadCN UI** components for a professional look.

---

## 🛠️ Technologies Used

### **Frontend Stack**
- **React (with TypeScript)** - UI library
- **Vite** - Fast build tool
- **React Router** - Client-side navigation
- **Axios** - HTTP requests to backend API
- **ShadCN UI** - Pre-styled UI components
- **Tailwind CSS** - Utility-first styling framework

---

## 📂 Project Structure

```plaintext
frontend/
│── src/
|   ├──assests/              # Assets 
│   ├── components/
│   │   ├── ui/              # ShadCN UI components
│   │   ├── Layout.tsx       # Reusable layout component
│   ├── context/
│   │   ├── AuthContext.tsx  # Manages authentication state
│   ├── pages/
│   │   ├── LoginPage.tsx    # Login page
│   │   ├── DashboardPage.tsx # Dashboard listing quizzes
│   │   ├── QuizFormPage.tsx # Create/Edit Quiz page
│   ├── routes/
│   │   ├── Router.tsx       # Centralized routing file
│   ├── services/
│   │   ├── api.ts           # Axios API service
│   ├── lib/
│   │   ├── utils.ts         # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│── public/
│── package.json
│── tsconfig.json
│── tailwind.config.js
│── postcss.config.cjs
│── vite.config.ts
│── README.md
```

---

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/shaansuraj/quizo-frontend.git
cd quizo-frontend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a **.env** file in the project root and add the following:
```env
VITE_API_BASE_URL=https://quizo-backend-brm8.onrender.com/api
```

### 4️⃣ Start the Development Server
```bash
npm run dev
```
The application should now be available at **http://localhost:3000**.

---

## 📡 API Endpoints (Frontend Interactions)

| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/auth/login` | Logs in a teacher |
| `GET`  | `/api/quizzes?teacher_id=1` | Retrieves all quizzes for a teacher |
| `POST` | `/api/quizzes` | Creates a new quiz |
| `GET`  | `/api/quizzes/:id` | Retrieves a specific quiz |
| `PUT`  | `/api/quizzes/:id` | Updates an existing quiz |
| `DELETE` | `/api/quizzes/:id` | Deletes a quiz |

---

## 🖥️ Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| **Login Page** | `/` | User authentication |
| **Dashboard** | `/dashboard` | Displays quizzes |
| **Create Quiz** | `/create` | Form to create a quiz |
| **Edit Quiz** | `/edit/:quizId` | Form to edit a quiz |

---

## 🏗️ Project Components

### 🔹 Authentication (`AuthContext.tsx`)
- Manages user login state.
- Redirects unauthenticated users to login.

### 🔹 Dashboard (`DashboardPage.tsx`)
- Displays a list of quizzes from API.
- Includes "Edit" and "Delete" buttons.

### 🔹 Quiz Form (`QuizFormPage.tsx`)
- Allows quiz creation & editing.
- Uses ShadCN UI form components.

### 🔹 API Service (`api.ts`)
- Centralized HTTP client using Axios.
- Automatically includes `VITE_API_BASE_URL`.

---

## 📝 Known Issues & Notes
- **Render Free Tier Delay:** The first request to the backend **may take up to 50 seconds** due to Render spinning down inactive instances.
- **Security:** No JWT authentication is implemented; login is static.

---

## 📜 License
This project is open-source under the **MIT License**.

---

## 👨‍💻 Contributing
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit (`git commit -m "Added feature"`)
5. Push (`git push origin feature-branch`)
6. Open a Pull Request 🚀

---

## 🎯 Summary
- 🛠 **Built with:** React, Vite, ShadCN UI, Tailwind, React Router, Axios
- 🔗 **Backend Hosted at:** [https://quizo-backend-brm8.onrender.com](https://quizo-backend-brm8.onrender.com)
- 🎯 **Key Features:** Authentication, Quiz CRUD, Responsive UI
- 🚀 **How to run:** Clone, install dependencies, start the dev server

Enjoy building your Quiz Management System with Quizo! 🚀

