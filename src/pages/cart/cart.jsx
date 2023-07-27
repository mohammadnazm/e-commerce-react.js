import React, { useContext } from "react"
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { CartItem } from "../cart/cart-item"
import "./cart.css"

export const Cart = () => {
  const { cartItems } = useContext(ShopContext)
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
    </div>
  )
}
