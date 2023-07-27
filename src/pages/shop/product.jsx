import React, { useContext } from "react"

export const Product = props => {
  const { id, productName, price, productImage } = props.data

  return (
    <div className="product">
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
      </div>
    </div>
  )
}
