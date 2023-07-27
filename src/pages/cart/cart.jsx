import React, { useContext } from "react"
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { CartItem } from "../cart/cart-item"
import "./cart.css"

import { useNavigate } from "react-router-dom"

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext)
  const totalAmount = getTotalAmount()

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map(product => {
          if (cartItems[product.id] !== 0) {
            // eslint-disable-next-line react/jsx-no-undef
            return <CartItem data={product} />
          }
        })}
      </div>

      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}
