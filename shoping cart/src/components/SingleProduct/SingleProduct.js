import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { CartState } from '../../Context/Context';
import Rating from "../Rating/Rating"

const SingleProduct = ({ product }) => {

  const { state: { cart },
    dispatch } = CartState()

  return (
    <div>
      <Card style={{ width: '18rem', marginBottom: "20px" }}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name} </Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ </span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          <Button
            variant="danger"
          >
            Remove from Cart
          </Button>
          <Button disabled={!product.inStock}>
            {!product.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct