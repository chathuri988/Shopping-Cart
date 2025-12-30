import { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'
import productsData from './data/products.json'

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setProducts(productsData.products)
  }, [])

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Simple Shopping Cart</h1>
      </header>
      <main className="app-main">
        <ProductList products={products} onAddToCart={addToCart} />
        <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
      </main>
    </div>
  )
}

export default App
