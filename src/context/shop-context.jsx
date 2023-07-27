import React, { createContext, useState } from "react"
import { PRODUCTS } from "../products"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length; i++) {
    cart[i] = 0
  }
  return cart
}

export const ShopContextProvider = props => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] }))
  }

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>
}
