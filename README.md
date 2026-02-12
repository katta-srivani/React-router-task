🛍️ React Shopping Cart Application

A modern Shopping Cart application built using ReactJS, React Router, and Tailwind CSS.
This project fetches products from the Fake Store API and allows users to add items to the cart, manage quantities, and view total pricing with discount calculation.

🚀 Live Demo

🔗 Deployed Link: Add your Netlify link here
🔗 GitHub Repository: Add your GitHub repo link here

📌 Features

✅ Fetch products from Fake Store API

✅ Display products in responsive grid layout

✅ Add products to cart

✅ Disable "Add to Cart" if already added

✅ Cart opens as popup modal

✅ Increase / Decrease product quantity

✅ Remove items from cart

✅ Dynamic total price calculation

✅ 10% discount applied on final price

✅ Cart total displayed in Navbar

✅ Animated cart badge

✅ Responsive design (Mobile + Desktop)

🛠️ Tech Stack

React JS

React Router DOM

JavaScript (ES6+)

Tailwind CSS (CDN version)

Fake Store API

📦 API Used

Fake Store API
👉 https://fakestoreapi.com/

Endpoint used:

https://fakestoreapi.com/products

📂 Project Structure
src/
 ├── components/
 │     ├── Navbar.jsx
 │     ├── ProductCard.jsx
           Product list.jsx
 │     └── CartModal.jsx
 │
 ├── pages/
 │     └── Products.jsx
        cart.jsx

 │
 ├── App.js
 ├── main.jsx
 └── index.css

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone <your-repo-link>


2️⃣ Navigate into project folder

cd your-project-name


3️⃣ Install dependencies

npm install


4️⃣ Start development server

npm run dev

🧮 Pricing Logic

Each item stores a quantity property.

Total price = price × quantity

Final price = Total - 10% discount

All totals update dynamically when quantity changes.

🎯 Key Functional Highlights

State management using React useState

Side effects handled with useEffect

Conditional rendering for cart modal

Functional state updates for cart logic

Clean and reusable component structure

Responsive Tailwind utility classes

📱 Responsive Design

Grid layout adjusts using Tailwind breakpoints

Works on:

Mobile devices

Tablets

Desktop screens

🔮 Future Improvements

Add localStorage persistence

Add checkout page

Add product details page

Add search & filtering

Add authentication system

📄 License

This project is open-source and created for learning and assessment purposes.

🙌 Author

Developed by Srivani Katta