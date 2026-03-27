# React Cart App 🛒

A clean, mobile-first shopping cart built with React and Tailwind CSS.

---

## Features

- Browse products in a responsive 2-column grid
- Add / remove items from cart
- Increase & decrease quantity
- Auto-calculated total with discounts
- Cart & page state saved on refresh via localStorage
- Mobile-first clean UI with no scrollbar

---

## Tech Stack

`React 18` `Context API` `useReducer` `localStorage` `Tailwind CSS` `JSON Server` `Vite`

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/neerajkumarya1472/cart-app.git
cd cart-app

# Install dependencies
npm install

# Start JSON Server (in one terminal)
npx json-server --watch db.json --port 3000

# Start the app (in another terminal)
npm run dev
```

Open `http://localhost:5173`

---

## Folder Structure

```
src/
├── components/     # Cart, ProductList, Header, ProductCart
├── context/        # CartContext — global state
├── assets/         # Images
└── App.jsx         # Root component
```

---

Made by **Neeraj Kumar**
