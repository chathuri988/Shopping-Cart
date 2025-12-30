# Simple Shopping Cart

A basic shopping cart application built with React and Vite, designed to learn React fundamentals and JSON data handling.

## Features

- **Product Display**: Shows 5 products from a JSON file with name, price, and image
- **Shopping Cart**: Displays added items with quantity and total price
- **Add to Cart**: Click to add products to the cart
- **Remove from Cart**: Click to remove items from the cart
- **Automatic Updates**: Cart updates automatically when items change

## Components

- `App.jsx` - Main component with state management
- `ProductList.jsx` - Displays all products
- `Cart.jsx` - Shows cart items and total
- `Product.jsx` - Individual product card component

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Product.jsx
│   ├── ProductList.jsx
│   └── Cart.jsx
├── data/
│   └── products.json
├── App.jsx
├── App.css
└── main.jsx
```

## Technologies Used

- React 19.1.1
- Vite 7.1.6
- CSS3 for styling
- JSON for data storage
