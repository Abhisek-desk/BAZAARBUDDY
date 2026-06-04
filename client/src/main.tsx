
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Car } from 'lucide-react'
import CartProvider from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>,


)
