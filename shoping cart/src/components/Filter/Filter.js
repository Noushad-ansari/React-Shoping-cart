import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import Rating from '../Rating/Rating';
import "./filter.css"

const Filter = () => {
  const [rate, setRate] = useState(1)


  return (
    <>
     <div className="f_Wrapper">
     <div className="filters">
        <span className="title">Filter Products</span>
        <hr />
        {/* Ascending */}
        <span>
          <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
          />
        </span>

        {/* Descending */}
        <span>
          <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
          />
        </span>

        {/* Include Out of Stock */}
        <span>
          <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
          />
        </span>

        {/* Fast Delivery Only */}
        <span>
          <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
          />
        </span>

        {/* rating */}
        <span>
          <label style={{ paddingRight: 10 }}>Rating: </label>
          <Rating rating = {rate} style = {{cursor :"pointer"}} onClick = {(i)=> setRate(i + 1) }  />
        </span>

        {/* Clear Filters */}
        <span>
          <Button
            variant="light"
          >
            Clear Filters
          </Button>
        </span>
      </div>
     </div>
    </>


  )
}

export default Filter