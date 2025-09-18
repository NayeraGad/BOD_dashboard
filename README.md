# 📊 React Dashboard

A responsive **Admin Dashboard** built with React, Redux Toolkit, TailwindCSS, and React Router.  
It features authentication, CRUD operations with JSONPlaceholder, pagination, search, charts with Recharts, and more 🚀.

---

## ✨ Features & Highlights

- 🔐 **Authentication** (Login simulation with localStorage)
- 📦 **State Management** using Redux Toolkit
- 🔄 **CRUD operations** (Users, Posts, Todos)
- 📑 **Reusable Form & Table components**
- 🔍 **Search & Pagination**
- 📊 **Data Visualization** with Recharts (Pie & Bar charts)
- 🎨 **Dark Mode toggle**
- 📱 **Responsive Sidebar & Layout**
- ⏳ **Loader Animations** (from [css-loaders](https://css-loaders.com/))
- 🍞 **Toasts** for actions (react-hot-toast)

---

## 🛠️ Tech Stack

- ⚛️ **React** + React Router
- 🎨 **TailwindCSS**
- 📡 **Axios**
- 🔥 **Redux Toolkit**
- 📊 **Recharts**
- 🍞 **React Hot Toast**
- ⏳ **CSS Loaders**

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/react-dashboard.git
cd react-dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   └── UI/
│   ├── constants/
│   ├── context/
│   ├── hooks/
│   ├── lib/
│   │   ├── features/
│   │   └── utils/
│   ├── pages/
│   │   └── auth/
│   └── utilities/
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── eslint.config.js
```

---

## 🌐 API Endpoints Used

This project uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) fake REST API for demonstration purposes:

- `GET /users` — Fetch all users
- `GET /posts` — Fetch all posts
- `GET /todos` — Fetch all todos
- `POST /users` — Create a new user
- `POST /posts` — Create a new post
- `POST /todos` — Create a new todo
- `PUT /users/:id` — Update a user
- `PUT /posts/:id` — Update a post
- `PUT /todos/:id` — Update a todo
- `DELETE /users/:id` — Delete a user
- `DELETE /posts/:id` — Delete a post
- `DELETE /todos/:id` — Delete a todo

All endpoints are provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

---

## 🏗️ Future Improvements

✅ Add role-based authentication

✅ Enhance form validation

✅ Improve accessibility (ARIA roles, focus traps)

✅ Replace JSONPlaceholder with a real backend

---

## 🙏 Credits

⏳ Loader animations from css-loaders.com

Data from JSONPlaceholder

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
